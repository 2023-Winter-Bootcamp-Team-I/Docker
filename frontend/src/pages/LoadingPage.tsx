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
    }, 3000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  useEffect(() => {
    setUserLang(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-mainColor">
      <Lottie animationData={book} className="-mt-32" />
      <p className="font-dongle text-white text-[2.5rem] -mt-32">{t('loadingPage')}</p>
      {/* <Lottie animationData={bar} className="w-[20%] h-[30%] -mt-56" /> */}
    </div>
  );
};

export default LoadingPage;
