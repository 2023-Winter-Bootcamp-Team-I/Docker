import json

import openai
from channels.generic.websocket import WebsocketConsumer
from page.models import Page


class WritePage(WebsocketConsumer):

# ----------------------------------------------------------------------- 소켓 통신 연결
    def connect(self):
        self.accept()
        #책-페이지 저장 리스트 아래 작성
        self.book_content = [] #전체 컨텐츠 저장
        self.book_image = [] #이미지 저장
        self.book_content_ko = []
        self.book_content_en = []


# ---------------------------------------------------------------------- 소켓 통신 연결 해제
    def disconnect(self, closed_code):
        # 만약에 중간에 끊킨 경우, book_id와 관련된 것 전부 삭제
        book_object = Page.objects.get(id=self.book_id)
        pages = Page.objects.filter(book_id=book_object)
        page_num = pages.count()

        # 가져온 페이지의 수와 예상 페이지 수가 다르면 삭제
        if page_num != self.page_num:
            Page.objects.filter(book_id=self.book_id).delete()

        for pages in pages:
            try:
                # 해당 페이지의 한국어 내용과 영어 내용을 가져와 출력
                ko_content = pages.ko_content
                en_content = pages.en_content
                print(ko_content, en_content)
            except:
                Page.objects.filter(book_id=self.book_id).delete()
        pass


# --------------------------------------------------------------------- 소켓 통신 (메세지)
    def receive(self, text_data):

        text_data_json = json.loads(text_data) #data를 받음
        page_cnt = text_data_json.get('page_cnt')

        if text_data_json['type'] == 'start':
            user_info = self.extract_user_info(text_data_json)
            responses = self.generate_start_gpt_responses(user_info) # 시작
            # 페이지 번호 증가 및 응답 반환
            page_cnt += 1
            self.send_response_to_client(responses, page_cnt)

        elif text_data_json['type'] == 'ing':
            # 책 내용 가져온거 처리하기
            choice = text_data_json.get('choice')

            ko_content = text_data_json.get('ko_content')
            en_content = text_data_json.get('en_content')

            self.save_story_to_db(page_cnt, ko_content, en_content)

            image_uuid = self.generate_dalle_image(en_content) # 비동기 함수 ??

            # 6번째 페이지 처리
            if page_cnt == 6:
                responses = self.generate_end_gpt_responses(choice) # 끝
                page_cnt += 1
                self.send_response_to_client(responses, page_cnt)

            else: # 2~5번 페이지 처리
                responses = self.generate_ing_gpt_responses(choice) # 중간
                page_cnt += 1
                self.send_response_to_client(responses, page_cnt)

        elif text_data_json['type'] == 'end': # 마지막 선택 처리

            ko_content = text_data_json.get('ko_content')
            en_content = text_data_json.get('en_content')

            self.save_story_to_db(page_cnt, ko_content, en_content)

            image_uuid = self.generate_dalle_image(en_content) # 비동기 함수 ??



######################## 함수들 ########################

# --------------------------------------------------------------------- 이야기 만들 때 필요한 함수들
    def extract_user_info(self, data):
        user_info = {
            'username': data.get('username'),
            'gender': data.get('gender'),
            'age': data.get('age'),
            'lan': data.get('lan'),
            'fairytale': data.get('fairytale')
        }
        return user_info

    def generate_start_gpt_responses(self, user_info):
        # 지피티씨 호출해서 만들고 반환하기. -> 이 정보들로 이야기 만들어줘 두가지로 6번만 선택할거야 어쩌구 저쩌구
        self.conversation = [
            {
                "role": "system",
                "content": "당신은 글쓰기가 유창한 어린이 동화 작가입니다. 당신은 각색 또한 잘하는 동화 작가입니다. 당신은 한국어와 영어 모두 능통합니다. 어떤 리액션도 하지마세요. 사용자가 원하는 것에 대해 양식에 맞춰서 글만 써주세요. 20대 여성처럼 친근하게 적어주세요."
            },
            {
                "role": "user",
                "content": f"{user_info.fairytale}를 각색해서 {user_info.username}가 주인공인 동화를 써주세요. "
                           f"동화 시작부터 서로 다른 이야기의 내용 2가지를 제시해 주세요. "
                           f"답변에 따라 이야기가 바뀝니다. "
                           f"제가 선택을 하기 전까지 기다려 주세요. "
                           f"선택을 하면, 이야기를 계속 이어나가 주세요. "
                           f"이 단계를 반복하며, 6번의 전환 후에 이야기를 마무리합니다. "
                           f"지금 쓰려는 동화의 대상 독자의 성별은 {user_info.gender}, 연령은 {user_info.age} 입니다. "
                           f"언어는 {user_info.lan}로 먼저 써주세요. "
                           f"먼저 써준 내용이 한국어라면 다음으로 영어로도 써주고, 영어라면 다음으로 한국어로도 써주세요."
                           f"(20초 이내로)"
            }
        ]

    def generate_ing_gpt_responses(self, choice):
        # 지피티씨 호출해서 만들고 반환하기. -> 내가 선택한 이야기로 진행해주고 계속 이어서 두가지로 해줘
        self.conversation = [
            {
                "role": "system",
                "content": f"{choice}번을 고르겠습니다. {choice}번의 이야기에 이어지는 이야기를 이전에 당신의 응답과 같이 제시해주세요(20초 이내로)"
            },
        ]

    def generate_end_gpt_responses(self, choice):
        # 지피티씨 호출해서 만들고 반환하기. -> 내가 선택한 이야기로 이야기 마무리 엔딩 내줘
        self.conversation = [
            {
                "role": "system",
                "content": f"{choice}번의 내용으로 동화 내용 마무리 엔딩 지어주세요.(20초 이내로)"
            },
        ]


# -------------------------------------------------------------------- db 넣는 함수들
    def save_story_to_db(self, page_cnt, ko_content, en_content):
        Page.objects.create(page_cnt=page_cnt, ko_content=ko_content, en_content=en_content)
    def generate_dalle_image(self, en_content):
        print("달리야 해줘")
        # 달리 호출해서 만들고 반환 -> 이 내용에 적절한 그림을 그려줘
        # save_story_to_db 함수랑 합쳐야 하는 것 같은데 맞나 en_content 이용해서 image_url 받으면 db에 넣으면 되자나


# -------------------------------------------------------------------- 응답을 클라이언트한테 전송하는 함수
    def send_response_to_client(self, responses, page_cnt):
        # GPT-3 스트리밍 API 호출
        for response in openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages= responses,
            temperature=0.5,
            stream=True
        ):
            # 각 응답 조각 처리
            message = response.choices[0].message['content']
            if message:
                #클라이언트에게 실시간으로 메세지 전송
                self.send(text_data=json.dumps({"message": message}))


        # if 초기 생성 -> 초기 값을 서버가 받음 (n번 페이지) = 0 <start>
            # data json 형태니까 나눌 수 있겠지
            # 나이 성별 이름 동화 등을 가지고 gpt 함수를 부를거야
            # 답변이 생성되면 프론트로 디비 저장 않고, 다시 보내줘 -> 두개 다 반환 n++ 까지 하고 n 전달
        # elif 책 만들고 있는 경우 -> 선택한 스토리를 서버가 받음 (n번 페이지) <ing>
            # data json 형태니까 나눌 수 있겠지
            # 1. 받은 스토리(n번 페이지)를 db에 저장 -> 페이지 숫자랑 내용이랑 등등 + 이미지 UUID
            # 2. 받은 스토리(n번 페이지) 셀러리로 넘겨서 달리로 그림 생성 하기 + 위 이미지 UUiD
            # 3. if n+1번 페이지 제작 중 == 6 <- 분기 이유 : 프롬프팅 함수가 달라짐.
                # 3-1. 이전에 받은 값(n) 받아서 이야기 2개 생성
                # 3-2. 답변 생성되면 프론트로 다시 보내기 -> 두개다 반환 (영어버전 한글 버전 다) n++
            # 3. elif 마지막이 아니라면(2-5번 페이지 제작중)
                # 3-1. 이전에 받은 값(n) 받아서 이야기 2개 생성
                # 3-2. 답변 생성되면 프론트로 다시 보내기 -> 두개다 반환 (영어버전 한글 버전 다) n++
        # else 사용자의 마지막 선택 end / n이 7일때
            # 1. 받은 스토리(6번 페이지)를 db에 저장 -> 페이지 숫자랑 내용이랑 등등 + 이미지 UUID
            # 2. 받은 스토리(6번 페이지) 셀러리로 넘겨서 달리로 그림 생성 하기 + 위 이미지 UUiD