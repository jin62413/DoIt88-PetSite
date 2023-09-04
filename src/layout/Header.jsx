function Header() {
  return (
    <div>
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
    </div>
  );
}

export default Header;
