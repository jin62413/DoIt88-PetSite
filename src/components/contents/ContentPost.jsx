import Item from './Item';
import { useState } from 'react';
import { useEffect } from 'react';
import pb from '@/api/pocketbase';

function ContentPost() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getContents() {
      try {
        await pb
          .collection('contents')
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
          <Item key={item.id} item={item} />
        </div>
      ))}
    </>
  );
}

export default ContentPost;
