import robotImg from '@/assets/images/robot.svg';
// import nextButtonImg from '@/assets/images/nextButton.svg';
import QuestionMark from '@/assets/image/CreateBook/QuestionMark.svg';
import { useEffect, useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { originTitle as originTitleAtom, userLanguage } from '@/states/atom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import i18n from '@/i18n';

interface BookType {
  pageFlip(): {
    isFlipping: boolean;
    flipNext(): void;
  };
}

function CreationStartPage() {
  const book = useRef<BookType>(null);
  const originTitle = useRecoilValue<string>(originTitleAtom);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const setUserLang = useSetRecoilState(userLanguage);
  const selectedLanguage = useRecoilValue(userLanguage);

  const navigateToCreateBookPage = () => {
    setTimeout(() => {
      navigate('../createbookpage');
    }, 800);
  };

  useEffect(() => {
    // Set an interval to flip the page every 5 seconds
    const intervalId = setInterval(() => {
      if (book.current) {
        // Check if the book is not flipping, then flip to the next page
        if (!book.current.pageFlip().isFlipping) {
          book.current.pageFlip().flipNext();
        }
      }
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Run this effect only once on mount

  useEffect(() => {
    setUserLang(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage, setUserLang]);

  return (
    <div className="w-screen h-screen">
      <div className="h-full flex flex-col justify-center items-center bg-mainColor bg-opacity-15 z-10">
        <div className="flex flex-row h-full w-full xl:w-11/12 2xl:w-3/4 2xl:left-60 2xl:top-3 2xl:h-11/12 ">
          <HTMLFlipBook
            width={1200}
            height={1350}
            size="stretch"
            minWidth={400}
            maxWidth={1200}
            minHeight={600}
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
            <div className="flex flex-col w-full h-full">
              <div className="flex justify-center pr-8">
                <motion.img
                  className="flex mx-auto min-h-full z-20 w-60 mt-36"
                  animate={{ y: [0, -30, 0], rotate: [0, 0, 0] }}
                  transition={{ duration: 2, repeat: 1, ease: 'easeInOut' }}
                  src={robotImg}
                  alt="robot_character"
                />
              </div>
              <div className="flex flex-col basis-1/2 items-center align-middle mt-24 ml-20">
                <div
                  className="flex justify-center font-[Pretty] -mt-20 -ml-28 text-4xl w-2/3 leading-snug break-keep"
                  style={{ textAlign: 'center', whiteSpace: 'pre-line' }}
                >
                  {/* {originTitle}의 주인공이 되어 이야기를 완성시켜봐! */}
                  {selectedLanguage === 'ko' ? (
                    <>
                      {t(originTitle)}
                      {t('beCharater')}
                      <br />
                      {t('completeStory')}
                    </>
                  ) : (
                    `${t('completeStory')}${t(originTitle)}`
                  )}
                </div>
              </div>
            </div>

            <div className="flex w-full h-[800px] pl-10">
              <FrontCover></FrontCover>
            </div>

            {[1, 2].map((index) => (
              <div>
                <Page key={index}></Page>
              </div>
            ))}
          </HTMLFlipBook>
        </div>
        {/* <button
          className="absolute top-[45%] right-10 bg-moveButtonColor rounded-full h-24 w-24 z-20 items-end"
          onClick={() => book.current.pageFlip().flipNext()}
        >
          <img className="w-20 z-20 mx-auto my-0" src={nextButtonImg} alt="next_button" />
        </button> */}
      </div>
    </div>
  );
}

export default CreationStartPage;

const FrontCover = React.forwardRef(() => {
  const originTitle: string = useRecoilValue<string>(originTitleAtom);

  return (
    <div className="flex h-full pb-6">
      <div className="flex bg-bookCoverBack h-full w-full rounded-3xl">
        <div className="flex flex-col bg-bookCoverFront h-full w-full mt-5 z-20 -ml-6 mr-6 rounded-3xl items-center">
          <div className="flex bg-bookCoverTextBox h-[25%] w-4/5 rounded-3xl border-2 border-shadowGray border-solid font-[Pretty] mt-16 text-[5rem] items-center justify-center">
            <div className="p-10 break-keep text-titleColor align-bottom">{originTitle}</div>
          </div>
          <div className="bg-bookCoverLine mt-48 h-1/5 w-full"></div>
        </div>
      </div>
    </div>
  );
});

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
