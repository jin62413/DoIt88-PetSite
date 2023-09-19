import SearchForm from '@/components/signUp/SearchForm';
import HeaderNav from './HeaderNav';
import Logo from '@/components/header/Logo';
import useAuthStore from '@/store/auth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { kakaoLogout } from '@/utils/kakaoLogout';

function Header() {
  const navigate = useNavigate();
  const isAuth = useAuthStore((state) => state.isAuth);
  const token = useAuthStore((state) => state.token);
  const user = useAuthStore((state) => state.user);
  const signOut = useAuthStore((state) => state.signOut);

  const authDataString = localStorage.getItem('pocketbase_auth');
  const authData = JSON.parse(authDataString);
  console.log(authData.model.id)

  const handleGoToLogin = (e) => {
    e.preventDefault();
    navigate('/signIn');
  };

  const handleSignOut = async (e) => {
    e.preventDefault();

    // PocketBase SDK 인증 요청
    try {
      signOut();
      // kakaoLogout();
      toast.success(`이용해주셔서 감사합니다`, {
        icon: '🎉',
        duration: 2000,
      });

      navigate('/');
    } catch (error) {
      toast.error('로그아웃 실패');

      console.log('오류', error.response);
    }
  };

  return (
    <div className="flex flex-row flex-shrink-0 flex-nowrap mx-auto py-10 items-center justify-around font-pre">
      <Logo className="flex-shrink-0" />
      <HeaderNav className="flex-shrink-0" />

      <SearchForm className="flex-shrink-0" />

      {authData ? (
        <div>
          <span>{`${authData.model.nickname}님`}</span>
          <button
            type="button"
            className="rounded-xl bg-primary text-white font-medium text-base px-11 py-3 flex-nowrap flex-shrink-0"
            onClick={handleSignOut}
          >
            로그아웃
          </button>
        </div>
      ) : (
        <button
          type="button"
          className="rounded-xl bg-primary text-white font-medium text-base px-11 py-3 flex-shrink-0"
          onClick={handleGoToLogin}
        >
          로그인
        </button>
      )}
    </div>
  );
}

export default Header;
