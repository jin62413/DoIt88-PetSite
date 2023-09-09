import useDocumentTitle from '@/hooks/useDocumentTitle';
import Spinner from '../Spinner';
import useContentsList from '@/hooks/useContentsList';
import { getPbImageURL } from '@/utils';
import { Link } from 'react-router-dom';

function ContentPost() {
  useDocumentTitle('컨텐츠 목록');
  const { isLoading, data } = useContentsList([]);

  if (isLoading) {
    return <Spinner size={160} />;
  }
  return (
    <>
      {data.items?.map((item) => (
        <div key={item.id}>
          <Link to={`/contents/detail/${item.id}`}>
            <figure className="flex flex-col gap-4 w-[310px] h-[210px] overflow-hidden relative">
              <img
                src={getPbImageURL(item, 'image')}
                className="borderRadius -translate-y-1/4"
              />
              <figcaption className="truncate" aria-readonly>
                {item.imageAlt}
              </figcaption>
            </figure>
            <p className="text-xl truncate">{item.title}</p>
          </Link>
        </div>
      ))}
    </>
  );
}

export default ContentPost;
