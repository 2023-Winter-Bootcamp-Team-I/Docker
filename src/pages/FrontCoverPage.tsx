import React from 'react';
import robotImg from '@/assets/images/robot.svg';
import prevButtonImg from '@/assets/images/prevButton.svg';
import nextButtonImg from '@/assets/images/nextButton.svg';
import barcodeImg from '@/assets/images/barcode.svg';

import HTMLFlipBook from 'react-pageflip';

function FrontCoverPage() {
  return (
    <div className="w-screen h-screen bg-mainColor bg-opacity-15 relative z-10">
      <div className="absolute top-[45%] left-[2%] bg-moveButtonColor rounded-full h-24 w-24 ml-10 z-20">
        <img className="flex w-20 z-20 mx-auto -ml-[0.01px] mt-[0.02px] my-0" src={prevButtonImg} alt="prev_button" />
      </div>
      <div className="flex flex-row w-[1500px] mx-auto my-0">
        <HTMLFlipBook
          width={1500}
          height={800}
          size="stretch"
          minWidth={400}
          maxWidth={650}
          minHeight={600}
          maxHeight={800}
          drawShadow={true}
          flippingTime={1000}
          className="book-theme"
          startPage={1}
          usePortrait={true}
          startZIndex={10}
          autoSize={true}
          maxShadowOpacity={0.5}
          showCover={false}
          mobileScrollSupport={true}
          clickEventForward={true}
          useMouseEvents={true}
          swipeDistance={3}
          showPageCorners={true}
          disableFlipByClick={false}
          style={{}}
        >
          <div className="flex flex-col basis-1/2 h-screen justify-center">
            <div className="flex basis-1/2 justify-center">
              <img className="flex mx-auto min-h-full z-20 w-60 mt-36" src={robotImg} alt="robot_character" />
            </div>
            <div className="flex flex-col basis-1/2 items-center align-middle mt-24 ml-20 gap-y-10">
              <div className="flex justify-center font-dongle text-6xl w-2/3 leading-snug break-keep">
                라푼젤의 주인공이 되어 이야기를 완성시켜봐!
              </div>
            </div>
          </div>
          <div className="flex basis-1/2 h-screen justify-center content-center">
            <FrontCover></FrontCover>
          </div>
          <div className="flex basis-1/2 h-screen justify-center content-center">
            <BackCover></BackCover>
          </div>
        </HTMLFlipBook>
      </div>
      <div className="absolute top-[45%] right-10 bg-moveButtonColor rounded-full h-24 w-24 z-20 items-end">
        <img className="w-20 z-20 mx-auto my-0" src={nextButtonImg} alt="next_button" />
      </div>
    </div>
  );
}

export default FrontCoverPage;

const FrontCover = React.forwardRef(() => {
  return (
    <div className="flex bg-bookCoverBack h-[90%] w-[96%] mt-8 -ml-24 rounded-3xl">
      <div className="flex flex-col bg-bookCoverFront h-full w-full mt-6 z-10 -ml-6 mr-6 rounded-3xl justify-center items-center">
        <div className="flex bg-bookCoverTextBox h-[25%] w-4/5 rounded-3xl border-2 border-shadowGray border-solid font-dongle text-[7rem] mb-44 items-center justify-center">
          <div className="p-10 break-keep text-titleColor align-bottom">백설 공주</div>
        </div>
        <div className="bg-bookCoverLine h-1/5 w-full mt-10 mb-44"></div>
      </div>
    </div>
  );
});

const BackCover = React.forwardRef(() => {
  return (
    <>
      <div className="flex basis-1/2 h-screen justify-center content-center">
        <div className="flex bg-bookCoverBack h-[90%] w-[96%] mt-8 ml-24 rounded-3xl">
          <div className="flex flex-col bg-bookCoverFront h-full w-full mt-6 z-10 ml-6 -mr-6 rounded-3xl justify-center items-end ">
            <div className="relative bg-bookCoverLine h-1/5 w-full mt-[500px]"></div>
            <img className="z-20 w-80 mr-10 mt-16" src={barcodeImg} alt="robot_character" />
          </div>
        </div>
      </div>
      <div className="absolute top-[45%] left-[2%] bg-moveButtonColor rounded-full h-24 w-24 z-20">
        <img className="flex w-20 z-20 mx-auto mt-[0.02px] my-0" src={prevButtonImg} alt="prev_button" />
      </div>
      <div className="flex flex-col basis-1/2 h-screen justify-center">
        <div className="flex flex-col basis-1/2 items-center align-middle mt-24 ml-20 gap-y-10"></div>
      </div>
    </>
  );
});

// const PageCover: React.FC<{ children: React.ReactNode }> = (props) => {
//   return <div>{props.children}</div>;
// };
