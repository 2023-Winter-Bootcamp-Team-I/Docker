import nextButtonImg from '@/assets/images/nextButton.svg';
import Pencil from '@/assets/image/CreateInfo/Pencil.svg';
import BackArrow from '@/assets/image/CreateInfo/BackArrow.svg';
import input1 from '@/assets/image/CreateInfo/input1.png';
import typing from '@/assets/image/CreateInfo/typing.svg';
import { useEffect, useState } from 'react';
import { useWebSocket } from '@/websocket/WebSocketProvider';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { bookID, originTitle, userIDState, userLanguage } from '@/states/atom';

type WsData = {
  userId?: number;
  type: string;
  pageCnt: number;
  userName?: string;
  fairyTale?: string;
  gender?: string;
  age?: string;
  language?: string;
  choice?: number;
  koContent?: string;
  enContent?: string;
};

function CreateInfoPage() {
  const setUserLanState = useSetRecoilState(userLanguage);
  const [userId] = useRecoilState<number>(userIDState);
  const setbookId = useSetRecoilState(bookID);
  const setOriginTitle = useSetRecoilState<string>(originTitle);

  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState<WsData>({
    userId: userId,
    type: 'start',
    pageCnt: 0,
    userName: '',
    fairyTale: '',
    gender: '',
    age: '',
    language: '',
  });

  const [selectedGender, setSelectedGender] = useState<string>('');

  const handleChange = (field: string, value: string) => {
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [field]: value,
    }));

    if (field === 'language') {
      setUserLanState(value);
    }
    if (field === 'fairyTale') {
      setOriginTitle(value);
    }
    if (field === 'gender') {
      setSelectedGender(value);
    }

    // console.log(userLanState);
  };

  const getButtonStyle = (gender: string) => {
    return `w-1/2 h-[3.5rem] bg-white text-[${
      selectedGender === gender ? '#000000' : '#898989'
    }] rounded-full text-2xl  font-jua focus:ring ${selectedGender === gender ? 'ring-4 ring-[#464fff]' : ''}`;
  };

  const getLanguageButtonStyle = (value: string, selectedLanguage: string) => {
    return `w-1/2 h-[3.5rem] bg-white text-[${
      selectedLanguage === value ? '#000000' : '#898989'
    }] rounded-full text-2xl  font-jua focus:ring ${selectedLanguage === value ? 'ring-4 ring-[#464fff]' : ''}`;
  };

  //웹소켓 연결
  const { send } = useWebSocket();

  const sendDataToServer = () => {
    send(userInfo);
  };

  const handleNextButtonClick = () => {
    navigate('/creationstart');
    setTimeout(() => {
      setbookId(0);
      sendDataToServer();
    }, 2500);

    console.log('User Info:', userInfo);
  };

  useEffect(() => {
    handleChange('fairyTale', '백설 공주');
  }, []);

  return (
    <div className="h-screen w-screen flex justify-center ">
      <div className="flex gap-20 items-center  ">
        <div className="flex flex-col items-center gap-20 ">
          <img src={input1} className="w-[50%]" />
          <div className="text-4xl font-jua text-white ">주인공의 정보를 입력해주세요</div>
        </div>
        {/* <div className="flex w-[1300px] h-screen justify-center items-center"> */}
        <Link to="/library">
          <button>
            <img src={BackArrow} className="left-[0%] top-[0%] ml-5 mt-5 absolute hover:scale-110" alt="BackArrow" />
          </button>
        </Link>
        <div className="flex flex-col w-[60%] items-center justify-center gap-5 -mr-10 bg-[#6b84b8] px-10  pb-12 rounded-2xl z-10">
          <img src={typing} className="w-[30%]" />
          <div className="flex flex-row w-[100%] mb-5  ">
            <div className=" w-[50%] h-[3.5rem] items-center flex flex-row bg-[#659AFF] rounded-full">
              <img src={Pencil} className="w-2/5 mb-10 " alt="Pencil" />
              <p className="font-[Jua] text-3xl mt-1 text-white ">이름</p>
            </div>
            <div className="flex w-full ml-5">
              <input
                type="text"
                placeholder="이름 입력"
                className="h-[3.5rem] w-[100%] px-5 text-2xl font-['Jua'] rounded-full focus:outline-signupButtonBlue "
                value={userInfo.userName}
                onChange={(e) => handleChange('userName', e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-row w-[100%] mb-5 ">
            <div className="w-[50%] h-[3.5rem] flex items-center  flex-row bg-[#659AFF] rounded-full">
              <img src={Pencil} className="w-2/5 mb-10 " alt="Pencil" />
              <p className="font-[Jua] text-3xl text-white ">성별</p>
            </div>
            <div className="flex flex-row w-[100%] gap-5 ml-5 ">
              <button className={getButtonStyle('남자')} onClick={() => handleChange('gender', '남자')}>
                남자
              </button>
              <button className={getButtonStyle('여자')} onClick={() => handleChange('gender', '여자')}>
                여자
              </button>
            </div>
          </div>
          <div className="flex flex-row w-[100%] mb-5 ">
            <div className="w-[50%] h-[3.5rem] flex items-center  flex-row bg-[#659AFF] rounded-full">
              <img src={Pencil} className="w-2/5 mb-10 " alt="Pencil" />
              <p className="font-[Jua] text-3xl mt-1 text-white ">나이</p>
            </div>
            <div className="flex w-full ml-5">
              <input
                type="text"
                placeholder="나이 입력"
                className=" w-[100%] h-[3.5rem]  px-5 text-2xl font-['Jua'] rounded-full focus:outline-signupButtonBlue"
                value={userInfo.age}
                onChange={(e) => handleChange('age', e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-row w-[100%] mb-5 ">
            <div className="w-[50%] h-[3.5rem]  flex items-center flex-row bg-[#659AFF] rounded-full ">
              <img src={Pencil} className="w-2/5 mb-10 " alt="Pencil" />
              <p className="font-[Jua] text-3xl mt-1 text-white ">언어</p>
            </div>
            <div className="flex gap-5 w-[100%] ml-5 ">
              <button
                className={getLanguageButtonStyle('ko', userInfo.language)}
                onClick={() => handleChange('language', 'ko')}
              >
                한국어
              </button>
              <button
                className={getLanguageButtonStyle('en', userInfo.language)}
                onClick={() => handleChange('language', 'en')}
              >
                영어
              </button>
            </div>
          </div>
          <div className="flex flex-row w-[100%]  gap-5">
            <div className="w-[50%] h-[3.5rem]  flex items-center  flex-row bg-[#659AFF] rounded-full">
              <img src={Pencil} className="w-2/5 mb-10 " alt="Pencil" />
              <p className="font-jua mt-1 text-3xl text-white -ml-1">동화책</p>
            </div>
            <div className="flex w-full ">
              <select
                className="w-[100%]  font-jua text-3xl ml-1"
                onChange={(e) => handleChange('fairyTale', e.target.value)}
              >
                <option value="백설 공주">백설 공주</option>
                <option value="아기 돼지 삼형제">아기 돼지 삼형제</option>
                <option value="신데렐라">신데렐라</option>
                <option value="흥부와 놀부">흥부와 놀부</option>
              </select>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
      <div className="flex flex-col justify-center items-end absolute left-[88%] top-[40%] gap-5 ">
        <p className="mt-5 text-[#3cb0fd] text-3xl font-jua">동화책 만들기</p>
        <button className="flex" onClick={handleNextButtonClick}>
          <div className="bg-moveButtonColor rounded-full h-24 w-24 z-20 hover:scale-110">
            <img className="w-20 z-20 mx-auto my-0 hover:scale-110" src={nextButtonImg} alt="next_button" />
          </div>
        </button>
      </div>
    </div>
  );
}

export default CreateInfoPage;
