// atoms/auth.js
import { atom } from 'jotai';

export const accessTokenAtom = atom(null); // 로그인 성공 시 저장되는 토큰