import QuestionMark from '@/assets/image/CreateBook/QuestionMark.svg';
import prevButtonImg from '@/assets/images/prevButton.svg';
import nextButtonImg from '@/assets/images/nextButton.svg';

// function ReadBookPage(props) {
//   return (
//     <HTMLFlipBook width={300} height={500}>
//       <div className="demoPage">Page 1</div>
//       <div className="demoPage">Page 2</div>
//       <div className="demoPage">Page 3</div>
//       <div className="demoPage">Page 4</div>
//     </HTMLFlipBook>
//   );
// }

const ReadBookPage = () => {
  return (
    // <div className="w-screen h-screen">
    //   <FlipBook />
    // </div>
    // 배경 색 흐릿하게
    <div className="w-screen h-screen bg-white bg-opacity-25 relative z-5">
      <div className="absolute top-[45%] left-[2%] bg-moveButtonColor rounded-full h-24 w-24 z-20">
        <img
          className="flex w-20 z-20 mx-auto -ml-[0.01px] mt-[0.02px] my-0 hover:scale-110"
          src={prevButtonImg}
          alt="prev_button"
        />
      </div>
      <div className="flex mx-auto my-0 justify-center h-screen w-[1500px]">
        {/* 가장 큰 박스 */}
        <div className=" w-[1450px] px-0 my-3 bg-[#93C4FF] rounded-2xl z-10">
          <div className="flex flex-row w-full h-full">
            {/* 왼쪽 박스 */}
            <div className=" w-1/2 flex justify-center items-center flex-col px-[2.5rem] py-8 border-[#7bb6ff] border-y-4 border-l-4 border-solid rounded-2xl">
              <div className="flex flex-col items-center justify-around box-border px-2 w-full h-full bg-white bg-opacity-45  rounded-2xl z-20">
                <img src={QuestionMark} className=" mt-12 h-1/4 z-30"></img>
                <div className="box-border mt-4 h-[55%] w-[95%] bg-[#fdfdfd] bg-opacity-70 rounded-2xl z-30">asdf</div>
              </div>
            </div>
            {/* 중간 띠 */}
            <div className="w-[4px] mt-4 h-[96.5%] z-30 rounded-l bg-[#7bb6ff]" />
            {/* 오른쪽 박스 */}
            <div className=" w-1/2 flex justify-center items-center flex-col px-[2.5rem] py-8 border-[#7bb6ff] border-y-4 border-r-4 border-solid rounded-2xl">
              <div className="flex flex-col items-center justify-around box-border px-2 w-full h-full bg-white bg-opacity-45  rounded-2xl z-20">
                <img src={QuestionMark} className=" mt-12 h-1/4 z-30"></img>
                <div className="box-border mt-4 h-[55%] w-[95%] bg-[#fdfdfd] bg-opacity-70 rounded-2xl z-30">asdf</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[45%] right-10 bg-moveButtonColor rounded-full h-24 w-24 z-20 items-end">
        <img className="w-20 z-20 mx-auto my-0" src={nextButtonImg} alt="next_button" />
      </div>
    </div>
  );
};

export default ReadBookPage;
