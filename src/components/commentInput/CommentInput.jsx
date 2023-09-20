import { useState } from 'react';
import CommentSubmitButton from './CommentSubmitButton';
import pb from '@/api/pocketbase';
import { useRef } from 'react';

// 미완성
function CommentInput(dataId) {
  const authDataString = localStorage.getItem('pocketbase_auth');
  const authData = JSON.parse(authDataString);

  const commentRef = useRef(null);
  const [commentInput, setCommentInput] = useState('');
  const [commentList, setCommentList] = useState([]);

  // const handleComment = async (e) => {
  //   setCommentInput(e.target.value);
  // };

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    console.log('click');
    const commentValue = commentRef.current.value;

    const newComment = {
      comment: commentValue,
      user: `${authData.model.id}`,
      record: `${dataId}`,
    };

    const newCommentData = await pb
      .collection('communityComment')
      .getList(1, 30, {
        filter: `record = "${dataId}"`,
        sort: '-created',
        expand: 'user, record',
      });

    try {
      await pb.collection('communityComment').create(newComment);
      setCommentInput('');
      setCommentList(newCommentData.items);
      console.log('ok');
    } catch (err) {
      console.log(err);
    }
  };

  console.log(commentRef);

  return (
    <>
      <textarea
        type="text"
        className="bg-[#f1f1f1] w-[860px] h-[100px] rounded-10 p-5 mr-5 focus:outline-none resize-none"
        placeholder="댓글을 입력해주세요"
        name="comment"
        ref={commentRef}
      />
      <button
        onClick={handleSubmitComment}
        className="bg-primary text-white px-4 py-9 rounded-10 right-0 h-5 items-center flex"
      >
        댓글 달기
      </button>
      {/* <CommentSubmitButton onClick={handleSubmitComment} /> */}
    </>
  );
}
export default CommentInput;
