import QuestionMark from '@/assets/image/CreateBook/QuestionMark.svg';
import { useState } from 'react';
import StoryChoiceModal from './StoryChoiceModal';
const CreateBookPage = () => {
  const [showStoryChoiceModal] = useState(true);

  return (
    // 배경 색 흐릿하게
    <div className="w-screen h-screen bg-[#e4e4e4] bg-opacity-55 relative z-5">
      <div className="flex mx-auto my-0 justify-center items-center h-screen w-screen">
        {/* 가장 큰 박스 */}
        <div className="px-0 my-3 bg-[#93C4FF] rounded-2xl z-10 xl:w-9/12 lg:h-[75%] 2xl:h-5/6 2xl:w-8/12 md:w-10/12 w-10/12 h-5/6">
          <div className="flex flex-row w-full h-full">
            {/* 왼쪽 박스 */}
            <div className=" w-1/2 flex justify-center items-center flex-col px-[2.5rem] py-8 border-[#7bb6ff] border-y-4 border-l-4 border-solid rounded-2xl">
              <div className="flex flex-col items-center justify-around box-border px-2 w-full h-full bg-white bg-opacity-45  rounded-2xl z-20">
                <img src={QuestionMark} className=" mt-12 h-1/4 z-30"></img>
                <div className="box-border mt-4 h-[55%] w-[95%] bg-[#fdfdfd] bg-opacity-70 rounded-2xl z-30" />
              </div>
            </div>
            {/* 중간 띠 */}
            <div className="w-[4px] mt-4 h-[96.5%] z-30 rounded-l bg-[#7bb6ff]" />
            {/* 오른쪽 박스 */}
            <div className=" w-1/2 flex justify-center items-center flex-col px-[2.5rem] py-8 border-[#7bb6ff] border-y-4 border-r-4 border-solid rounded-2xl">
              <div className="flex flex-col items-center justify-around box-border px-2 w-full h-full bg-white bg-opacity-45  rounded-2xl z-20">
                <img src={QuestionMark} className=" mt-12 h-1/4 z-30"></img>
                <div className="box-border mt-4 h-[55%] w-[95%] bg-[#fdfdfd] bg-opacity-70 rounded-2xl z-30" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {showStoryChoiceModal && <StoryChoiceModal />}
    </div>
  );
};

export default CreateBookPage;
