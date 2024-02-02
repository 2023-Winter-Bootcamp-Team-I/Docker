import React from 'react';

interface FrontCoverProps {
  title: string;
}

const FrontCover = React.forwardRef(({ title }: FrontCoverProps) => {
  return (
    <div className="flex xl:h-[620px] 2xl:h-[650px] pb-6">
      <div className="flex bg-bookCoverBack h-full w-full rounded-2xl">
        <div className="flex flex-col bg-bookCoverFront h-full w-full mt-5 z-20 -ml-5 mr-6 rounded-2xl justify-around items-center">
          <div className="flex bg-[#eaeaea] h-[22%] w-[75%] rounded-3xl border-2 -mt-6 border-shadowGray border-solid font-[Pretty] text-[4rem] items-center justify-center">
            <div className="p-10 break-keep text-titleColor align-bottom">{title}</div>
          </div>
          <div className="bg-bookCoverLine h-[20%] w-full mb-20"></div>
        </div>
      </div>
    </div>
  );
});

export default FrontCover;
