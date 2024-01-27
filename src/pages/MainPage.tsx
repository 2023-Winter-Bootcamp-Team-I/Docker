import { useState, useEffect } from 'react';
import LogInModal from '../components/LogInModal';
import bookmark from '@/assets/images/Background/bookmark.svg';
import cutebook from '@/assets/images/Background/bookicon.svg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userLanguage, userIDState } from '@/states/atom';
import { useTranslation } from 'react-i18next';
import i18n from '@/i18n';

const MainPage = () => {
  const [showModal, setShowModal] = useState(false);
  const userID = useRecoilValue(userIDState);
  const setUserID = useSetRecoilState(userIDState);
  const { t } = useTranslation();
  const setUserLang = useSetRecoilState(userLanguage);
  const selectedLanguage = useRecoilValue(userLanguage);

  const bookguBookgu = t('bookguBookgu');

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleLogout = () => {
    setUserID(null);
  };

  useEffect(() => {
    setUserLang(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage, setUserLang]);

  return (
    <div className="flex flex-col">
      <div className="w-screen h-48 bg-mainBlue relative mt-24 flex items-center justify-center gap-52 ">
        <img src={bookmark} className="w-44 h-56 -ml-[35%] -mt-[3.5rem]" />
        <div className="relative w-auto z-10 h-36">
          {bookguBookgu.split('').map((char, index) => (
            <motion.p
              className={`text-[150px] font-normal text-white font-dongle absolute -top-1 -left-1 z-0`}
              style={{
                left: `${index * 5}rem`,
                textShadow: '5px 5px 0px #3462BB', // 그림자 스타일
              }}
            >
              {char}
            </motion.p>
          ))}
        </div>
      </div>
      <div className="flex mt-24 mx-auto my-0 gap-8 w-[1100px] h-auto justify-evenly">
        <div className="flex flex-col gap-6 font-light pl-8 text-white w-2/3">
          <motion.div
            className="text-[3.5rem] font-[Dongle] mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0 }}
          >
            우리 아이가 동화책 주인공이라면?
          </motion.div>
          <motion.div
            className="text-[3.5rem] font-[Dongle] mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0, delay: 1.0 }}
          >
            AI와 함께 만드는 우리 아이 동화책
          </motion.div>
          <div className="flex gap-12 h-20 font-[Jua]">
            {userID ? (
              <Link to="/library">
                <button className="w-[13rem] h-[4.5rem] bg-mainBlue pt-2 text-[2rem] rounded-3xl border-[#4695D9] border-b-8 border-r-4 hover:bg-[#179EFF] hover:scale-110">
                  {t('library')}
                </button>
              </Link>
            ) : (
              <motion.button
                onClick={openModal}
                className="w-[13rem] h-[4.5rem] bg-mainBlue pt-2 text-[2rem] rounded-3xl border-[#4695D9] border-b-8 border-r-4 hover:bg-[#179EFF]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {t('login')}
              </motion.button>
            )}
            {userID ? (
              <Link to="/">
                <button
                  className="w-[13rem] h-[4.5rem] bg-[#F1F1F1] text-mainBlue pt-2 text-[2rem] rounded-3xl border-[#AAAAAA] border-b-8 border-r-4 hover:bg-[#ffffff] hover:scale-110"
                  onClick={handleLogout}
                >
                  {t('logout')}
                </button>
              </Link>
            ) : (
              <Link to="/signup">
                <motion.button
                  className="w-[13rem] h-[4.5rem] bg-[#F1F1F1] text-mainBlue pt-2 text-[2rem] rounded-3xl border-[#AAAAAA] border-b-8 border-r-4 hover:bg-[#ffffff]"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {t('signup')}
                </motion.button>
              </Link>
            )}
          </div>
        </div>
        <motion.img
          src={cutebook}
          className="w-[38rem] h-[25rem] -mt-4 -mr-12"
          animate={{ y: [0, -20, 0], rotate: [0, 0, 0] }}
          transition={{ duration: 2, repeat: 1, ease: 'easeInOut' }}
        />
      </div>
      {showModal && <LogInModal closeModal={closeModal} />}
    </div>
  );
};

export default MainPage;
