import React, { useState, ChangeEvent, useEffect } from 'react';
import letterImg from '@/assets/images/letter.svg';
import letter2 from '@/assets/images/letter2.svg';

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
          className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-white bg-opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-signupButtonBlue mb-12 bg-opacity-30 mt-16 w-[55rem] h-[25rem] rounded-3xl flex flex-col z-20 justify-between">
            <div className="flex flex-col justify-center items-center -ml-8">
              <div className="flex justify-center items-center gap-4 -ml-28">
                <img src={letter2} className="flex -mt-8 mb-12 mr-10 scale-150" />
                <p className="font-jua mt-12 text-white text-[2.7rem]">너의 동화책을 공유해봐!</p>
              </div>
              <div className="flex justify-center mt-16 ">
                <img
                  className="flex mx-auto min-h-full w-10  opacity-50 -mr-16 ml-10"
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
                  className="block w-[100%] h-[4.2rem] text-lg  rounded-full px-[8rem] py-[18px] border-2 border-shadowGray focus:outline-signupButtonBlue"
                />
              </div>
              <div className="flex mb-[13vh] justify-center"></div>
              <div className="flex flex-row gap-2 ml-2 justify-center -mt-16">
                <Link to="/library">
                  <button
                    onClick={() => {
                      handleShareButtonClick();
                      closeModal();
                    }}
                    className="w-[15rem] h-[4.5rem] text-[#EEEEEE] bg-[#659AFF] pt-2 text-[2rem] rounded-3xl border-[#5483DC] border-b-8 border-r-4 hover:bg-[#508dff] font-jua"
                  >
                    공유하기
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ShareModal;
