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
    <nav className="bg-gray-800 mt-6">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex space-x-4">
              <div className="flex flex-row gap-8 font-[Jua] text-[1.7rem] -mr-8 ">
                <button onClick={navigateToHomePage}>
                  <img src={homeicon} className="h-[6.5rem] w-[8.5rem] -mt-6 -ml-8 hover:scale-125" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
            <div className="flex flex-row gap-8 font-[Jua] text-[1.7rem] -mr-8 ">
              <button
                onClick={navigateToLibraryPage}
                className="w-[11rem] h-[3.5rem] bg-white pt-1 pl-1 rounded-3xl border-[#d1d1d1] border-b-8 border-r-4 hover:scale-110"
              >
                <p className="text-[#1D92FF] mt-2">{t('library')}</p>
              </button>
              <button
                className="w-[11rem] h-[3.5rem] bg-mainBlue pt-2 pl-1 text-white rounded-3xl border-[#4695D9] border-b-8 border-r-4 hover:scale-110"
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
