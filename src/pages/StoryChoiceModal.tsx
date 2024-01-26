import Robot from '@/assets/image/StoryChoice/Robot.svg';
import { bookID, originTitle, showModal, userLanguage } from '@/states/atom';
import { useWebSocket } from '@/websocket/WebSocketProvider';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { useRecoilState, useSetRecoilState } from 'recoil';
//웹 소켓 통신으로 스토리 보내고 받고
interface Story {
  language: string;
  content: string;
}

const StoryChoiceModal = () => {
  const { socket } = useWebSocket();
  const [message, setMessage] = useState<string>('');
  const [storyChoice, setStoryChoice] = useState<Story[]>([]);
  const [isshowModal, setShowModal] = useRecoilState<boolean>(showModal);
  // const [prevChoiceArr, setPrevChoiceArr] = useState<Story[]>([]);
  const [userLanState] = useRecoilState(userLanguage);
  const [index, setIndex] = useState<number>(0); //화면에 출력할 배열의 인덱스 (한글은 0과 2, 영어는 1과 3)
  const [choice, setChoice] = useState<number>(0); //선택한 스토리 기준 인덱스 (왼쪽 선택 시0 또는 2)
  const [boxNum, setBoxNum] = useState<number>(0); //선택한 박스 번호(왼쪽=1, 오른쪽=2)
  const [pageNum, setPageNum] = useState<number>(0);
  const [socketSent, setSocketSend] = useState<boolean>(false);
  // const setbookId = useSetRecoilState<number>(bookID);
  const [bookId, setbookId] = useRecoilState(bookID);

  const navigate = useNavigate();

  if (userLanState == 'en') {
    setIndex(1);
  }

  //사용자가 스토리 선택 시 보낼 데이터 값 설정
  const choiceStory = (boxNumber: number) => {
    //페이지 번호
    setPageNum((prev) => prev + 1);

    if (boxNumber === 1) {
      setChoice(0);
      setBoxNum(boxNumber);
    } else if (boxNumber === 2) {
      setChoice(2);
      setBoxNum(boxNumber);
    }
  };

  useEffect(() => {
    if (boxNum !== 0) {
      setSocketSend(true);

      //소켓 데이터 전송
      socket?.send(
        JSON.stringify({
          type: pageNum === 3 ? 'end' : 'ing',
          pageCnt: pageNum,
          choice: boxNum,
          koContent: storyChoice[choice],
          enContent: storyChoice[choice + 1],
        })
      );
    }

    return () => {
      console.log('unmounting..');
      //데이터 값 초기화
      setBoxNum(0);
      setStoryChoice([]);
      setMessage('');
      setShowModal(false);
      setSocketSend(false);

      if (bookId != 0 && pageNum === 2) {
        //unmounting이 되고 socket()실행이 돼서 pagenum -1
        console.log('socket closed');
        //소켓종료
        socket?.close();
      }
    };
  }, [bookId, pageNum]);

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 500);

    //socket 연결, pagenum<6이면
    if (socket && pageNum < 3) {
      //서버 응답 받기
      socket.onmessage = (event) => {
        // Buffer를 문자열로 변환
        const data = JSON.parse(event.data.toString());
        const msg: string = data.message;

        //한글자씩 받아서 이어붙이기
        setMessage((m) => m + msg);

        console.log(message);
        console.log(storyChoice);

        // 특정 문자로 데이터 슬라이싱해 저장
        setStoryChoice((prevArr) => {
          const lastItem = prevArr[prevArr.length - 1]; //배열의 마지막 요소

          if (msg === '1' || msg === '2') {
            // 다른언어 또는 다른 스토리 시작
            return [...prevArr, { language: msg, content: '' }];
          } else if (lastItem) {
            // 이전 이야기에 내용 추가
            lastItem.content += msg;
            return [...prevArr.slice(0, -1), lastItem];
          }

          return prevArr;
        });
      };

      // 마지막 페이지의 경우 bookId만 받음
    } else if (socket && pageNum === 3) {
      socket.onmessage = (event) => {
        const book = JSON.parse(event.data);
        setbookId(book.bookId);
      };

      navigate('/creationfinish');
    }
  }, [isshowModal, socket, storyChoice, pageNum]);

  useEffect(() => {
    console.log(storyChoice);
  }, [storyChoice]);

  return (
    <div className="flex flex-col bg-[#ffffff] bg-opacity-70 w-screen h-screen py-8 absolute top-0 left-0 z-10">
      <div className=" flex flex-col mx-auto my-0 w-[75rem] relative z-20">
        {/* 로봇 이미지 + 멘트  */}
        <div className="flex flex-row justify-center items-center gap-8 -ml-32 z-50">
          <motion.img
            src={Robot}
            className="w-[14%] mt-3 z-40"
            animate={{ y: [0, -20, 0], rotate: [0, 0, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          ></motion.img>
          <div className="font-dongle text-8xl -mt-4 text-[#002875] z-20">다음은 어떤 장면이 펼쳐질까?</div>
        </div>
        {/* 박스 3개 */}
        <div className="flex flex-row justify-center h-[800px] -mt-16 pb-10 z-20">
          {/* 큰 박스 */}
          <div className=" w-[97%] h-[70%] bg-[#E6E6E6] rounded-xl border-[#cbdbec] border-1 border-solid pt-4 flex flex-row gap-20 justify-center z-20">
            {/* 왼쪽 박스 */}
            {isshowModal ? (
              <>
                <div
                  onClick={() => {
                    choiceStory(1);
                  }}
                  className="cursor-pointer w-[42%] h-[77%] mt-[4.5rem] p-8 bg-[#D9D9D9] shadow-[3px_3px_2px_2px_rgba(0,0,0,0.20)]  rounded-3xl  z-30"
                >
                  <span className="font-dongle text-[#222222] text-4xl">
                    {storyChoice[index] ? storyChoice[index]['content'] : ''}
                  </span>
                </div>
                <div
                  onClick={() => {
                    choiceStory(2);
                  }}
                  className="cursor-pointer w-[42%] h-[77%] mt-[4.5rem] p-8 bg-[#D9D9D9] shadow-[3px_3px_2px_2px_rgba(0,0,0,0.20)] rounded-3xl  z-30"
                >
                  <span className="font-dongle text-[#222222] text-4xl">
                    {storyChoice[index + 2] ? storyChoice[index + 2]['content'] : ''}
                  </span>
                </div>
              </>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryChoiceModal;
