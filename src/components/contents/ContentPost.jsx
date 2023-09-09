import useDocumentTitle from '@/hooks/useDocumentTitle';
import Spinner from '../Spinner';
import useContentsList from '@/hooks/useContentsList';
import Item from './Item';

function ContentPost() {
  useDocumentTitle('컨텐츠 목록');
  const { isLoading, data } = useContentsList([]);

  if (isLoading) {
    return <Spinner size={160} />;
  }
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
