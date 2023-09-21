import { useRef } from 'react';
import pb from '@/api/pocketbase';
import { useState } from 'react';
import toast from 'react-hot-toast';

function ContentCommentForm({ id, setComment }) {
  const formRef = useRef(null);
  const commentRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const commentValue = commentRef.current.value;

    if (!commentValue) {
      toast('댓글을 입력해주세요!', {
        icon: '🐾',
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      });
      return;
    }

    if (!pb.authStore.model) {
      toast('로그인을 해주세요!', {
        icon: '🐾',
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      });
      return;
    }
    const data = {
      user: pb.authStore.model.id,
      comment: commentValue,
      post: id,
    };
    try {
      const newData = await pb.collection('contentComment').create(data);
      if (newData) {
        await pb.collection('contents').update(id, {
          'comments+': newData.id,
        });
      }
      const commentArr = await pb
        .collection('contentComment')
        .getOne(newData.id, { expand: 'user' });
      // let deepArr = JSON.parse(JSON.stringify(comments));
      // console.log(comments, deepArr);
      setComment((comment) => [...comment, commentArr]);
      commentRef.current.value = '';
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    // setReply(e.target.value);
  };

  return (
    <form
      action="?/create"
      onSubmit={handleSubmit}
      ref={formRef}
      method="POST"
      encType="multipart/form-data"
      className="bg-[#f1f1f1] rounded-10 w-[988px] h-[100px] flex items-center align-middle"
    >
      <textarea
        type="text"
        className="bg-[#f1f1f1] w-[860px] h-[100px] rounded-10 p-5 mr-5 focus:outline-none resize-none"
        placeholder="댓글을 입력해주세요"
        ref={commentRef}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="bg-primary text-white px-4 py-9 rounded-10 right-0 h-5 items-center flex"
      >
        댓글 달기
      </button>
    </form>
  );
}

export default ContentCommentForm;
