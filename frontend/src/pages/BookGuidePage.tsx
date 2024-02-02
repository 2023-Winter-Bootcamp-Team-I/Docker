import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import heart from '@/assets/images/heart.svg';
export default function BookGuidePage() {
  const usenavigate = useNavigate();

  const handleStart = () => {
    usenavigate('/createinfopage');
  };
  return (
    <motion.div
      className="flex justify-center items-center w-screen h-screen bg-[#A9C6FF] bg-opacity-70 relative z-10"
      initial={{ opacity: 0, y: 0 }} // 초기 상태
      animate={{ opacity: 1, y: 0 }} // 애니메이션 적용 상태
      transition={{ duration: 1.5 }}
    >
      <div className="w-[50%] h-[60%] bg-radial-gradient z-10 flex flex-col justify-center items-center">
        <div className="bg-white mb-12 bg-opacity-30 mt-16 w-[50rem] rounded-3xl p-12 flex flex-col">
          <div className="flex  justify-center items-center gap-4 -ml-8">
            {/* <img src={heart} className="flex w-24 -mt-4" />/ */}
            <div className="font-[LM] text-[#000000] text-[2.5rem] mb-6">
              {' '}
              {'['} 동화책 생성 가이드 {']'}
            </div>
            {/* <p className="font-[jua] text-[#010f27] text-[2rem]">동화책 생성 가이드</p> */}
          </div>
          <div className="flex flex-col  justify-center items-center font-[LM]">
            <div className="flex flex-col text-3xl gap-6 text-start my-8">
              <div className="flex gap-4 items-center">
                <img src={heart} className="flex w-12" />
                <p>
                  먼저, 동화책 <span style={{ color: '#659AFF' }}>주인공의 정보</span>를 입력해 주세요.{' '}
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <img src={heart} className="flex w-12" />
                <p>
                  이후 페이지마다 <span style={{ color: '#659AFF' }}>두 개의 이야기</span>가 주어집니다.
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <img src={heart} className="flex w-12" />
                <p>
                  원하는 이야기를 <span style={{ color: '#659AFF' }}>한 개 </span>선택해 주세요.
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <img src={heart} className="flex w-12" />
                <p>
                  총 <span style={{ color: '#659AFF' }}>6번</span>의 이야기를 선택하면 동화책이 완성됩니다!
                </p>
              </div>
            </div>
            <button
              onClick={handleStart}
              className="w-[12rem] h-[4rem] mt-4 text-[#EEEEEE] bg-[#659AFF] pt-2 text-[1.8rem] rounded-3xl border-[#5483DC] border-b-8 border-r-4 hover:bg-[#508dff]"
            >
              시작하기
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
