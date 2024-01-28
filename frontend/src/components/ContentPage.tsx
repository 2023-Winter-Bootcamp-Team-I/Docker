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
    <div className="flex justify-center items-center flex-col px-[2.5rem] py-8 bg-[#93C4FF] border-[#7bb6ff] border-y-4 border-l-4 border-solid rounded-2xl">
      <div className="flex flex-col items-center justify-around box-border px-2 w-full h-[776px] bg-white bg-opacity-45  rounded-2xl z-30">
        <img src={pageData.image_url} className=" mt-12 h-1/2 z-30 rounded-lg" alt="content_image" />
        <div className="box-border mt-4 h-[55%] w-[95%] bg-[#fdfdfd] bg-opacity-70 rounded-2xl z-30 pb-10 mb-10">
          <div className="flex flex-col justify-center font-dongle text-5xl p-8">
            <div className="flex justify-end -mt-4 mb-4">
              <AudioButton></AudioButton>
            </div>
            {bookContent}
          </div>
        </div>
      </div>
    </div>
  );
});

export default ContentPage;
