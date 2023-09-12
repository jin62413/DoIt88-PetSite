import pb from '@/api/pocketbase';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const USER_COLLECTION = 'users';

const initialAuthState = {
  isAuth: false,
  user: null,
  token: '',
};

const authStore = (set) => ({
  ...initialAuthState,

  /* Pb SDK를 사용한 회원가입 */
  signUp: async (registerUser) => {
    return await pb.collection(USER_COLLECTION).create(registerUser);
  },

  /* Pb SDK를 사용한 로그인 */
  signIn: async (userID, password) => {
    const authData = await pb
      .collection(USER_COLLECTION)
      .authWithPassword(userID, password);

    const { isValid, model, token } = pb.authStore;

    set(
      (state) => ({
        ...state,
        isAuth: isValid,
        user: model,
        token,
      }),
      false,
      '/singIn'
    );

    return authData;
  },

  /* Pb SDK를 사용한 로그아웃 */
  signOut: async () => {
    const response = await pb.authStore.clear();

    set(
      (state) => ({
        ...state,
        ...initialAuthState,
      }),
      false,
      '/singOut'
    );

    return response;
  },

  /* Pb SDK를 사용한 회원탈퇴 */
  // withDrawal: async (recordId) => {
  //   const response = await pb.collection(USER_COLLECTION).delete(recordId);

  //   set(
  //     (state) => ({
  //       ...state,
  //       ...initialAuthState,
  //     }),
  //     false,
  //     'auth/withDrawal'
  //   );

  //   return response;
  // },
});

const useAuthStore = create(devtools(authStore));

export default useAuthStore;