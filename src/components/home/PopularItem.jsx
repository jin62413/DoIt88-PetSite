function PopularItem() {
  return (
    <div className="flex flex-col gap-4 mt-8 w-[640px]">
      <div className="flex justify-between h-20 border-b border-black">
        <a href="/">
          <ul className="max-w-lg">
            <li className="font-bold text-lg">제목입니당</li>
            <li className="pt-2 text-ellipsis">내용입니당</li>
          </ul>
        </a>
        <a href="/" className="more w-16 h-fit py-4 text-[#747474]">
          <span>더보기</span>
        </a>
      </div>
    </div>
  );
}

export default PopularItem;
