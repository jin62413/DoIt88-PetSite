import SearchForm from '@/components/SearchForm';
import HeaderNav from './HeaderNav';
import Logo from '@/components/Logo';

function Header() {
  return (
    <div className="flex mx-auto py-10 items-center justify-around w-full font-pre">
      <Logo/>
      <HeaderNav />

      <SearchForm/>

      <button
        type="button"
        className="rounded-xl bg-primary text-white font-medium text-base px-11 py-3"
      >
        로그인
      </button>
    </div>
  );
}

export default Header;
