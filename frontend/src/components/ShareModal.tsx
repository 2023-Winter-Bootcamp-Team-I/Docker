import React, { useState, ChangeEvent, useEffect } from 'react';
import letterImg from '@/assets/images/letter.svg';
import star from '@/assets/images/star.svg';
import Close from '@/assets/images/Close.svg';
import { sendEmail } from '@/api/email';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface ShareModalProps {
  closeModal: () => void;
  bookId: number;
}

const ShareModal: React.FC<ShareModalProps> = ({ closeModal, bookId }) => {
  const [email, setEmail] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleShareButtonClick = async () => {
    try {
      if (!email) {
        console.error('이메일 주소를 입력해주세요.');
        return;
      }
      await sendEmail({
        email: email,
        book_id: bookId,
      });
      console.log('이메일 전송 요청이 성공했습니다.');
    } catch (error) {
      console.error('이메일 전송 요청이 실패했습니다.', error);
    }
  };

  useEffect(() => {
    console.log(bookId);
    document.body.style.overflow = 'hidden';
    setIsModalOpen(true);
    return () => {
      document.body.style.overflow = 'unset';
      setIsModalOpen(false);
    };
  }, []);

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-white bg-opacity-20 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center text-center md:items-center md:p-0 w-full md:h-10">
            <div className="relative rounded-md shadow-[0_8px_20px_-8px_rgba(0,0,0,0.2)] transition-all my-8 w-2/3 md:w-2/5">
              <div className="flex flex-col md:flex-row h-[65vh]">
                <div className="flex flex-col md:flex-col bg-loginBlue md:basis-1/3  ">
                  <div className="flex basis-2/3 md:justify-center items-center justify-start">
                    <img className="mx-auto min-h-full mt-8 md:w-full w-1/3" src={star} alt="star_character" />
                  </div>
                  <div className="flex basis-1/3 font-dongle text-white xl:text-8xl  text-6xl md:justify-center md:align-bottom  justify-center">
                    북그북그
                  </div>
                </div>
                <div className="flex flex-col bg-mainColor md:basis-2/3 basis-full h-full justify-center">
                  <button onClick={closeModal}>
                    <img
                      className="xl:left-[90%] md:left-[85%] left-[84%] mr-10 top-[5%] z-20 absolute hover:scale-110"
                      src={Close}
                      alt="close_button"
                    />
                  </button>
                  <div className="flex text-white font-jua px-3 xl:text-3xl md:text-xl text-3xl  justify-center mt-10 mb-[7vh]">
                    너의 동화책을 공유해봐!
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="flex justify-center">
                      <img
                        className="flex mx-auto min-h-full md:w-8 w-7 opacity-50 -mr-16 ml-10"
                        src={letterImg}
                        alt="letter_image"
                      />
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="이메일을 입력해주세요"
                        required
                        value={email}
                        onChange={handleEmailChange}
                        className="block md:w-[80%] w-[70%] md:h-[3.2rem] h-[3.2rem] text-base  rounded-full px-20 py-[18px] border-2 border-shadowGray focus:outline-signupButtonBlue"
                      />
                    </div>
                    <div className="flex mb-[7vh] justify-center"></div>
                    <div className="flex flex-row gap-2 ml-2 justify-center">
                      <Link to="/library">
                        <button
                          onClick={() => {
                            handleShareButtonClick();
                            closeModal();
                          }}
                          className="md:w-[9.5rem] w-[7.5rem]  md:h-[3.2rem] h-[2.2rem] mb-10  md:text-[1.4rem] text-[1.0rem]  font-jua rounded-2xl bg-loginBlue md:py-3.5 py-1 text text-3xl leading-7 text-white ml-2 hover:scale-110"
                        >
                          공유하기
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ShareModal;
