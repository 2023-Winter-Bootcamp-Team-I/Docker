import jelly1 from '@/assets/images/Service/jelly1.svg';
import jelly2 from '@/assets/images/Service/jelly2.svg';
import jelly3 from '@/assets/images/Service/jelly3.svg';
import jelly4 from '@/assets/images/Service/jelly4.svg';
import jelly5 from '@/assets/images/Service/jelly5.svg';
import jelly6 from '@/assets/images/Service/jelly6.svg';
import engbook from '@/assets/images/Service/eng3.png';
import headphone from '@/assets/images/Service/headphone.png';
import airobot from '@/assets/images/Service/airobot.png';
import send from '@/assets/images/Service/send.png';
import { AnimatePresence, motion } from 'framer-motion';

export default function ServicePage() {
  return (
    <div className="flex flex-col items-center w-screen h-full min-h-screen relative bg-linear-gradient z-0 p-24">
      {/* <img src={jelly1} className="absolute -top-11 left-12 w-60 h-40" />
      <img src={jelly2} className="absolute -top-4 transition-transform right-12 w-52 h-24" />
      <img src={jelly3} className="absolute top-32 left-16" />
      <img src={jelly4} className="absolute top-32 right-8 w-40" />
      <img src={jelly5} className="absolute bottom-[30%] left-12 w-32" />
      <img src={jelly6} className="absolute bottom-[35%] right-12 w-28" /> */}

      <AnimatePresence>
        <motion.div
          className="flex flex-col items-center text-white text-[3rem] font-[jua] mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}
        >
          <h2 className="mb-3">
            아이들의 상상력을 끌어올리는
            <br />
          </h2>
          <h2>새로운 동화의 장</h2>
        </motion.div>
      </AnimatePresence>
      <motion.div
        className="felx text-[#6896ff] text-2xl font-[jua]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <p>AI와 함께하는 동화책 제작 서비스</p>
      </motion.div>

      {/* 위쪽 박스 */}
      <AnimatePresence>
        <motion.div
          className="flex flex-row gap-12 mt-16 items-center justify-center w-full h-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 3, delay: 1 }}
        >
          <div className="flex justify-around items-center bg-[#FCFCFC] bg-opacity-40 shadow-[3px_4px_4px_1px_rgba(0,0,0,0.20)] rounded-[1.5rem] px-4 w-[480px] h-[200px]">
            <div className="flex flex-col">
              <p className="text-[#000000] font-[jua] text-3xl mb-1">내가 만든 동화를 영어로</p>
              <br />
              <p className="text-[#656565] text-[1.1rem] mb-2">영어로 동화책을 생성할 수 있을 뿐만 아니라</p>
              <p className="text-[#656565] text-[1.1rem]">만들어진 동화책을 영어로 볼 수 있어요.</p>
            </div>
            <img src={engbook} className="w-[5.5rem] h-[5.5rem]" />
          </div>
          <div className="flex justify-around items-center bg-[#FCFCFC] bg-opacity-40 shadow-[3px_4px_4px_1px_rgba(0,0,0,0.20)] rounded-[1.5rem] px-4 w-[480px] h-[200px]">
            <div className="flex flex-col">
              <p className="text-[#000000] font-[jua] text-3xl mb-1">오디오북 지원</p>
              <br />
              <p className="text-[#656565] text-[1.1rem] mb-2">제작한 동화책을 오디오로 즐겨보세요.</p>
              <p className="text-[#656565] text-[1.1rem]">AI가 한글과 영어 모두 편안하게 들려줄 거에요.</p>
            </div>
            <img src={headphone} className="w-[5.5rem] h-[5.5rem]" />
          </div>
        </motion.div>
      </AnimatePresence>
      {/* 아래쪽 박스 */}
      <AnimatePresence>
        <motion.div
          className="flex flex-row gap-12 mt-8 items-center justify-center w-full h-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5, delay: 2.0 }}
        >
          <div className="flex justify-around items-center bg-[#FCFCFC] bg-opacity-40 shadow-[3px_4px_4px_1px_rgba(0,0,0,0.20)] rounded-[1.5rem] px-4 w-[480px] h-[200px]">
            <div className="flex flex-col">
              <p className="text-[#000000] font-[jua] text-3xl mb-1">그림 생성 AI</p>
              <br />
              <p className="text-[#656565] text-[1.1rem] mb-2">내용에 맞는 귀여운 그림</p>
              <p className="text-[#656565] text-[1.1rem]">AI가 생성한 다양한 그림을 확인해보세요.</p>
            </div>
            <img src={airobot} className="w-[5.5rem] h-[5.5rem]" />
          </div>
          <div className="flex justify-around items-center bg-[#FCFCFC] bg-opacity-40 shadow-[3px_4px_4px_1px_rgba(0,0,0,0.20)] rounded-[1.5rem] px-4 w-[480px] h-[200px]">
            <div className="flex flex-col">
              <p className="text-[#000000] font-[jua] text-3xl mb-1">이메일 공유</p>
              <br />
              <p className="text-[#656565] text-[1.1rem] mb-2">제작한 동화책을 오디오로 즐겨보세요.</p>
              <p className="text-[#656565] text-[1.1rem]">AI가 한글과 영어 모두 편안하게 들려줄 거에요.</p>
            </div>
            <img src={send} className="w-[5.5rem] h-[5.5rem]" />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
