import EditDelete from '@/components/button/EditDelete';
import { getPbImageURL } from '@/utils';
import { useState } from 'react';
import { useEffect } from 'react';

function CommunityComment({ profile, nickname, comment, commentDate }) {
  const [date, setDate] = useState('');

  const commentProfile = getPbImageURL(profile, 'profile');

  useEffect(() => {
    if (commentDate) {
      let dateTime = `${commentDate.slice(5, 7)}월 ${commentDate.slice(
        8,
        10
      )}일`;
      setDate(dateTime);
    }
  }, [commentDate]);

  return (
    <>
      <li className="border-b my-4 pb-4">
        <div className="w-full pb-[12px] flex items-start justify-between">
          <figure className="flex items-center">
            <img
              className="rounded-full w-9 h-9 mr-3 object-contain"
              src={commentProfile}
              alt="댓글 프로필 사진"
            />
            <figcaption className="text-[18px] text-black font-bold">
              {nickname}
            </figcaption>
          </figure>

          <EditDelete />
        </div>
        <p className="pb-2 text-base">{comment}</p>
        <time className="text-sm text-content">{date}</time>
      </li>

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
