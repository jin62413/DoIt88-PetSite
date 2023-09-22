import pb from '@/api/pocketbase';
import { useState } from 'react';
import { useEffect } from 'react';

function CommentCount({ id, commentLength, setCommentLength }) {
  const [data, setData] = useState([]);
  const [comment, setComment] = useState();

  useEffect(() => {
    const getComment = async () => {
      try {
        const data = await pb.collection('contentComment').getFullList({
          expand: 'post',
          filter: `(post='${id}')`,
        });

        setCommentLength(data.length);
        setComment(data);
      } catch (error) {
        if (!(error in DOMException)) {
          console.error();
        }
      }
    };
    getComment();
  }, [id, commentLength, setCommentLength]);

  return (
    <>
      {data && (
        <div className="flex items-center">
          <button
            type="button"
            aria-label="댓글"
            className="bg-comment w-8 h-8"
          ></button>
          <span>{commentLength}</span>
        </div>
      )}
    </>
  );
}

export default CommentCount;
