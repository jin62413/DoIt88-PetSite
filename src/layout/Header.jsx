import SearchForm from '@/components/SearchForm';
import HeaderNav from './HeaderNav';
import Logo from '@/components/Logo';

function Header() {
  return (
    <div className="flex py-10 font-suit items-center justify-around w-full">
      <Logo/>
      <HeaderNav />

      <SearchForm/>

      <button
        type="button"
        className="rounded-xl bg-[#5956E9] text-white font-medium text-base px-11 py-3"
      >
        로그인
      </button>
    </div>
  );
}

export default Header;
