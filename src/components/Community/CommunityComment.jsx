import commentProfile from '@/assets/community/commentProfile.svg';

function CommunityComment() {
  return (
    <>
      <div className="CommunityCommentContainer border-t-2 py-[30px]">
        <div className="CommunityComment border-b-2 py-[16px]">
          <div className="CommunityCommentTop flex justify-between">
            <div className="CommunityCommentInfo pb-[12px] flex items-center">
              <div className="CommunityCommentProfile">
                <img
                  className="rounded-[50%] w-[60px] h-[60px] mr-[12px] "
                  src={commentProfile}
                  alt="댓글 프로필 사진"
                />
              </div>
              <div className="CommunityCommentWriter text-[18px] text-[black] font-[700]">
                닉네임입니다
              </div>
            </div>
            <div className="CommunityCommentButtonWrapper">
              <button className="mr-[8px] text-black text-[16px] font-[500]">
                수정
              </button>
              <button className="text-error text-[16px] font-[500]">
                삭제
              </button>
            </div>
          </div>
          <div className="CommunityComment pb-[8px]">
            댓글 내용이 담기는 공간이에요 댓글 구독 좋아요 알림설정 와 정말
            재밌다~
          </div>
          <div className="CommunityDate pb-[16px]">9월 5일</div>
        </div>

        <div className="CommunityComment border-b-2 py-[16px]">
          <div className="CommunityCommentTop flex justify-between">
            <div className="CommunityCommentInfo pb-[12px] flex items-center">
              <div className="CommunityCommentProfile">
                <img
                  className="rounded-[50%] w-[60px] h-[60px] mr-[12px] "
                  src={commentProfile}
                  alt="댓글 프로필 사진"
                />
              </div>
              <div className="CommunityCommentWriter text-[18px] text-[black] font-[700]">
                닉네임입니다
              </div>
            </div>
            <div className="CommunityCommentButtonWrapper">
              <button className="mr-[8px] text-black text-[16px] font-[500]">
                수정
              </button>
              <button className="text-error text-[16px] font-[500]">
                삭제
              </button>
            </div>
          </div>
          <div className="CommunityComment pb-[8px]">
            댓글 내용이 담기는 공간이에요 댓글 구독 좋아요 알림설정 와 정말
            재밌다~
          </div>
          <div className="CommunityDate pb-[16px]">9월 5일</div>
        </div>
      </div>

      <div className="CommunityCommentInputContainer mb-[80px] py-[20px]">
        <div className="CommunityCommentInputWrapper p-[20px] w-[988px] h-[118px] rounded-[10px] bg-[#F1F1F1]">
          <textarea
            type="text"
            className="CommnityCommentInput align-bottom resize-none focus:outline-none w-[847px] h-[78px] bg-[#F1F1F1]"
            placeholder="댓글을 입력해주세요"
          />

          <button className="w-[82px] h-[55px] ml-[19px] rounded-[10px] bg-primary px-[26px] py-[18px] text-white text-[16px] font-[500]">
            등록
          </button>
        </div>
      </div>
    </>
  );
}

export default CommunityComment;
