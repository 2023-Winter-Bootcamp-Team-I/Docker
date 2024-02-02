import { BookPage } from '@/api/books';
import React from 'react';
import useSound from 'use-sound';
import { useRecoilValue } from 'recoil';
import { userLanguage } from '@/states/atom';
import ttsButton from '@/assets/images/ttsButton.svg';

interface ContentPageProps {
  pageData: BookPage;
}

const ContentPage = React.forwardRef(({ pageData }: ContentPageProps) => {
  const selectedLanguage = useRecoilValue(userLanguage);
  const bookContent = selectedLanguage === 'ko' ? pageData.ko_content : pageData.en_content;

  const AudioButton = () => {
    const ttsUrl = selectedLanguage === 'ko' ? pageData.ko_tts_url : pageData.en_tts_url;
    const [play] = useSound(ttsUrl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.stopPropagation();
      play();
    };

    return (
      <button onClick={handleClick} className="">
        <img src={ttsButton} className="rounded-full w-10"></img>
      </button>
    );
  };

  return (
    <div className="flex justify-center items-center flex-col px-[2.5rem] py-8 h-[620px] 2xl:h-[690px] bg-[#9dc2f3] border-[#8cb0e0] border-y-4 border-l-4 border-solid rounded-2xl">
      <div className="flex flex-col items-center justify-around box-border px-2 w-full h-[100%] bg-white bg-opacity-65 rounded-2xl z-30">
        <img src={pageData.image_url} className=" mt-6 h-[55%] z-30 rounded-lg" alt="content_image" />
        <div className="box-border mt-4 h-[55%] w-[95%] relative bg-[#fdfdfd] border-4 border-[#e0e8f7] border-solid bg-opacity-70 rounded-2xl z-30 mb-6 overflow-y-auto scrollbar-thumb-[#c4c5c5] scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-track-white hover:scrollbar-thumb-[#747474] scrollbar scrollbar-w-2">
          <div className="flex flex-col justify-center font-[Pretty] text-3xl p-8 ">
            {bookContent}
            <div className="flex justify-end h-8 absolute bottom-6 right-4">
              <AudioButton></AudioButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ContentPage;
