const KAKAO_CLIENT_ID = import.meta.env.VITE_KAKAO_CLIENT_ID;
const KAKAO_LOGOUT_REDIRECT_URI = import.meta.env
  .VITE_KAKAO_LOGOUT_REDIRECT_URI;

export const kakaoLogout = async () => {
  try {
    location.replace(
      `https://kauth.kakao.com/oauth/logout?client_id=${KAKAO_CLIENT_ID}&logout_redirect_uri=${KAKAO_LOGOUT_REDIRECT_URI}`
    );
  } catch (error) {
    throw new Error(error.message);
  }
};
