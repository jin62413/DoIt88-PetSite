function PopularPosts() {
  return (
    <div className="flex flex-col m-auto items-center py-10">
      <h2 className="text-[28px] font-bold">커뮤니티 인기글</h2>
      <div className="flex flex-col gap-4 mt-8 w-[640px]">
        <div className="flex justify-between h-20 border-b border-black px-3">
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
        <div className="flex justify-between h-20 border-b border-black px-3">
          <a href="/">
            <ul className="max-w-lg">
              <li className="font-bold text-lg">제목입니당</li>
              <li className="pt-2 block truncate">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Recusandae nobis vitae rerum in. Nihil suscipit recusandae eum
                quisquam dolores nisi temporibus totam expedita. Ut voluptates
                excepturi harum, fuga doloremque facilis!
              </li>
            </ul>
          </a>
          <a href="/" className="more w-16 h-fit py-4 text-[#747474]">
            <span>더보기</span>
          </a>
        </div>
        <div className="flex justify-between h-20 border-b border-black px-3">
          <a href="/">
            <ul className="max-w-lg">
              <li className="font-bold text-lg">제목입니당</li>
              <li className="pt-2 block truncate">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Recusandae nobis vitae rerum in. Nihil suscipit recusandae eum
                quisquam dolores nisi temporibus totam expedita. Ut voluptates
                excepturi harum, fuga doloremque facilis!
              </li>
            </ul>
          </a>
          <a href="/" className="more w-16 h-fit py-4 text-gray-500">
            <span>더보기</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default PopularPosts;
