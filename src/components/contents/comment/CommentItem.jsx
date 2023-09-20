import pb from '@/api/pocketbase';
import CommentEdit from './CommentEdit';

function CommentItem(item) {
  const userId = pb.authStore.model.id;
  return (
    <div className="flex">
      <p className="w-[820px]">{item.comment}</p>
      {userId === item.id && (
        <div className="align-middle items-center right-0">
          <div className="flex gap-2">
            <button type="button" onClick={() => <CommentEdit />}>
              수정
            </button>
            <button type="button" className="text-error">
              삭제
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default CommentItem;
