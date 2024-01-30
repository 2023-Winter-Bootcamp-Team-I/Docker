import book1 from '@/assets/images/Service/book.jpeg';
import book2 from '@/assets/images/Service/book2.jpeg';
import '@/index.css';
// import Swiper from 'swiper';
// import 'swiper/css/bundle';
// const scrollBox = {
//   position: 'relative',
//   display: 'flex',
//   // width: '700px',
//   overflow: 'hidden',
// };
const SliderPage = () => {
  // const scroll1 = {
  //   whiteSpace: 'nowrap',
  //   animation: 'scroll 20s linear infinite',
  //   animationDelay: '-20s',
  // };

  // const scroll2 = {
  //   animation: 'scroll2 20s linear infinite',
  //   animationDelay: `calc(20s / -2)`,
  // };
  const imgslide1 = {
    // animation: 'infiniteAnimation1 10s linear infinite',
    animation: 'infiniteAnimation1 10s infinite linear',
  };
  // const imgslide2 = {
  //   animation: 'infiniteAnimation2 10s linear infinite ',
  // };
  // const swiper = new Swiper('.swiper', {
  //   // Swiper 옵션 설정
  //   loop: true,
  //   autoplay: true,
  //   speed: 500,
  //   slidesPerView: 'auto',
  // });
  // const books = [book2, book2, book1, book1, book1, book1, book2, book2];

  return (
    <div className="flex flex-col w-screen h-screen bg-[#DAEAFF]">
      <div className="flex flex-col items-center text-[#000229] text-[3.2rem] font-[jua] mb-12">
        <p className="mb-3">
          동화책을 완성시키는
          <br />
        </p>
        <p>그림 생성 AI</p>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex overflow-hidden mb-5 w-full">
          <div className="flex flex-row flex-nowrap mb-5 w-full gap-8" style={imgslide1}>
            <img className="w-48" src={book2} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book2} />
          </div>
          {/* <div className="flex flex-row flex-nowrap mb-5 w-full h-[130px] gap-8" style={imgslide2}>
            <img className="w-48" src={book1} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book2} />
            <img className="w-48" src={book2} />
          </div> */}
        </div>
        {/* <div className="flex w-[1636px] bg-white overflow-hidden">
          <div className="flex flex-row flex-nowrap mb-5 w-[100%] h-100px gap-8 infiniteAnimation1" style={imgslide1}>
            <img className="w-48" src={book2} />
            <img className="w-48" src={book2} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book1} />
            <img className="w-48" src={book2} />
          </div>
          <div className="flex flex-row flex-nowrap mb-5 w-full h-100px gap-8 -ml-7">
            <img className="w-48swiper" src={book1} />
            <img className="w-48swiper" src={book1} />
            <img className="w-48swiper" src={book1} />
            <img className="w-48swiper" src={book1} />
            <img className="w-48swiper" src={book1} />
            <img className="w-48swiper" src={book1} />
            <img className="w-48swiper" src={book1} />
            <img className="w-48swiper" src={book2} />
            <img className="w-48swiper" src={book2} />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SliderPage;
