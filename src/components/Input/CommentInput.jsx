function CommentInput() {
  return (
    <div className="bg-[#f1f1f1] borderRadius w-[988px] h-[100px] flex items-center align-middle">
      <textarea
        type="text"
        className="bg-[#f1f1f1] w-[860px] h-[100px] borderRadius p-5 mr-5 focus:outline-none resize-none"
        placeholder="댓글을 입력해주세요"
      />
      <button className="bg-primary text-white px-4 py-9 borderRadius right-0 h-5 items-center flex">
        댓글 달기
      </button>
    </div>
  );
}
export default CommentInput;
