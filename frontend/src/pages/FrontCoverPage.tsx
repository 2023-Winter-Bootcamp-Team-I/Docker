import robotImg from '@/assets/images/robot.svg';
import prevButtonImg from '@/assets/images/prevButton.svg';
import nextButtonImg from '@/assets/images/nextButton.svg';
import barcodeImg from '@/assets/images/barcode.svg';
import { useState, useRef, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { readBook } from '@/api/books';
import { BookPage } from '@/api/books';
import React from 'react';
import { useParams } from 'react-router-dom';
import FrontCover from '@/components/FrontCover';
import ContentPage from '@/components/ContentPage';
import { useTranslation } from 'react-i18next';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { userLanguage } from '@/states/atom';
import i18n from '@/i18n';
import NavBar from '@/components/NavBar';

function FrontCoverPage() {
  const book = useRef<FlipBookType | null>(null);
  const [bookData, setBookData] = useState<{ pages: BookPage[]; bookTitle: string }>();
  const { book_id } = useParams();
  const { t } = useTranslation();
  const setUserLang = useSetRecoilState(userLanguage);
  const selectedLanguage = useRecoilValue(userLanguage);

  type FlipBookType = {
    pageFlip: () => {
      flipPrev: () => void;
      flipNext: () => void;
    };
  };

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        if (!book_id) {
          return;
        }
        const result = await readBook(book_id);

        setBookData({ pages: result.pages, bookTitle: result.bookTitle });
      } catch (error) {
        console.error('Error fetching book data:', error);
      }
    };
    fetchBookData();
  }, [book_id]);

  useEffect(() => {
    setUserLang(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage, setUserLang]);

  return (
    <div className="flex flex-col -pt-100">
      <NavBar />
      <div className="w-screen h-screen bg-mainColor bg-opacity-15 relative z-10">
        <button
          className="absolute top-[45%] left-[2%] bg-moveButtonColor rounded-full h-24 w-24 ml-10 z-20"
          onClick={() => book.current && book.current.pageFlip().flipPrev()}
        >
          <img className="flex w-20 z-20 mx-auto -ml-[0.01px] mt-[0.02px] my-0" src={prevButtonImg} alt="prev_button" />
        </button>
        <div className="flex flex-row h-screen mx-auto my-0 w-full px-10">
          {bookData && (
            <HTMLFlipBook
              width={1200}
              height={1180}
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
              useMouseEvents={false}
              swipeDistance={3}
              showPageCorners={true}
              disableFlipByClick={false}
              style={{}}
              ref={book}
            >
              <div className="flex flex-col w-full h-full">
                <div className="flex justify-center">
                  <img className="flex mx-auto min-h-full z-20 w-60 mt-36" src={robotImg} alt="robot_character" />
                </div>
                <div className="flex flex-col basis-1/2 items-center align-middle mt-24 ml-20 gap-y-10">
                  <div className="flex justify-center font-dongle text-6xl w-2/3 leading-snug break-keep">
                    {t('letsRead')}
                  </div>
                </div>
              </div>

              <div className="flex w-full h-[800px] pl-10">
                <FrontCover title={bookData.bookTitle}></FrontCover>
              </div>

              {bookData?.pages.map((pageData, index) => (
                <div key={index}>
                  <ContentPage pageData={pageData} />
                </div>
              ))}

              <div className="flex w-full h-[800px] pl-10">
                <BackCover></BackCover>
                <img className="flex mx-auto min-h-full z-20 w-60 mt-36" src={robotImg} alt="robot_character" />
              </div>
            </HTMLFlipBook>
          )}
        </div>
        <button
          className="absolute top-[45%] right-10 bg-moveButtonColor rounded-full h-24 w-24 z-20 items-end"
          onClick={() => book.current && book.current.pageFlip().flipNext()}
        >
          <img className="w-20 z-20 mx-auto my-0" src={nextButtonImg} alt="next_button" />
        </button>
      </div>
    </div>
  );
}

export default FrontCoverPage;

const BackCover = React.forwardRef(() => {
  return (
    <div className="flex h-full pb-6">
      <div className="flex bg-bookCoverBack h-full w-full rounded-3xl">
        <div className="flex flex-col bg-bookCoverFront h-full w-full mt-6 z-20 ml-6 -mr-6 rounded-3xl gap-8 items-end ">
          <div className="bg-bookCoverLine h-1/5 w-full mt-[55%]"></div>
          <img className="z-20 w-80 mr-10 mt-4" src={barcodeImg} alt="barcode_image" />
        </div>
      </div>
    </div>
  );
});
