import CommunityListContent from './CommunityListContent';
import CommunityListInfo from './CommunityListInfo';
import { useState } from 'react';
import { useEffect } from 'react';
import pb from '@/api/pocketbase';

function CommunityListPost() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getContents() {
      try {
        await pb
          .collection('community')
          .getList(1, 30, {
            sort: '-created',
          })
          .then((res) => setData(res));
      } catch (error) {
        if (!(error in DOMException)) {
          console.error();
        }
      }
    }
    getContents();
  }, []);

  return (
    <>
      {data?.items?.map((item) => (
        <div key={item.id}>
          <div className="CommunityListPost border-b-2 border-[#747474] p-[20px]">
            <CommunityListContent key={item.id} item={item} />
            <CommunityListInfo key={item.id} item={item} />
          </div>
        </div>
      ))}
    </>
  );
}

export default CommunityListPost;
