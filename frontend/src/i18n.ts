import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        library: 'My Library',
        languageSelection: 'English',
        logout: 'Logout',
        letsRead: 'Time to read it with pictures!',
        createTitle: 'How shall we name the book?',
        snowWhite: 'Snow White',
        threeLittlePigs: 'The three little pigs',
        cinderella: 'Cinderella',
        heungbuNolbu: 'Heungbu and Nolbu',
        createBook: 'Create',
        nameQuestion: `What's your name?`,
        genderQuestion: `What's your gender?`,
        ageQuestion: 'How old are you?',
        languageQuestion: 'Please your language!',
        storyQuestion: `Pick your fairytale!`,
        createFairytale: `Let's begin`,
        enterName: 'Enter your name',
        genderMale: 'Male',
        genderFemale: 'Female',
        enterAge: 'Enter your age',
        selectKorean: 'Korean',
        selectEnglish: 'English',
        completeStory: 'Now you are the main character of ',
        nextPageStory: `What's going to happen next?`,
        loadingPage: 'Your fairytale is being generated!',
        bookguBookgu: 'Bookgu',
        whatIfMain: '',
        aiFairytale: '',
        login: 'Login',
        signup: 'Signup',
        share: 'Share',
      },
    },
    ko: {
      translation: {
        library: '나의 도서관',
        languageSelection: '한국어',
        logout: '로그아웃',
        letsRead: '이제 그림과 함께 책을 읽어보자!',
        createTitle: '이제 책의 제목을 지어볼까?',
        snowWhite: '백설공주',
        threeLittlePigs: '아기돼지 삼형제',
        cinderella: '신데렐라',
        heungbuNolbu: '흥부와 놀부',
        createBook: '책 만들기',
        nameQuestion: '이름',
        genderQuestion: '성별',
        ageQuestion: '나이',
        languageQuestion: '언어',
        storyQuestion: '동화책',
        createFairytale: '다음 단계',
        enterName: '이름 입력',
        genderMale: '남자',
        genderFemale: '여자',
        enterAge: '나이 입력',
        selectKorean: '한국어',
        selectEnglish: '영어',
        beCharater: '의 주인공이 되어서',
        completeStory: '이야기를 완성시켜봐!',
        nextPageStory: '다음은 어떤 장면이 펼쳐질까?',
        loadingPage: '책을 만들고 있어요!',
        bookg: '북그북그',
        whatIfMain: '우리 아이가 동화책 주인공이라면?',
        aiFairytale: 'AI와 함께 만드는 우리 아이 동화책',
        login: '로그인',
        signup: '회원가입',
        share: '공유하기',
      },
    },
  },
});

export default i18n;
