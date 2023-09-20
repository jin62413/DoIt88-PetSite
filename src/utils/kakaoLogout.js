const KAKAO_CLIENT_ID = import.meta.env.VITE_KAKAO_CLIENT_ID;
const KAKAO_LOGOUT_REDIRECT_URI = import.meta.env
  .VITE_KAKAO_LOGOUT_REDIRECT_URI;

export const kakaoLogout = async () => {
  try {
    location.replace(
      `https://kauth.kakao.com/oauth/logout?client_id=e174c63f7876146408e5776827ed6a13&logout_redirect_uri=https://geppetto.pockethost.io/api/oauth2-redirect`
    );
  } catch (error) {
    throw new Error(error.message);
  }
};
