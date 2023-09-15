import { create } from 'zustand';

const loginStore = (set) => ({
  loginEmail: '',
  loginPassword: '',

  isLoginEmail: false,
  isLoginPassword: false,

  // isNicknameValid: false,
  // isEmailDateValid: false,
  // isNicknameDateValid: false,

  setLoginEmail: (loginEmail) => set({ loginEmail }),
  setLoginPassword: (loginPassword) => set({ loginPassword }),
  setIsLoginEmailValid: (isLoginEmail) => set({ isLoginEmail }),
  setIsLoginPasswordValid: (isLoginPassword) => set({ isLoginPassword }),

  // setIsPasswordConfirmValid: (isPasswordConfirm) => set({ isPasswordConfirm }),
  // setIsNicknameValid: (isNicknameValid) => set({ isNicknameValid }),
  // setIsEmailDataValid: (isEmailDateValid) => set({ isEmailDateValid }),
  // setIsNicknameDateValid: (isNicknameDateValid) => set({ isNicknameDateValid }),
});

const uselogin = create(loginStore);

export default uselogin;
