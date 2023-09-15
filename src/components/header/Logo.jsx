import logo from '@/assets/icon/logo.svg';
import { useNavigate,NavLink} from 'react-router-dom';

function Logo() {
 

  return (
    <div className="mx-20">
      <h1 className="sr-only">geppetto</h1>
      <NavLink to="/">
        <img src={logo} alt="로고 이미지" />
      </NavLink>
    </div>
  );
}

export default Logo;
