import book1 from '@/assets/images/Service/book.jpeg';
import book2 from '@/assets/images/Service/book2.jpeg';
import '@/index.css';

const SliderPage = () => {
  const imgslide1 = {
    animation: 'infiniteAnimation1 80s infinite linear',
  };
  const imgslide2 = {
    animation: 'infiniteAnimation2 80s linear infinite ',
  };
  const imgslide3 = {
    animation: 'infiniteAnimation3 80s infinite linear',
  };
  const imgslide4 = {
    animation: 'infiniteAnimation4 80s linear infinite ',
  };

  return (
    <div className="flex flex-col w-screen h-screen bg-[#DAEAFF]">
      <div className="flex flex-col items-center text-[#000229] text-[3.2rem] font-[jua] mb-12">
        <p className="mb-3">
          북그북그에서 만나는
          <br />
        </p>
        <p>다양한 그림</p>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex overflow-hidden relative mb-5 w-full h-[200px]">
          <div className="flex flex-row absolute flex-nowrap mb-5 w-full h-fit gap-8" style={imgslide1}>
            <img className="w-48" src={book2} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book2} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book1} />

            <img className="w-48" src={book1} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book2} />
          </div>
          <div className="flex flex-row absolute flex-nowrap mb-5 w-full h-fit gap-8" style={imgslide2}>
            <img className="w-48" src={book2} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book1} />

            <img className="w-48" src={book1} />
            <img className="w-48" src={book2} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book2} />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-4">
        <div className="flex overflow-hidden relative mb-5 w-full h-[200px]">
          <div className="flex flex-row absolute flex-nowrap mb-5 w-full h-fit gap-8" style={imgslide3}>
            <img className="w-48" src={book2} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book2} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book2} />
          </div>
          <div className="flex flex-row absolute flex-nowrap mb-5 w-full h-fit gap-8" style={imgslide4}>
            <img className="w-48" src={book2} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book2} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderPage;
