import { NavLink } from 'react-router-dom';

function HeaderNav() {
  return (
    <nav className="flex justify-between gap-10 py-4">
      <ul className="flex gap-10 font-semibold justify-start items-center mx-24 text-gray-500">
        <li>
          <NavLink to="/">로고</NavLink>
        </li>
        <li>
          <NavLink
            to="/contents"
            className={({ isActive }) =>
              isActive ? 'text-white hover:decoration-slice' : ''
            }
          >
            콘텐츠
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/community"
            className={({ isActive }) =>
              isActive ? 'text-white hover:decoration-slice' : ''
            }
          >
            커뮤니티
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/event"
            className={({ isActive }) =>
              isActive ? 'text-white hover:decoration-slice' : ''
            }
          >
            이벤트
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/place"
            className={({ isActive }) =>
              isActive ? 'text-white hover:decoration-slice' : ''
            }
          >
            장소
          </NavLink>
        </li>
      </ul>
      <label htmlFor="allSearch" className="sr-only">
        통합검색
      </label>
    </nav>
  );
}

export default HeaderNav;
