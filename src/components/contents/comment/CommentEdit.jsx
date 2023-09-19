import pb from '@/api/pocketbase';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import ContentComment from './ContentComment';

const resetData = {
  comment: '',
};

function CommentEdit({ item: { id, comment } }) {
  const { commentId } = useParams();
  const commentRef = useRef(null);

  useEffect(() => {
    async function getComment() {
      try {
        const comments = pb.collection('contentComment').getOne(commentId);
        const { comment } = comments;
        resetData.comment = commentRef.current.value = comment;
      } catch (error) {
        if (!(error in DOMException)) {
          console.error();
        }
      }
    }
    getComment();
  }, [commentId]);

  const hadleUpdate = async (e) => {
    e.preventDefault();

    const commentValue = commentRef.current.value;

    const formData = new FormData();

    formData.append('comment', commentValue);

    try {
      await pb.collection('contentComment').update(commentId, formData);
    } catch (err) {
      console.error(err);
    }
  };

  const userId = pb.authStore.model.id;
  return (
    <form action="" className="flex">
      <textarea
        type="text"
        className="w-[820px] focus:outline-none resize-none"
        defaultValue={comment}
      />
      <div className="flex gap-2">
        <button type="button" onClick={hadleUpdate}>
          저장
        </button>
        <button
          type="button"
          className="text-error"
          onClick={() => setEditMode(false)}
        >
          취소
        </button>
      </div>
    </form>
  );
}
export default CommentEdit;
