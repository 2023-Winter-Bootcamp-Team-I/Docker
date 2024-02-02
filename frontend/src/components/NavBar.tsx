import { useNavigate, useParams } from 'react-router-dom';
import homeicon from '@/assets/images/Library/Home Page.svg';
import { useTranslation } from 'react-i18next';
import i18n from '@/i18n';
import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userLanguage } from '@/states/atom';
import ShareModal from './ShareModal';

function NavBar() {
  const setUserLang = useSetRecoilState(userLanguage);
  const selectedLanguage = useRecoilValue(userLanguage);
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false); // 모달 상태 추가
  const { book_id } = useParams();
  const numberBookID = parseInt(book_id as string, 10);

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

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
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
                <p className="text-[#397acf] mt-2">{t('library')}</p>
              </button>
              <button
                className="w-[10rem] h-[3rem] bg-[#397acf] pt-2 pl-1 text-white rounded-[20px] border-[#4071a8] border-b-[5px] border-r-4 hover:scale-110"
                onClick={() => openModal()}
              >
                {t('share')}
              </button>
            </div>
          </div>
        </div>
      </div>
      {showModal && <ShareModal closeModal={closeModal} bookId={numberBookID} />}
    </nav>
  );
}

export default NavBar;
