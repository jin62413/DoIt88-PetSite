import { NavLink } from "react-router-dom";

function MainNav() {
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
              isActive ? "text-white hover:decoration-slice" : ""
            }
          >
            콘텐츠
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/community"
            className={({ isActive }) =>
              isActive ? "text-white hover:decoration-slice" : ""
            }
          >
            커뮤니티
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/event"
            className={({ isActive }) =>
              isActive ? "text-white hover:decoration-slice" : ""
            }
          >
            이벤트
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/place"
            className={({ isActive }) =>
              isActive ? "text-white hover:decoration-slice" : ""
            }
          >
            장소
          </NavLink>
        </li>
      </ul>
      <label htmlFor="allSearch" className="sr-only">
        통합검색
      </label>

      <input
        type="search"
        name=""
        id="allSearch"
        placeholder="통합 검색"
        className="border border-sky-500 rounded-3xl w-[250px] pl-7"
      ></input>

      <button
        type="button"
        className="w-[90px] h-[45px] rounded-full text-zinc-700 bg-[#A3D3FF] mr-32"
      >
        로그인
      </button>
    </nav>
  );
}

export default MainNav;
