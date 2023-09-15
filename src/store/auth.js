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

  signInGoogle: async () => {
    const authData = await pb
      .collection(USER_COLLECTION)
      .authWithOAuth2({ provider: 'google' });

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


    console.log(isValid);
    console.log(model);
    console.log(token);
    console.log(authData);
    return authData;
  },

  kakaoLogin: async () => {
    try {
      const user = await pb.collection('users').authWithOAuth2({
        provider: 'kakao',
      });

      // ※ 권한(Authorization) 부여를 위한 역할(role)이 설정된 경우
      const role = await pb.collection('roles').getFirstListItem('name="일반"');

      // Kakao 공급자로부터 전달받은 메타데이터에서 필요한 데이터 추출
      const { username: name, email } = user.meta;

      console.log(user);
      console.log(user.meta);

      // 업데이트 할 사용자 정보 취합
      const updateUser = {
        name,
        username: email.split('@')[0],
        // ※ 권한(Authorization) 부여를 위한 역할(role)이 설정된 경우
        role: role.id,
      };

      // 사용자 정보 업데이트 요청
      return await pb.collection('users').update(user.record.id, updateUser);
    } catch (error) {
      throw new Error(error.message);
    }
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
      '/signOut'
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
