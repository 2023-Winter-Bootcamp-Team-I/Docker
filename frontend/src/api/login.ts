import api from './api';
import { AxiosResponse } from 'axios';
import Swal from 'sweetalert2';

interface LoginData {
  email: string;
  password: string;
}

export const loginUser = async (loginData: LoginData): Promise<AxiosResponse> => {
  try {
    const response = await api.post('/users/signin/', loginData);
    Swal.fire({
      title: '로그인 성공!',
      icon: 'success',
      timer: 1500,
      showConfirmButton: true,
    });

    return response;

    // 추가적인 성공 처리 (예: 리다이렉트)
  } catch (error) {
    console.error('Error fetching books:', error);
    Swal.fire({
      title: '로그인 실패',
      text: '이메일 또는 비밀번호를 확인해주세요.',
      icon: 'error',
      confirmButtonText: '확인',
      confirmButtonColor: '#3CA5FF',
      customClass: {
        popup: 'w-[25%] rounded-xl ',
      },
    });
    throw error;
  }
};
