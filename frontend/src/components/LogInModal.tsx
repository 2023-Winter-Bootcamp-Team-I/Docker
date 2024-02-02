import { useState, useEffect } from 'react';
import heartImg from '@/assets/images/heart.svg';
import letterImg from '@/assets/images/letter.svg';
import lockImg from '@/assets/images/lock.svg';
import Close from '@/assets/images/Close.svg';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '@/api/login'; // 파일 경로 확인 필요
import { useSetRecoilState } from 'recoil';
import { userIDState } from '@/states/atom';

interface LogInModalProps {
  closeModal: () => void;
}

function LogInModal({ closeModal }: LogInModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const setUserID = useSetRecoilState(userIDState);
  const [, setError] = useState('');
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await loginUser({ email, password });
      const userID = response.data['result']['user_id'];

      if (userID) {
        setUserID(userID);
        setError('');
        closeModal();
        setTimeout(() => {
          navigate('/library');
        }, 1500);
      } else {
        setError('유효하지 않은 아이디입니다.');
      }
    } catch (error) {
      setError('로그인에 실패하였습니다.');
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
          className="z-50 absolute w-screen h-screen bg-mainColor bg-opacity-60 pt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center items-center mt-8 text-center sm:items-center sm:p-0">
            <div className="relative rounded-lg shadow-[0_8px_20px_-8px_rgba(0,0,0,0.2)] transition-all my-28 w-2/5">
              <div className="flex flex-row h-[70%]">
                <div className="flex flex-col bg-loginBlue pt-20 basis-1/3">
                  <div className="flex basis-2/3 justify-center">
                    <img className="mx-auto min-h-full w-2/3 scale-75" src={heartImg} alt="heart_character" />
                  </div>
                  <div className="flex basis-1/3 font-[HS] mt-8 text-white text-6xl justify-center align-bottom">
                    북그북그
                  </div>
                </div>
                <div className="flex flex-col bg-mainColor basis-2/3 h-full">
                  <button onClick={closeModal}>
                    <img className="left-[90%] top-[4%] z-20 absolute scale-75" src={Close} alt="close_button" />
                  </button>
                  <div className="flex text-[#FFFFFF] font-jua text-4xl justify-center mt-20 mb-[5vh]">로그인</div>
                  <div className="flex flex-col justify-center">
                    <div className="flex justify-center">
                      <img
                        className="flex mx-auto min-h-full w-8 opacity-50 -mr-16 ml-10"
                        src={letterImg}
                        alt="letter_image"
                      />
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="이메일을 입력해주세요"
                        required
                        className="block w-[80%] h-[3.2rem] text-s rounded-full px-20 py-[18px] border-2 border-shadowGray focus:outline-signupButtonBlue"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="flex mt-8 mb-[5vh] justify-center">
                      <img
                        className="flex mx-auto min-h-full w-8 opacity-50 -mr-16 ml-10"
                        src={lockImg}
                        alt="lock_image"
                      />
                      <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="비밀번호를 입력해주세요"
                        required
                        className="block w-[80%] h-[3.2rem] text-s rounded-full px-20 py-[18px] border-2 border-shadowGray focus:outline-signupButtonBlue"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-row gap-4 ml-2 justify-center mb-16">
                      <Link to="/signup">
                        <motion.button
                          className="w-[9rem] h-[3.2rem] text-[1.4rem] font-jua rounded-2xl bg-loginBlue py-3.5 text-3xl leading-7 text-white mr-2"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          회원가입
                        </motion.button>
                      </Link>
                      <motion.button
                        className="w-[9rem] h-[3.2rem] text-[1.4rem] font-jua rounded-2xl bg-white py-3.5 text-3xl leading-7 text-loginBlue ml-2"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleLogin}
                      >
                        로그인
                      </motion.button>
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
}

export default LogInModal;
