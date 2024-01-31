import barcodeImg from '@/assets/images/barcode.svg';
import QuestionMark from '@/assets/image/CreateBook/QuestionMark.svg';
import { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import React from 'react';
import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

interface BookType {
  pageFlip(): {
    isFlipping: boolean;
    flipNext(): void;
  };
}

function CreationFinishPage() {
  const book = useRef<BookType>(null);
  // const navigate = useNavigate();
  const navigateToCreateBookPage = () => {
    // setTimeout(() => {
    //   navigate('../title');
    // }, 1000);
  };

  useEffect(() => {
    // Set an interval to flip the page every 5 seconds
    // const intervalId = setInterval(() => {
    //   if (book.current) {
    //     // Check if the book is not flipping, then flip to the next page
    //     if (!book.current.pageFlip().isFlipping) {
    //       book.current.pageFlip().flipNext();
    //     }
    //   }
    // }, 1000);
    // Clear the interval when the component unmounts
    // return () => clearInterval(intervalId);
  }, []); // Run this effect only once on mount

  return (
    <div className="w-screen h-screen">
      <div className="h-full flex flex-col justify-center items-center">
        {/* <div className="w-11/12 xl:w-11/12 2xl:w-3/4 2xl:left-60 2xl:top-3 2xl:h-11/12 absolute left-16 top-6"> */}
        <div className="xl:w-8/12 md:w-10/12 w-10/12 h-4/6 absolute md:top-20 top-20">
          <div className="flex flex-col">
            <HTMLFlipBook
              width={1250}
              height={1400}
              size="stretch"
              minWidth={500}
              maxWidth={1200}
              minHeight={700}
              maxHeight={1180}
              drawShadow={true}
              flippingTime={1000}
              className="book-theme"
              startPage={1}
              usePortrait={true}
              startZIndex={30}
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
              ref={book}
              onFlip={navigateToCreateBookPage}
            >
              {[1, 2].map((index) => (
                <div className="flex flex-col justify-center items-center">
                  <Page key={index}></Page>
                </div>
              ))}
              <div className="flex flex-col justify-center items-center">
                <BackCover></BackCover>
              </div>
            </HTMLFlipBook>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreationFinishPage;

const Page = React.forwardRef(() => {
  return (
    <div className="flex flex-col px-[2.5rem] w-full h-full py-8 bg-[#93C4FF] border-[#7bb6ff] border-[4px] border-solid rounded-2xl">
      <div className="flex flex-col items-center justify-around box-border px-2 w-full h-[776px] bg-white bg-opacity-45  rounded-2xl z-30">
        <img src={QuestionMark} className=" mt-12 h-1/4 z-30"></img>
        <div className="box-border h-[55%] w-[95%] bg-[#fdfdfd] bg-opacity-70 rounded-2xl z-30 pb-10"></div>
      </div>
    </div>
  );
});

const BackCover = React.forwardRef(() => {
  return (
    <div className="flex h-full w-full pr-4">
      <div className="flex bg-bookCoverBack h-[98%] w-full mb-8 rounded-3xl">
        <div className="flex flex-col justify-end bg-bookCoverFront h-full w-full mt-5 z-20 ml-6 -mr-6 rounded-3xl gap-12 items-end ">
          <div className="bg-bookCoverLine h-1/5 w-full"></div>
          <img className="z-20 w-80 mr-6 scale-90" src={barcodeImg} alt="barcode_image" />
        </div>
      </div>
    </div>
  );
});
