import pb from '@/api/pocketbase';
import CommentEdit from './CommentEdit';
import useAuthStore from '@/store/auth';

function CommentItem(item) {
  // const userId = pb.authStore.model.id;
  const isAuth = useAuthStore((state) => state.isAuth);
  return (
    <div className="flex">
      <p className="w-[820px]">{item.comment}</p>
      {isAuth && pb.authStore.model.id === item.id && (
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
