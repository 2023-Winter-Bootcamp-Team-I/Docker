import React, { useState, ChangeEvent, useEffect } from 'react';
import letter2 from '@/assets/images/letter2.svg';
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
          className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-mainColor bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button onClick={closeModal}>
            <img className="flex left-[69%] top-[30%] absolute z-40 " src={Close} alt="close_button" />
          </button>
          <div className="bg-[#c7ddfa] mb-  w-[55rem] h-[25rem] rounded-xl flex flex-col z-20 justify-between">
            <div className="flex flex-col justify-center items-center ">
              <div className="flex  gap-4 -ml-28">
                <img src={letter2} className="flex -mb-20  mr-10 scale-110" />
                <p className="font-jua mt-20 text-[#4a8cff] text-[2.7rem]">완성한 동화책을 공유해봐!</p>
              </div>
              <div className="flex mt-12 ">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="이메일을 입력해주세요"
                  required
                  value={email}
                  onChange={handleEmailChange}
                  className="w-[30rem] h-[4.2rem] text-xl  rounded-full px-6 border-2 border-shadowGray focus:outline-signupButtonBlue"
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
                    className="w-[12rem] h-[4rem] text-[#EEEEEE] bg-[#5e99ff] pt-2 text-[1.8rem] rounded-3xl border-[#6091fd] border-b-8 border-r-4 hover:bg-[#447fff] font-jua hover:border-[#296dff]"
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
