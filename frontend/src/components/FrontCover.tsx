import React from 'react';

interface FrontCoverProps {
  title: string;
}

const FrontCover = React.forwardRef(({ title }: FrontCoverProps) => {
  return (
    <div className="flex h-[830px] pb-6">
      <div className="flex bg-bookCoverBack h-full w-full rounded-3xl">
        <div className="flex flex-col bg-bookCoverFront h-full w-full mt-6 z-20 -ml-6 mr-6 rounded-3xl justify-center items-center">
          <div className="flex bg-bookCoverTextBox h-[25%] w-4/5 rounded-3xl border-2 border-shadowGray border-solid font-dongle text-[7rem] mb-44 items-center justify-center">
            <div className="p-10 break-keep text-titleColor align-bottom">{title}</div>
          </div>
          <div className="bg-bookCoverLine h-1/5 w-full mt-10 mb-44"></div>
        </div>
      </div>
    </div>
  );
});

export default FrontCover;
