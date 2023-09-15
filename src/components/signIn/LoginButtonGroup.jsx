import kakao from '@/assets/icon/kakao.svg';
import google from '@/assets/icon/google.svg';
import useAuthStore from '@/store/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import uselogin from '@/store/login';
import pb from '@/api/pocketbase';

function LoginButtonGroup() {
  const navigate = useNavigate();
  const signInHome = useAuthStore((state) => state.signIn);
  const signInGoogle = useAuthStore((state) => state.signInGoogle);
  const signInKakao = useAuthStore((state) => state.kakaoLogin);

  const {
    loginEmail,
    loginPassword,
    isLoginEmail,
    isLoginPassword,
    setLoginEmail,
    setLoginPassword,
    setIsLoginEmailValid,
    setIsLoginPasswordValid,
  } = uselogin();

  const isAuth = useAuthStore((state) => state.isAuth);
  const user = useAuthStore((state) => state.user);

  const handleLogin = async (e) => {
    e.preventDefault();

    // PocketBase SDK 인증 요청
    try {
      console.log(loginEmail);
      console.log(loginPassword);
      if (
        isLoginEmail !== true &&
        isLoginPassword !== true &&
        isAuth === false
      ) {
        toast.error('아이디 또는 비밀번호가 잘못되었습니다.');
        return;
      }
      const authData = signInHome(loginEmail, loginPassword);

      // const authData = await pb
      //   .collection('users')
      //   .authWithPassword('yamoo9', '123456789!');
      console.log(authData);
      console.log(user);
      console.log(isAuth);

      // await pb.collection('users').create(formData);
      // authSignUp(formData);

      if (isAuth) {
        toast.success(`${user.nickname}님 환영합니다.`, {
          icon: '🎉',
          duration: 2000,
        });
        navigate('/');
      }
    } catch (error) {
      toast.error('로그인 실패하였습니다.');
      throw new Error(error.message);
    }
  };

  const handleLoginGoogle = async (e) => {
    e.preventDefault();

    // PocketBase SDK 인증 요청
    try {
      signInGoogle();

      // await pb.collection('users').create(formData);
      // authSignUp(formData);

      if (isAuth) {
        toast.success(`환영합니다.`, {
          icon: '🎉',
          duration: 2000,
        });
        navigate('/');
      }
    } catch (error) {
      toast.error('로그인 실패하였습니다.');

      throw new Error(error.message);
    }
  };

  const kakaoLogin = async () => {
    try {
      const user = await pb.collection('users').authWithOAuth2({
        provider: 'kakao',
      });

      // ※ 권한(Authorization) 부여를 위한 역할(role)이 설정된 경우
      // const role = await pb.collection('roles').getFirstListItem('name="일반"');

      // Kakao 공급자로부터 전달받은 메타데이터에서 필요한 데이터 추출
      // const { username: name, email } = user.meta;

      // // 업데이트 할 사용자 정보 취합
      // const updateUser = {
      //   name,
      //   username: email.split('@')[0],
      //   // ※ 권한(Authorization) 부여를 위한 역할(role)이 설정된 경우
      //   // role: role.id,
      // };

      console.log(user);
      console.log(user.meta);
      // 사용자 정보 업데이트 요청
      // return await pb.collection('users').update(user.record.id, updateUser);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return (
    <div className="buttonGroup flex-col justify-center">
      <button
        type="button"
        className="w-[340px] h-[50px] bg-primary text-white text-center font-medium rounded-xl text-lg  my-2"
        onClick={handleLogin}
      >
        로그인
      </button>
      <button
        type="button"
        className="w-[340px] h-[50px] bg-[#FFDC60] text-black text-center font-medium rounded-xl text-lg  my-2 relative"
        onClick={kakaoLogin}
      >
        <img
          src={kakao}
          alt="카카오톡 로고"
          className="absolute top-3 left-5"
        />
        카카오로 로그인
      </button>
      <button
        type="submit"
        className="w-[340px] h-[50px] bg-white text-black text-center font-medium rounded-xl text-lg  my-2 border border-[#C4C4C4] relative"
        onClick={handleLoginGoogle}
      >
        <img src={google} alt="구글 로고" className="absolute top-3 left-5" />
        구글로 로그인
      </button>
    </div>
  );
}

export default LoginButtonGroup;
