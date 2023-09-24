import { create } from 'zustand';

const loginStore = (set) => ({
  loginEmail: '',
  loginPassword: '',
  loginNickname: '',
  profileURL: '',

  isLoginEmailValid: false,
  isLoginPasswordValid: false,

  isGoogle: false,
  isKakao: false,

  isLoading: true,

  // isNicknameValid: false,
  // isEmailDateValid: false,
  // isNicknameDateValid: false,

  setIsLoading: (isLoading) => set({ isLoading }),

  setLoginEmail: (loginEmail) => set({ loginEmail }),
  setLoginPassword: (loginPassword) => set({ loginPassword }),
  setLoginNickname: (loginNickname) => set({ loginNickname }),
  setIsLoginEmailValid: (isLoginEmailValid) => set({ isLoginEmailValid }),
  setIsLoginPasswordValid: (isLoginPasswordValid) =>
    set({ isLoginPasswordValid }),
  setIsKakao: (isKakao) => set({ isKakao }),
  setIsGoogle: (isGoogle) => set({ isGoogle }),
  setProfileURL: (profileURL) => set({ profileURL }),
  // setIsPasswordConfirmValid: (isPasswordConfirm) => set({ isPasswordConfirm }),
  // setIsNicknameValid: (isNicknameValid) => set({ isNicknameValid }),
  // setIsEmailDataValid: (isEmailDateValid) => set({ isEmailDateValid }),
  // setIsNicknameDateValid: (isNicknameDateValid) => set({ isNicknameDateValid }),
});

const uselogin = create(loginStore);

export default uselogin;
