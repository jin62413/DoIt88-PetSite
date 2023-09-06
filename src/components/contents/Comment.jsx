import anonymous from '@/assets/images/Ellipse.svg';

function Comment() {
  return (
    <>
      <div className="flex gap-6 w-[988px]">
        <img src={anonymous} alt="" />
        <div>
          <div className="flex gap-6">
            <p className="font-semibold text-lg">닉넴</p>
            <span className="text-sm">2023년 09월 06일</span>
          </div>
          <p>댓글 와랄란</p>
        </div>
      </div>
      <div className="bg-[#f1f1f1] borderRadius w-[988px] h-[100px] flex items-center align-middle">
        <textarea
          type="text"
          className="bg-[#f1f1f1] w-[860px] h-[100px] borderRadius p-5 mr-5 focus:outline-none resize-none"
        />
        <button className="bg-primary text-white px-4 py-9 borderRadius right-0 h-5 items-center flex">
          댓글 달기
        </button>
      </div>
    </>
  );
}
export default Comment;
