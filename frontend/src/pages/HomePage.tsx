import { useState, useEffect } from 'react';
import LogInModal from '../components/LogInModal';
import cutebook from '@/assets/images/Background/bookicon.svg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userLanguage, userIDState } from '@/states/atom';
import { useTranslation } from 'react-i18next';
import i18n from '@/i18n';
import shy from '@/assets/images/shy.svg';

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const userID = useRecoilValue(userIDState);
  const setUserID = useSetRecoilState(userIDState);
  const { t } = useTranslation();
  const setUserLang = useSetRecoilState(userLanguage);
  const selectedLanguage = useRecoilValue(userLanguage);

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
      <div className="w-screen h-screen bg-[#CDE3FF] bg-opacity-20 z-30 flex flex-row justify-center items-center ">
        {/* <div className='bg-[#CDE3FF] bg-opacity-0 z-30 w-screen h-[80vh] flex'></div> */}
        <div className="flex flex-col justify-center gap-20 -ml-8">
          <div className="flex flex-row items-center justify-center mb-8 -mt-20 ">
            <img src={shy} className="flex mt-8 -mr-8 scale-90" />
            <p className="text-[100px] font-normal text-[#305eb3] font-[LM] z-10">북그북그</p>

            <img src={shy} className="flex mt-8 -ml-8 scale-90" />
          </div>
          {/* 서비스 문구 */}
          <div className="flex flex-col gap-6 ml-8 text-[#1f386d]">
            <motion.div
              className="text-[2rem] font-[NPS] "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.0 }}
            >
              우리 아이가 동화책 주인공이라면?
            </motion.div>
            <motion.div
              className="text-[2rem] font-[NPS] mt-4 mb-12 "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.0, delay: 1.0 }}
            >
              AI와 함께 만드는 우리 아이 동화책
            </motion.div>
          </div>

          {/* 회원가입, 로그인 버튼 */}
          <div className="flex gap-12 h-20 ml-6 font-[PR] font-semibold">
            {userID ? (
              <Link to="/library">
                <motion.button
                  className="w-[13rem] h-[4.5rem] text-white bg-[#397acf] pt-2 text-[1.8rem] rounded-3xl border-[#305eb3] border-b-8 border-r-4 hover:bg-[#4570c0] hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                >
                  {t('library')}
                </motion.button>
              </Link>
            ) : (
              <motion.button
                onClick={openModal}
                className="w-[13rem] h-[4.5rem] text-white bg-[#397acf] pt-2 text-[1.8rem] rounded-3xl border-[#505050] border-b-8 border-r-4 hover:bg-[#305eb3]"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.7 }}
              >
                {t('login')}
              </motion.button>
            )}
            {userID ? (
              <Link to="/">
                <motion.button
                  className=" w-[13rem] h-[4.5rem] bg-[#F1F1F1] text-[#305eb3] pt-2 text-[2rem] rounded-3xl border-[#d5d5d5] border-b-8 border-r-4 hover:bg-[#ffffff] hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                  onClick={handleLogout}
                >
                  {t('logout')}
                </motion.button>
              </Link>
            ) : (
              <Link to="/signup">
                <motion.button
                  className=" w-[13rem] h-[4.5rem] bg-[#F1F1F1] text-mainBlue pt-2 text-[2rem] rounded-3xl border-[#d5d5d5] border-b-8 border-r-4 hover:scale-110 hover:bg-[#ffffff]"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                >
                  {t('signup')}
                </motion.button>
              </Link>
            )}
          </div>
        </div>
        {/* 오른쪽 이미지 박스 */}
        <div className="flex flex-col items-center justify-center ml-32 -mb-40">
          <motion.img
            src={cutebook}
            className="w-[32rem] h-[20rem] -mt-0 -mr-12"
            animate={{ y: [0, -20, 0], rotate: [0, 0, 0] }}
            transition={{ duration: 2, repeat: 1, ease: 'easeInOut' }}
          />
        </div>
      </div>
      <div className="absolute z-60 top-[83.1%] bg-[#A1C9FF] w-screen h-[9rem]"></div>

      {showModal && <LogInModal closeModal={closeModal} />}
    </div>
  );
};

export default HomePage;