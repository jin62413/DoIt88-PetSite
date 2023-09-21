// import CommentInput from './CommentInput';
import pb from '@/api/pocketbase';
import { useRef } from 'react';
import { useState } from 'react';

function Comment({ dataId, setCommentList }) {
  const authDataString = localStorage.getItem('pocketbase_auth');
  const authData = JSON.parse(authDataString);

  const formRef = useRef(null);
  const commentRef = useRef(null);

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    const commentValue = commentRef.current.value;

    const newComment = {
      comment: commentValue,
      user: authData.model.id,
      record: dataId,
    };

    try {
      const newCommentData = await pb
        .collection('communityComment')
        .create(newComment);
      if (newCommentData) {
        await pb.collection('community').update(dataId, {
          'comment+': newCommentData.id,
        });
      }

      const newCommentList = await pb
        .collection('communityComment')
        .getOne(newCommentData.id, {
          expand: 'user',
        });
      setCommentList((comment) => [...comment, newCommentList]);

      commentRef.current.value = '';
      console.log('ok');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form
        encType="multipart/form-data"
        ref={formRef}
        onSubmit={handleSubmitComment}
        className="bg-[#f1f1f1] rounded-10 w-[988px] h-[100px] flex items-center align-middle"
      >
        {/* <CommentInput /> */}
        {/* <CommentSubmitButton props={props} /> */}
        <textarea
          type="text"
          className="bg-[#f1f1f1] w-[860px] h-[100px] rounded-10 p-5 mr-5 focus:outline-none resize-none"
          placeholder="댓글을 입력해주세요"
          name="comment"
          ref={commentRef}
        />
        <button
          type="submit"
          className="bg-primary text-white px-4 py-9 rounded-10 right-0 h-5 items-center flex"
        >
          댓글 달기
        </button>
        {/* <CommentSubmitButton onClick={handleSubmitComment} /> */}
      </form>
    </>
  );
}
export default Comment;
