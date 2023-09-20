import CommentInput from './CommentInput';

function Comment(dataId) {
  return (
    <div className="bg-[#f1f1f1] rounded-10 w-[988px] h-[100px] flex items-center align-middle my-5">
      <CommentInput dataId={dataId} />
    </div>
  );
}
export default Comment;
