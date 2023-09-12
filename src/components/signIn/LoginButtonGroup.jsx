import kakao from '@/assets/icon/kakao.svg';
import google from '@/assets/icon/google.svg'

function LoginButtonGroup() {
  return (
    <div className="buttonGroup flex-col justify-center">
      <button
        type="submit"
        className="w-[340px] h-[50px] bg-primary text-white text-center font-medium rounded-xl text-lg  my-2"
      >
        로그인
      </button>
      <button
        type="submit"
        className="w-[340px] h-[50px] bg-[#FFDC60] text-black text-center font-medium rounded-xl text-lg  my-2 relative"
      >
        <img src={kakao} alt="카카오톡 로고"  className='absolute top-3 left-5'/>
        카카오로 로그인
      </button>
      <button
        type="submit"
        className="w-[340px] h-[50px] bg-white text-black text-center font-medium rounded-xl text-lg  my-2 border border-[#C4C4C4] relative"
      >
        <img src={google} alt="구글 로고" className='absolute top-3 left-5'/>
        구글로 로그인
      </button>
    </div>
  );
}

export default LoginButtonGroup;
