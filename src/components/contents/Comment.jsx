import anonymous from '@/assets/images/Ellipse.svg';
import CommentInput from '../Input/CommentInput';

function Comment() {
  return (
    <>
      <div className="flex gap-6 w-[988px]">
        <img src={anonymous} alt="" />
        <div>
          <div className="flex gap-6 items-baseline">
            <p className="font-semibold text-lg">닉넴</p>
            <span className="text-sm h-fit">2023년 09월 06일</span>
          </div>
          <p>댓글 와랄란</p>
        </div>
      </div>
      <CommentInput />
    </>
  );
}
export default Comment;
