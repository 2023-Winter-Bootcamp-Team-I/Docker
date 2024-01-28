import React, { useState } from 'react';
import pencilImg from '@/assets/images/pencil.svg';
import { Link } from 'react-router-dom';
import { signUpUser } from '@/api/users';
import { motion } from 'framer-motion';

interface SignUpData {
  password: string;
  email: string;
  name: string;
}

function SignUp() {
  const [userData, setUserData] = useState<SignUpData>({
    password: '',
    email: '',
    name: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSignUp = async () => {
    await signUpUser(userData);
  };
  console.log(import.meta.env.VITE_BASE_URL_DEV);
  return (
    <>
      <div className="flex w-screen h-screen bg-mainColor">
        <div className="flex flex-1 flex-col justify-center">
          <div className="flex flex-row sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="flex">
              <img className="flex mx-auto min-h-full w-auto" src={pencilImg} alt="pencil_character" />
              <div className="">
                <h2 className="flex mt-5 font-jua text-center text-4xl font-bold text-signupButtonBlue">
                  회원가입을 위해
                </h2>
                <h2 className="flex mt-2 font-jua text-center text-4xl font-bold text-signupButtonBlue">
                  정보를 입력해주세요
                </h2>
              </div>
            </div>
          </div>

          <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="space-y-2">
              <div>
                <div className="mt-8">
                  <input
                    id="username"
                    name="name"
                    type="username"
                    placeholder="이름:"
                    required
                    className="block w-full text-xl rounded-full px-7 py-4 border-2 border-shadowGray focus:outline-signupButtonBlue "
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div>
                <div className="mt-8">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="이메일:"
                    required
                    className="block w-full text-xl rounded-full border-2 border-shadowGray focus:outline-signupButtonBlue px-7 py-4 "
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div>
                <div className="mt-8">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="비밀번호:"
                    required
                    className="block w-full text-xl rounded-full border-0 px-7 py-4 border-shadowGray focus:outline-signupButtonBlue"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div>
                <div className="mt-8 mb-10">
                  <input
                    id="password-confirmation"
                    name="passwordConfirmation"
                    type="password"
                    placeholder="비밀번호 확인:"
                    required
                    className="block w-full text-xl rounded-full px-7 py-4 border-shadowGray focus:outline-signupButtonBlue"
                    // onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="flex flex-row">
                <Link to="/" className="flex basis-1/2 justify-center">
                  <motion.button
                    className="flex justify-center items-center font-jua rounded-full bg-white px-14 py-2.5 text-lg font-bold leading-6 text-signupButtonBlue border-b-2 border-r-2 border-shadowGray mr-2"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                      // 가입 취소 버튼 클릭 시 동작 추가
                    }}
                  >
                    가입 취소
                  </motion.button>
                </Link>
                <div className="flex basis-1/2 justify-center">
                  <motion.button
                    className="flex justify-center font-jua rounded-full bg-signupButtonBlue px-14 py-2.5 text-lg font-bold leading-6 text-white border-b-2 border-r-2 border-shadowGray ml-2"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleSignUp}
                  >
                    가입 완료
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
