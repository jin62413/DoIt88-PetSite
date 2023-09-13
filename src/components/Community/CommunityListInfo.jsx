import profile from '@/assets/community/profile.svg';

function CommunityListInfo() {
  return (
    <>
      <div className="CommunityListInfo flex justify-between items-center w-[258px] h-[30px]">
        <div className="CommunityListProfile flex">
          <img
            src={profile}
            alt="프로필 사진"
            className="text-[12px] text-black font-[400]"
          />
          <div className="flex items-center text-[12px] text-black font-[400] ml-[8px]">
            닉네임자리
          </div>
        </div>
        <div className="CommunityListComments text-[12px] text-black font-[400]">
          댓글: 12
        </div>
        <div className="CommnunityListDate text-[12px] text-black font-[400]">
          09.25
        </div>
      </div>
    </>
  );
}

export default CommunityListInfo;
