import CommentInput from './CommentInput';
import CommentSubmitButton from './CommentSubmitButton';

function Comment() {
  return (
    <div className="bg-[#f1f1f1] rounded-10 w-[988px] h-[100px] flex items-center align-middle">
      <CommentInput />
      <CommentSubmitButton />
    </div>
  );
}
export default Comment;
