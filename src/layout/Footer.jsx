
function Footer() {
  // 현재(오늘) 년도를 화면에 출력하는 상태를 설정
  // const [currentYear] = useState(() => new Date().getFullYear());

  return (
    <footer className="bg-[#222223] text-[#868487] px-3 flex flex-col text-[8px] border-t border-t-white font-suit">
      <strong>
        위 내용에 대한 저작권 및 법적 책임은 자료제공사 또는
        글쓴이에 있으며, Kakao의 입장과 다를 수 있습니다.
      </strong>
      <small className="text-[#d4cfd3] my-3 text-center">
        Copyright &copy;
        <a
          href="https://www.kakaocorp.com"
          className="hover:underline decoration-solid font-semibold"
        >
          Kakao Corp.
        </a>
        &nbsp;All right reserved.
      </small>
    </footer>
  );
}

export default Footer;
