import CommunityListContent from './CommunityListContent';
import { useState, useEffect } from 'react';
import pb from '@/api/pocketbase';

function CommunityListPost() {
  const [data, setData] = useState([]);
  const [check, setCheck] = useState('-created');

  useEffect(() => {
    async function getCommunity() {
      try {
        const record = await pb.collection('community').getList(1, 30, {
          sort: check,
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

  // function CheckCreated() {
  //   useEffect(() => {
  //     setCheck('-created');
  //   }, []);
  // }

  // function CheckedLike() {
  //   setCheck('-like');
  // }

  // ------------------------------------------------------------------

  // const handleSortChange = (event) => {
  //   setCheck(event.target.value);
  // };

  return (
    <>
      {/* <div className="sort-container">
        <label>
          <input
            type="radio"
            name="sort"
            value="-creadted"
            checked={check === '-created'}
            onChange={(e) => {
              setCheck(e.target.value);
            }}
          />
          최신순
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            value="-like"
            checked={check === '-like'}
            onChange={handleSortChange}
          />
          인기순
        </label>
      </div> */}

      <fieldset className="CommunityListProcedure flex">
        <input
          id="radio1"
          type="radio"
          name="radio"
          className="hidden"
          checked
          onClick={() => setCheck('-created')}
        />
        <label htmlFor="radio1" className="flex items-center cursor-pointer">
          <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey ml-[20px]"></span>
          최신순
        </label>

        <input
          id="radio2"
          type="radio"
          name="radio"
          className="hidden"
          onClick={() => setCheck('-like')}
        />
        <label htmlFor="radio2" className="flex items-center cursor-pointer">
          <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey ml-[20px]"></span>
          인기순
        </label>
      </fieldset>

      {data?.items?.map((item) => (
        <div key={item.id}>
          <div className="border-b-2 border-[#747474] p-[20px]">
            <CommunityListContent item={item} />
          </div>
        </div>
      ))}
    </>
  );
}

export default CommunityListPost;
