import { useNavigate } from 'react-router-dom';
import homeicon from '@/assets/images/Library/Home Page.svg';
import { useTranslation } from 'react-i18next';
import i18n from '@/i18n';
import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userLanguage } from '@/states/atom';

import { BsTranslate } from 'react-icons/bs';

function NavBar() {
  const setUserLang = useSetRecoilState(userLanguage);
  const selectedLanguage = useRecoilValue(userLanguage);
  const { t } = useTranslation();

  const navigate = useNavigate();
  const navigateToHomePage = () => {
    navigate('/');
  };
  const navigateToLibraryPage = () => {
    navigate('/library');
  };

  useEffect(() => {
    setUserLang(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage, setUserLang]);

  const handleLanguageChange = (newLanguage: string | undefined) => {
    setUserLang(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <nav className=" ">
      <div className="flex justify-center mx-0 px-16 sm:px-6 lg:px-8">
        <div className="relative flex mt-6h-16 items-center justify-between w-[1400px]">
          <div className="flex items-center ">
            <div className="flex flex-row gap-8 font-[Jua] text-[1.5rem]">
              <button onClick={navigateToHomePage}>
                <img src={homeicon} className="h-[5rem] w-[6rem] mt-2 cursor-pointer" />
              </button>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-end sm:items-stretch sm:justify-end">
            <div className="flex flex-row gap-8 font-[Jua] text-[1.5rem] -mr-8 ">
              <button
                onClick={navigateToLibraryPage}
                className="w-[10rem] h-[3rem] bg-white rounded-[20px] border-[#d1d1d1] border-b-[5px] border-r-4 hover:scale-110"
              >
                <p className="text-[#1D92FF] mt-2">{t('library')}</p>
              </button>
              <button
                onClick={() => handleLanguageChange(selectedLanguage === 'ko' ? 'en' : 'ko')}
                className="flex gap-2 w-[9rem] h-[3rem] bg-[white]  pl-1 rounded-3xl font-[LM] border-[#d1d1d1] border-b-4 border-r-4 hover:scale-110"
              >
                <BsTranslate className="w-[3rem] pl-3 mt-2 pt text-[#305eb3]" />
                <p className="text-[#397acf] mt-3 text-[1.3rem]">{t('languageSelection')}</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
