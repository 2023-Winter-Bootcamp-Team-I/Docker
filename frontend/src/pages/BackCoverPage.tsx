import prevButtonImg from '@/assets/images/prevButton.svg';
import barcodeImg from '@/assets/images/barcode.svg';

function BackCoverPage() {
  return (
    <div className="w-screen h-screen bg-mainColor bg-opacity-15 relative z-10">
      <div className="flex flex-row w-[1500px] mx-auto my-0">
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
      </div>
    </div>
  );
}

export default BackCoverPage;
