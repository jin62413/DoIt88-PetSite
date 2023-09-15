import SearchForm from '@/components/signUp/SearchForm';
import HeaderNav from './HeaderNav';
import Logo from '@/components/header/Logo';
import useAuthStore from '@/store/auth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function Header() {
  const navigate = useNavigate();
  const isAuth = useAuthStore((state) => state.isAuth);
  const user = useAuthStore((state) => state.user);
  const signOut = useAuthStore((state) => state.signOut);

  const handleSignOut = async (e) => {
    e.preventDefault();

    // PocketBase SDK 인증 요청
    try {
      signOut();
      toast.success(`이용해주셔서 감사합니다`, {
        icon: '🎉',
        duration: 2000,
      });

      navigate('/');

      // const authData = await pb
      //   .collection('users')
      //   .authWithPassword('yamoo9', '123456789!');

      // await pb.collection('users').create(formData);
      // authSignUp(formData);
    } catch (error) {
      toast.error('로그아웃 실패');

      console.log('오류', error.response);
    }
  };

  return (
    <div className="flex flex-row mx-auto py-10 items-center justify-around font-pre">
      <Logo />
      <HeaderNav />

      <SearchForm />

      {isAuth ? (
        <div>
          <span>{`${user.nickname}님 환영합니다.`}</span>
          <button
            type="button"
            className="rounded-xl bg-primary text-white font-medium text-base px-11 py-3"
            onClick={handleSignOut}
          >
            로그아웃
          </button>
        </div>
      ) : (
        <button
          type="button"
          className="rounded-xl bg-primary text-white font-medium text-base px-11 py-3"
          // onClick={navigate('/signIn')}
        >
          로그인
        </button>
      )}
    </div>
  );
}

export default Header;
