import book1 from '@/assets/images/Service/book.jpeg';
import book2 from '@/assets/images/Service/book2.jpeg';
import '@/index.css';

export default function SliderPage() {
  const imgslide = {
    animation: 'imgslide 8s linear infinite',
  };
  return (
    <div className="flex flex-col w-screen h-screen bg-[#DAEAFF]">
      <div className="flex flex-col items-center text-[#000229] text-[3.2rem] font-[jua] mb-4">
        <p className="mb-3">
          동화책을 완성시키는
          <br />
        </p>
        <p>그림생성 AI</p>
      </div>
      <div className="flex p-8 bg-[#FFFFFF] ">
        <div className="flex flex-row flex-nowrap mb-5 w-full h-100px gap-4" style={imgslide}>
          <img className="w-32" src={book1} />
          <img className="w-32" src={book1} />
          <img className="w-32" src={book1} />
          <img className="w-32" src={book1} />
          <img className="w-32" src={book1} />
          <img className="w-32" src={book1} />
          <img className="w-32" src={book1} />
          <img className="w-32" src={book1} />
          <img className="w-32" src={book1} />
          <img className="w-32" src={book1} />
          <img className="w-32" src={book1} />
          <img className="w-32" src={book1} />
          <img className="w-32" src={book1} />
          <img className="w-32" src={book2} />
        </div>
        <div>
          <img />
        </div>
      </div>
    </div>
  );
}
