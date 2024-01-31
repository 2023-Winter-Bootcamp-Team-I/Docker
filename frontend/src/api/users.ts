import api from './api';
import Swal from 'sweetalert2';

interface SignUpData {
  password: string;
  email: string;
  name: string;
}

export const signUpUser = async (userData: SignUpData): Promise<void> => {
  try {
    const response = await api.post('/users/signup/', userData);

    // 서버 응답이 성공이 아니면 에러를 던집니다.
    if (response.status < 200 || response.status >= 300) {
      throw new Error('가입에 실패했습니다. 다시 시도해주세요.');
    }

    console.log('User created:', response.data);

    Swal.fire({
      title: '회원가입 성공!',
      icon: 'success',
      timer: 1500,
    });

    setTimeout(() => {
      window.location.href = '/'; // 다른 방식으로 페이지 이동 가능
    }, 1500);
  } catch (error) {
    console.error('Error creating user:', error);
    Swal.fire({
      title: '회원가입에 실패했습니다!',
      text: '정보를 정확히 입력해주세요',
      icon: 'error',
      confirmButtonText: '확인',
      confirmButtonColor: '#3CA5FF',
      customClass: {
        popup: 'w-[25%] rounded-xl',
      },
    });
  }
};
