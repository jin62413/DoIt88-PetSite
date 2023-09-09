// import Logo from '@/components/Logo';
import { NavLink } from 'react-router-dom';

function HeaderNav() {
  return (
    <nav className="flex justify-between gap-10">
      <ul className="flex gap-10 font-semibold justify-start items-center mx-24 text-black">
        {/* <li>
          <NavLink to="/">
            <Logo />
          </NavLink>
        </li> */}
        <li>
          <NavLink to="/contents">콘텐츠</NavLink>
        </li>
        <li>
          <NavLink to="/community">커뮤니티</NavLink>
        </li>
        <li>
          <NavLink to="/place">나들이</NavLink>
        </li>
        <li>
          <NavLink to="/event">이벤트</NavLink>
        </li>
        <li>
          <NavLink to="/signUP">회원가입</NavLink>
        </li>
        <li>
          <NavLink to="/signIn">로그인</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNav;
