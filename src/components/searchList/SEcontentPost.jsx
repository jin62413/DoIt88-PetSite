import Item from './SEitem';
import { useState } from 'react';
import { useEffect } from 'react';
import pb from '@/api/pocketbase';
import Spinner from '../home/Spinner';
import useSearch from '@/store/searchStore';

function SEcontentPost() {
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const { searchText, setSearchText } = useSearch();
  useEffect(() => {
    async function getContents() {
      setIsLoading(true);
      try {
        await pb
          .collection('contents')
          .getList(1, 30, {
            filter: `(title ?~ "${searchText}" || content ?~ "${searchText}" )`,
            // sort: '-created',
          })
          .then((res) => setData(res));
        setIsLoading(false);
      } catch (error) {
        if (!(error in DOMException)) {
          console.error();
          setIsLoading(false);
        }
      }
    }
    getContents();
  }, []);

  return (
    <>
      {isLoading && <Spinner />}
      {!isLoading &&
        data?.items?.map((item) => (
          <div key={item.id}>
            <Item key={item.id} item={item} />
          </div>
        ))}
    </>
  );
}

export default SEcontentPost;
