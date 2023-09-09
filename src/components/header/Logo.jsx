import logo from '@/assets/icon/logo.svg';

function Logo() {
  return (
    <div className="mx-20">
      <h1 className="sr-only">geppetto</h1>
      <a href="/">
        <img src={logo} alt="로고 이미지" />
      </a>
    </div>
  );
}

export default Logo;
