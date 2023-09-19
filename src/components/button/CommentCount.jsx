import pb from '@/api/pocketbase';
import { useState } from 'react';
import { useEffect } from 'react';

function CommentCount(props) {
  const [data, setData] = useState([]);
  const [comment, setComment] = useState();
  useEffect(() => {
    async function getComment() {
      try {
        await pb
          .collection('contentComment')
          .getList(1, 30, {
            expand: 'post',
            filter: `(post='${props.id}')`,
          })
          .then((res) => setData(res));
        setComment(comment);
      } catch (error) {
        if (!(error in DOMException)) {
          console.error();
        }
      }
    }
    getComment();
  }, []);
  console.log(comment);
  console.log(data.length);
  return (
    <>
      {data && (
        <div className="flex items-center">
          <button
            type="button"
            aria-label="댓글"
            className="bg-comment w-8 h-8"
          ></button>
          <span>{data.length}</span>
        </div>
      )}
    </>
  );
}

export default CommentCount;
