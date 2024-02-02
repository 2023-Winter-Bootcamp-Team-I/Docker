import Lottie from 'lottie-react';
import book from '@/assets/lottie/loading book.json';
// import bar from '@/assets/lottie/loading bar.json';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { userLanguage } from '@/states/atom';
import i18n from '@/i18n';

const LoadingPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const setUserLang = useSetRecoilState(userLanguage);
  const selectedLanguage = useRecoilValue(userLanguage);

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/library');
    }, 4000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  useEffect(() => {
    setUserLang(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  }, []);

  return (
    <div className="w-screen h-screen flex relative">
      <div className="flex flex-col justify-center items-center w-screen h-screen absolute bg-[#CDE3FF]">
        <Lottie animationData={book} className="-mt-40" />
        <p className="font-[Pretty] text-[#262f8e] text-[1.5rem] -mt-32">{t('loadingPage')}</p>
        {/* <Lottie animationData={bar} className="w-[20%] h-[30%] -mt-56" /> */}
      </div>
    </div>
  );
};

export default LoadingPage;
