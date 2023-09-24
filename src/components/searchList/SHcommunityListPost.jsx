// import CommunityListContent from './SHCommunityComment';

import { useState, useEffect, useLayoutEffect } from 'react';
import pb from '@/api/pocketbase';
import useSearch from '@/store/searchStore';
import SHcommunityListContent from './SHommunityListContent';
import Spinner from '../home/Spinner';

function SHcommunityListPost() {
  // const [isLoading, setIsLoading] = useState(true);
  // const [data, setData] = useState(null);
  // const [check, setCheck] = useState('-created');
  const { searchText, setSearchText, data, setData, isLoading, setIsLoading } =
    useSearch();

  //검색된 리스트 가져옴
  useLayoutEffect(() => {
    async function getCommunity() {
      setIsLoading(true);
      // if (searchText === '') {
      //   setIsLoading(false);
      //   return;
      // }
      try {
        console.log(searchText);
        if (searchText.length > 0) {
          const record = await pb.collection('community').getList(1, 30, {
            filter: `(title ?~ "${searchText}" || content ?~ "${searchText}" )`,
            // filter: `'title ~ "${ddd}" || content ~ "${ddd}"'`,
            expand: 'user',
          });
          console.log(record);
          console.log(record.items);
          setData(record);
          setIsLoading(false);
          setSearchText('');
        }
      } catch (error) {
        if (!(error in DOMException)) {
          console.error();
          setIsLoading(false);
        }
      }
    }

    getCommunity();
  }, []);

  return (
    <>
      {isLoading && (
        <p className="p-10 text-center">
          <Spinner />
        </p>
      )}

      {isLoading === false && data.totalItems === 0 ? (
        <div>없는 데이터 입니다</div>
      ) : (
        data?.items?.map((item) => (
          <div key={item.id}>
            <div className="border-b-2 border-[#747474] p-[20px]">
              <SHcommunityListContent item={item} />
              {/* <CommunityListContent item={item} /> */}
            </div>
          </div>
        ))
      )}
    </>
  );
}

export default SHcommunityListPost;
