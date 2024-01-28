// 전역 상태관리

import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'sessionStorage',
  storage: sessionStorage,
});

// 유저의 아이디
export const userIDState = atom({
  key: 'user_id',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

// user 의 언어 선택 값
export const userLanguage = atom({
  key: 'user_language',
  default: 'ko',
  effects_UNSTABLE: [persistAtom],
});

export const bookID = atom({
  key: 'bookId',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const showModal = atom({
  key: 'showModal',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const originTitle = atom({
  key: 'originTitle',
  default: '',
  effects_UNSTABLE: [persistAtom],
});
