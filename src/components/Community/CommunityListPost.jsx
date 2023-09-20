import CommunityListContent from './CommunityListContent';
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
      <fieldset className="CommunityListProcedure flex">
        <div className="" onClick="">
          <input
            id="radio1"
            type="radio"
            name="radio"
            className="hidden"
            checked
          />
          <label htmlFor="radio1" className="flex items-center cursor-pointer">
            <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey ml-[20px]"></span>
            최신순
          </label>
        </div>

        <div className="" onClick="">
          <input id="radio2" type="radio" name="radio" className="hidden" />
          <label htmlFor="radio2" className="flex items-center cursor-pointer">
            <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey ml-[20px]"></span>
            인기순
          </label>
        </div>
      </fieldset>

      {data?.items?.map((item) => (
        <div key={item.id}>
          <div className="border-b-2 border-[#747474] p-[20px]">
            <CommunityListContent key={item.id} item={item} />
          </div>
        </div>
      ))}
    </>
  );
}

export default CommunityListPost;
