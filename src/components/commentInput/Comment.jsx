import CommentInput from './CommentInput';

function Comment(props) {
  console.log(props);
  return (
    <div className="bg-[#f1f1f1] rounded-10 w-[988px] h-[100px] flex items-center align-middle">
      <CommentInput />
      {/* <CommentSubmitButton props={props} /> */}
    </div>
  );
}
export default Comment;
