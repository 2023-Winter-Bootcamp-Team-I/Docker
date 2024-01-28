import jelly1 from '@/assets/images/Service/jelly1.svg';
import jelly2 from '@/assets/images/Service/jelly2.svg';
import jelly3 from '@/assets/images/Service/jelly3.svg';
import jelly4 from '@/assets/images/Service/jelly4.svg';
import jelly5 from '@/assets/images/Service/jelly5.svg';
import jelly6 from '@/assets/images/Service/jelly6.svg';

export default function ServicePage() {
  return (
    <div className="flex flex-col items-center w-screen h-full min-h-screen relative bg-linear-gradient z-0 p-24">
      <img src={jelly1} className="absolute -top-11 left-12 w-60 h-40" />
      <img src={jelly2} className="absolute -top-4 transition-transform right-12 w-52 h-24" />
      <img src={jelly3} className="absolute top-32 left-16" />
      <img src={jelly4} className="absolute top-32 right-8 w-40" />
      <img src={jelly5} className="absolute bottom-[30%] left-12 w-32" />
      <img src={jelly6} className="absolute bottom-[35%] right-12 w-28" />

      <div className="flex flex-col items-center text-white text-[3.2rem] font-[jua] mb-4">
        <h2 className="mb-3">
          아이들의 상상력을 끌어올리는
          <br />
        </h2>
        <h2>새로운 동화의 장</h2>
      </div>
      <div className="felx text-[#6896ff] text-2xl font-[jua]">
        <p>AI와 함께하는 동화책 제작 서비스</p>
      </div>
      <div className="flex flex-row gap-24 mt-16 items-center justify-center w-full h-full">
        <div className="flex bg-[#FCFCFC] bg-opacity-40 shadow-[3px_4px_4px_1px_rgba(0,0,0,0.20)] rounded-[1.5rem] w-[400px] h-[280px]">
          영어지원
        </div>
        <div className="flex bg-[#FCFCFC] bg-opacity-40 shadow-[3px_4px_4px_1px_rgba(0,0,0,0.20)] rounded-[1.5rem] w-[400px] h-[280px]">
          음성지원
        </div>
      </div>
    </div>
  );
}
