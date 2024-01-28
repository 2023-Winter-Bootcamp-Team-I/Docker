import api from './api';
import Swal from 'sweetalert2';

interface ShareData {
  email: string;
  book_id: number;
}

export const sendEmail = async (shareData: ShareData): Promise<void> => {
  try {
    const params = {
      to: shareData.email,
      book_id: shareData.book_id,
    };
    Swal.fire({
      title: '이메일 전송 성공!',
      icon: 'success',
      timer: 1500,
    });
    console.log(params);
    // 클라이언트에서 직접 이메일 발송을 시도
    await api.get('/books/share', { params }).then((res) => {
      console.log(res);
    });
  } catch (error) {
    console.error('이메일 발송 요청이 실패했습니다.', error);
    throw error;
  }
};
