function CommentInput() {
  //   const data = {
  //     "user": "RELATION_RECORD_ID",
  //     "comment": "test",
  //     "post": "RELATION_RECORD_ID"
  // };

  // const record = await pb.collection('contentComment').create(data);
  return (
    <textarea
      type="text"
      className="bg-[#f1f1f1] w-[860px] h-[100px] rounded-10 p-5 mr-5 focus:outline-none resize-none"
      placeholder="댓글을 입력해주세요"
    />
  );
}
export default CommentInput;
