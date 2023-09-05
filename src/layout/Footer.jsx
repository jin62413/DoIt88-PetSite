import instagram from '../assets/icon/instagram.svg';
import facebook from '../assets/icon/facebook.svg';
import github from '../assets/icon/github.svg';
import kakao from '../assets/icon/kakao.svg';

function Footer() {
  // 현재(오늘) 년도를 화면에 출력하는 상태를 설정
  // const [currentYear] = useState(() => new Date().getFullYear());

  return (
    <footer className="bg-[#F4F4F4] text-black px-3 flex flex-col gap-4 font-suit text-center font-semibold py-12 w-full">
      <small>
        &copy;
        <a href="/" className="hover:underline decoration-solid">
          GEPPETTO
        </a>
        &nbsp; | &nbsp;ALL RIGHT RESERVED.
      </small>

      <ul className="flex justify-center gap-5">
        <li>
          <a href="/">
            <img src={instagram} alt="인스타그램" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src={facebook} alt="페이스북" />
          </a>
        </li>
        <li>
          <a href="https://github.com/FRONTENDSCHOOL6/finalize-react-6">
            <img src={github} alt="깃허브" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src={kakao} alt="카카오톡" />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
