import pb from '@/api/pocketbase';
import commentProfile from '@/assets/community/commentProfile.svg';
import EditDelete from '@/components/button/EditDelete';
import { useState } from 'react';
import { useEffect } from 'react';

function CommunityComment({ profile, nickname, comment, commentDate }) {
  return (
    <>
      <div className="border-t-2 py-[30px]">
        <div className="border-b-2 py-[16px]">
          <div className="w-full pb-[12px] flex items-start justify-between">
            <figure className="flex items-center">
              <img
                className="rounded-[50%] w-[60px] h-[60px] mr-[12px] "
                src={profile}
                alt="댓글 프로필 사진"
              />
              <figcaption className="text-[18px] text-black font-bold">
                {nickname}
              </figcaption>
            </figure>

            <EditDelete />
          </div>
          <p className="pb-[8px]">{comment}</p>
          <time className="text-sm">{commentDate}</time>
        </div>
      </div>

      {/* <div className="mb-[80px] py-[20px]">
        <div className="p-[20px] w-[988px] h-[118px] rounded-[10px] bg-[#F1F1F1]">
          <textarea
            type="text"
            className="align-bottom resize-none focus:outline-none w-[847px] h-[78px] bg-[#F1F1F1]"
            placeholder="댓글을 입력해주세요"
          />

          <button className="w-[82px] h-[55px] ml-[19px] rounded-[10px] bg-primary px-[26px] py-[18px] text-white text-[16px] font-[500]">
            등록
          </button>
        </div>
      </div> */}
    </>
  );
}

export default CommunityComment;
