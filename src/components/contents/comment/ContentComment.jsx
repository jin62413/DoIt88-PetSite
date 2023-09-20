import pb from '@/api/pocketbase';
import { useState } from 'react';
import { getPbImageURL } from '@/utils';
import ContentCommentForm from './ContentCommentForm';
import CommentEdit from './CommentEdit';
import CommentItem from './CommentItem';
import toast from 'react-hot-toast';
import useAuthStore from '@/store/auth';

function ContentComment({ comments, id, setComment }) {
  // const userId = pb.authStore.model.id;
  const isAuth = useAuthStore((state) => state.isAuth);

  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editComment, setEditComment] = useState(comments);

  const handleUpdate = async (commentId) => {
    try {
      const updatedComment = { comment: editComment };
      await pb.collection('contentComment').update(commentId, updatedComment);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDelete = async (commentId) => {
    toast((t) => (
      <div className="flex w-48 justify-between">
        <span>삭제하시겠습니까?</span>
        <button
          onClick={async () => {
            try {
              if (editingCommentId === commentId)
                await pb.collection('contentComment').delete(commentId);
              toast.remove(t.id);
            } catch (err) {
              console.error(err);
            }
          }}
          className="text-primary"
        >
          삭제
        </button>
      </div>
    ));
    try {
      if (editingCommentId === commentId)
        await pb.collection('contentComment').delete(commentId);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      {comments?.map((item) => {
        return (
          <div className="flex gap-6 w-[988px] h-20 align-middle" key={item.id}>
            <figure className="w-14">
              <img
                src={getPbImageURL(item?.expand?.user, 'profile')}
                alt="유저 프로필 사진"
                className="w-auto h-14 m-auto rounded-full"
              />
            </figure>
            <div>
              <div className="flex gap-6 items-baseline">
                <p className="font-semibold text-lg">
                  {item?.expand?.user?.nickname}
                </p>
                <span className="text-sm h-fit">{`${item.created.slice(
                  0,
                  4
                )}년 ${item.created.slice(5, 7)}월 ${item.created.slice(
                  8,
                  10
                )}일`}</span>
              </div>

              {editingCommentId === item.id ? (
                <CommentEdit
                  comment={item.comment}
                  commentId={item.id}
                  setEditingCommentId={setEditingCommentId}
                  onUpdate={(updatedContent) => {
                    setEditComment(updatedContent);
                    handleUpdate(item.id);
                  }}
                />
              ) : (
                <CommentItem comment={item.comment} />
              )}
            </div>
            {isAuth && pb.authStore.model.id == item.expand.user.id && (
              <div className="align-middle items-center right-0">
                <div className="flex gap-2 pt-7">
                  {editingCommentId === item.id ? null : (
                    <>
                      <button
                        type="button"
                        onClick={() => setEditingCommentId(item.id)}
                      >
                        수정
                      </button>
                      <button
                        type="button"
                        className="text-error"
                        onClick={() => handleDelete(item.id)}
                      >
                        삭제
                      </button>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        );
      })}
      <ContentCommentForm comments={comments} id={id} setComment={setComment} />
    </>
  );
}
export default ContentComment;
