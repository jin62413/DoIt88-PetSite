import { getPbImageURL } from '@/utils';

function CommunityListInfo({ item }) {
  console.log(item.expand.user);
  return (
    <>
      {item && (
        <div className="flex items-center">
          <div className="flex">
            <img
              src={getPbImageURL(item?.expand.user, 'profile')}
              alt="프로필 사진"
              className="text-[12px] w-[30px] h-[30px] text-black font-[400] rounded-[50%]"
            />
            <div className="flex items-center text-[12px] text-black font-[400] ml-[8px]">
              {item?.expand.user.nickname}
            </div>
          </div>
          <div className="ml-[44px] text-[12px] text-black font-[400]">
            댓글: 12
          </div>
          <div className="ml-[44px] text-[12px] text-black font-[400]">
            {item?.updated}
          </div>
        </div>
      )}
    </>
  );
}

export default CommunityListInfo;
