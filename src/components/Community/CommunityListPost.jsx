import CommunityListContent from './CommunityListContent';
import CommunityListInfo from './CommunityListInfo';
import { useState, useEffect } from 'react';
import pb from '@/api/pocketbase';

function CommunityListPost() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getCommunity() {
      try {
        const record = await pb.collection('community').getList(1, 30, {
          sort: '-created',
          expand: 'user',
        });
        setData(record);
      } catch (error) {
        if (!(error in DOMException)) {
          console.error();
        }
      }
    }

    getCommunity();
  }, []);

  return (
    <>
      {data &&
        data?.items?.map((item) => (
          <div key={item.id}>
            <div className="border-b-2 border-[#747474] p-[20px]">
              <CommunityListContent item={item} />
              <CommunityListInfo item={item} />
            </div>
          </div>
        ))}
    </>
  );
}

export default CommunityListPost;
