import profile from '@/assets/community/profile.svg';
import pb from '@/api/pocketbase';
import { useState } from 'react';

function CommunityListInfo({ item }) {
  let [nickname, setNickname] = useState([]);

  // const records = await pb.collection('users').getFullList({
  //   filter: (nickname = '${nickname}'),
  // });

  return (
    <>
      <div className="CommunityListInfo flex items-center">
        <div className="CommunityListProfile flex">
          <img
            src={profile}
            alt={item.imageAlt}
            className="text-[12px] text-black font-[400]"
          />
          <div className="flex items-center text-[12px] text-black font-[400] ml-[8px]">
            닉네임
          </div>
        </div>
        <div className="CommunityListComments ml-[44px] text-[12px] text-black font-[400]">
          댓글: 12
        </div>
        <div className="CommnunityListDate ml-[44px] text-[12px] text-black font-[400]">
          {item.updated}
        </div>
      </div>
    </>
  );
}

export default CommunityListInfo;
