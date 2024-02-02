import img1 from '@/assets/images/Siler/img1.jpeg';
import img2 from '@/assets/images/Siler/img2.jpeg';
import img3 from '@/assets/images/Siler/img3.jpeg';
import img4 from '@/assets/images/Siler/img4.jpeg';
import img5 from '@/assets/images/Siler/img5.jpeg';
import img6 from '@/assets/images/Siler/img6.jpeg';
import img7 from '@/assets/images/Siler/img7.jpeg';
import img8 from '@/assets/images/Siler/img8.jpeg';
import img9 from '@/assets/images/Siler/img9.jpeg';
import img10 from '@/assets/images/Siler/img10.jpeg';
import img11 from '@/assets/images/Siler/img11.jpeg';
import img12 from '@/assets/images/Siler/img12.jpeg';
import img13 from '@/assets/images/Siler/img13.jpeg';
import img14 from '@/assets/images/Siler/img14.jpeg';
import img15 from '@/assets/images/Siler/img15.jpeg';
import img16 from '@/assets/images/Siler/img16.jpeg';
import img17 from '@/assets/images/Siler/img17.jpeg';
import img18 from '@/assets/images/Siler/img18.jpeg';
import img19 from '@/assets/images/Siler/img19.jpeg';
import img20 from '@/assets/images/Siler/img20.jpeg';
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
    <div className="flex flex-col w-screen h-screen bg-[#DAEAFF] py-40">
      <div className="flex flex-col items-center text-[#000229] text-[3.2rem] font-[LM] mb-20">
        <p className="mb-3">
          북그북그에서 만나는
          <br />
        </p>
        <p>다양한 그림</p>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex overflow-hidden relative mb-5 w-[1280px] 2xl:w-full h-[200px]">
          <div className="flex flex-row absolute flex-nowrap mb-5 w-full h-fit gap-8" style={imgslide1}>
            <img className="w-48 shadow-[10px_10px_7px_-5px_rgba(0,0,0,0.25)]" src={img1} />
            <img className="w-48 shadow-[10px_10px_7px_-5px_rgba(0,0,0,0.25)]" src={img2} />
            <img className="w-48 shadow-[10px_10px_7px_-5px_rgba(0,0,0,0.25)]" src={img3} />
            <img className="w-48 shadow-[10px_10px_7px_-5px_rgba(0,0,0,0.25)]" src={img4} />
            <img className="w-48 shadow-[10px_10px_7px_-5px_rgba(0,0,0,0.25)]" src={img5} />
            <img className="w-48 shadow-[10px_10px_7px_-5px_rgba(0,0,0,0.25)]" src={img6} />
            <img className="w-48 shadow-[10px_10px_7px_-5px_rgba(0,0,0,0.25)]" src={img7} />
            <img className="w-48 shadow-[10px_10px_7px_-5px_rgba(0,0,0,0.25)]" src={img8} />
            <img className="w-48 shadow-[10px_10px_7px_-5px_rgba(0,0,0,0.25)]" src={img9} />
            <img className="w-48 shadow-[10px_10px_7px_-5px_rgba(0,0,0,0.25)]" src={img10} />
          </div>
          <div className="flex flex-row absolute flex-nowrap mb-5 w-[1280px] 2xl:w-full h-fit gap-8" style={imgslide2}>
            <img className="w-48 shadow-[10px_10px_7px_-5px_rgba(0,0,0,0.25)]" src={img1} />
            <img className="w-48 shadow-[10px_10px_7px_-5px_rgba(0,0,0,0.25)]" src={img2} />
            <img className="w-48 shadow-[10px_10px_7px_-5px_rgba(0,0,0,0.25)]" src={img3} />
            <img className="w-48 shadow-[10px_10px_7px_-5px_rgba(0,0,0,0.25)]" src={img4} />
            <img className="w-48 shadow-[10px_10px_7px_-5px_rgba(0,0,0,0.25)]" src={img5} />
            <img className="w-48 shadow-[10px_10px_7px_-5px_rgba(0,0,0,0.25)]" src={img6} />
            <img className="w-48 shadow-[10px_10px_7px_-5px_rgba(0,0,0,0.25)]" src={img7} />
            <img className="w-48 shadow-[10px_10px_7px_-5px_rgba(0,0,0,0.25)]" src={img8} />
            <img className="w-48 shadow-[10px_10px_7px_-5px_rgba(0,0,0,0.25)]" src={img9} />
            <img className="w-48 shadow-[10px_10px_7px_-5px_rgba(0,0,0,0.25)]" src={img10} />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-4">
        <div className="flex overflow-hidden relative mb-5 w-[1280px] 2xl:w-full h-[200px]">
          <div className="flex flex-row absolute flex-nowrap mb-5 w-full h-fit gap-8" style={imgslide3}>
            <img className="w-48 shadow-[10px_10px_7px_-5px_rgba(0,0,0,0.25)]" src={img11} />
            <img className="w-48 shadow-[10px_10px_7px_-5px_rgba(0,0,0,0.25)]" src={img12} />
            <img className="w-48 shadow-[10px_10px_7px_-5px_rgba(0,0,0,0.25)]" src={img13} />
            <img className="w-48 shadow-[10px_10px_7px_-5px_rgba(0,0,0,0.25)]" src={img14} />
            <img className="w-48 shadow-[10px_10px_7px_-5px_rgba(0,0,0,0.25)]" src={img15} />
            <img className="w-48 shadow-[10px_10px_7px_-5px_rgba(0,0,0,0.25)]" src={img16} />
            <img className="w-48 shadow-[10px_10px_7px_-5px_rgba(0,0,0,0.25)]" src={img17} />
            <img className="w-48 shadow-[10px_10px_7px_-5px_rgba(0,0,0,0.25)]" src={img18} />
            <img className="w-48 shadow-[10px_10px_7px_-5px_rgba(0,0,0,0.25)]" src={img19} />
            <img className="w-48 shadow-[10px_10px_7px_-5px_rgba(0,0,0,0.25)]" src={img20} />
          </div>
          <div className="flex flex-row absolute flex-nowrap mb-5 w-[1280px] 2xl:w-full h-fit gap-8" style={imgslide4}>
            <img className="w-48 shadow-[10px_10px_7px_-5px_rgba(0,0,0,0.25)]" src={img11} />
            <img className="w-48 shadow-[10px_10px_7px_-5px_rgba(0,0,0,0.25)]" src={img12} />
            <img className="w-48 shadow-[10px_10px_7px_-5px_rgba(0,0,0,0.25)]" src={img13} />
            <img className="w-48 shadow-[10px_10px_7px_-5px_rgba(0,0,0,0.25)]" src={img14} />
            <img className="w-48 shadow-[10px_10px_7px_-5px_rgba(0,0,0,0.25)]" src={img15} />
            <img className="w-48 shadow-[10px_10px_7px_-5px_rgba(0,0,0,0.25)]" src={img16} />
            <img className="w-48 shadow-[10px_10px_7px_-5px_rgba(0,0,0,0.25)]" src={img17} />
            <img className="w-48 shadow-[10px_10px_7px_-5px_rgba(0,0,0,0.25)]" src={img18} />
            <img className="w-48 shadow-[10px_10px_7px_-5px_rgba(0,0,0,0.25)]" src={img19} />
            <img className="w-48 shadow-[10px_10px_7px_-5px_rgba(0,0,0,0.25)]" src={img20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderPage;
