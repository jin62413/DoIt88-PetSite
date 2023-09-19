import { create } from 'zustand';

const loginStore = (set) => ({
  loginEmail: '',
  loginPassword: '',
  loginNickname: '',

  isLoginEmail: false,
  isLoginPassword: false,

  isGoogle: false,
  isKakao: false,

  // isNicknameValid: false,
  // isEmailDateValid: false,
  // isNicknameDateValid: false,

  setLoginEmail: (loginEmail) => set({ loginEmail }),
  setLoginPassword: (loginPassword) => set({ loginPassword }),
  setLoginNickname: (loginNickname) => set({ loginNickname }),
  setIsLoginEmailValid: (isLoginEmail) => set({ isLoginEmail }),
  setIsLoginPasswordValid: (isLoginPassword) => set({ isLoginPassword }),
  setIsKakao: (isKakao) => set({ isKakao }),
  // setIsPasswordConfirmValid: (isPasswordConfirm) => set({ isPasswordConfirm }),
  // setIsNicknameValid: (isNicknameValid) => set({ isNicknameValid }),
  // setIsEmailDataValid: (isEmailDateValid) => set({ isEmailDateValid }),
  // setIsNicknameDateValid: (isNicknameDateValid) => set({ isNicknameDateValid }),
});

const uselogin = create(loginStore);

export default uselogin;
