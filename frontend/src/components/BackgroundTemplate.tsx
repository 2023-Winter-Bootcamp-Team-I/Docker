import jelly1 from '@/assets/images/Background/jelly-beans 1.svg';
import jelly2 from '@/assets/images/Background/jelly-beans 2.svg';
import jelly3 from '@/assets/images/Background/jelly-beans 3.svg';
import jelly4 from '@/assets/images/Background/jelly-beans 4.svg';
import jelly5 from '@/assets/images/Background/jelly-beans 5.svg';
import jelly6 from '@/assets/images/Background/jelly-beans 6.svg';
import jelly7 from '@/assets/images/Background/jelly-beans 7.svg';
import { ReactNode } from 'react';

const BackgroundTemplate: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className=" w-screen h-full min-h-screen max-h-screen relative bg-mainColor z-0">
      <img src={jelly1} className="absolute z-0 top-0 left-12 w-44 h-28 rotate-0" />
      <img src={jelly2} className="absolute z-0 top-6 right-64 w-44 h-28" />
      <img src={jelly3} className="absolute z-0 top-0 right-4 w-44 h-28" />
      <img src={jelly4} className="absolute z-0 top-80 left-0 w-36 h-40" />
      <img src={jelly5} className="absolute z-0 bottom-1/4 right-0 w-68 h-52" />
      <img src={jelly6} className="absolute z-0 bottom-0 left-12 w-60 h-40" />
      <img src={jelly7} className="absolute z-0 bottom-0 right-8 w-60 h-24" />
      {children}
    </div>
  );
};

export default BackgroundTemplate;
