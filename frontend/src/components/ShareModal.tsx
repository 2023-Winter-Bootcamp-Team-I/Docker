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
          className="absolute z-1000 top-0 left-0 w-screen h-screen flex items-center justify-center bg-mainColor bg-opacity-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-[rgb(206,226,255)] relative w-[48rem] h-[25rem] rounded-xl flex items-center z-20 justify-center border-[3px] border-[#daeaff] border-solid">
            <button onClick={closeModal}>
              <img className="flex absolute top-4 right-4 w-8 h-8 z-40 " src={Close} alt="close_button" />
            </button>
            <div className=" w-full h-full flex flex-col justify-center items-center -ml-8">
              <div className="flex gap-4">
                <img src={letter2} className="flex mt-8 mr-10 scale-110" />
                <p className="font-[LM] mt-12 -ml-6 text-[#5b97ff] text-[2.5rem]">완성한 동화책을 공유해봐!</p>
              </div>
              <div className="flex mt-8 ">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="이메일을 입력해주세요"
                  required
                  value={email}
                  onChange={handleEmailChange}
                  className="w-[30rem] h-[4rem] text-xl rounded-full px-6 border-2 border-shadowGray focus:outline-signupButtonBlue"
                />
              </div>
              <div className="flex mb-12 justify-center"></div>
              <div className="flex flex-row gap-2 ml-2 justify-center">
                <Link to="/library">
                  <button
                    onClick={() => {
                      handleShareButtonClick();
                      closeModal();
                    }}
                    className="w-[10.5rem] h-[3.5rem] text-[#EEEEEE] bg-[#5b97ff] pt-2 text-[1.5rem] rounded-3xl border-[#5389ff] border-b-8 border-r-4 hover:bg-[#4e8fff] font-[LM] hover:border-[#5b8fff]"
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
