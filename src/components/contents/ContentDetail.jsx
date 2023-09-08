import anonymous from '@/assets/images/Ellipse.svg';
import Comment from '@/components/contents/Comment';
import BookMark from '@/components/button/Bookmark';
import LikeButton from '@/components/button/likeButton';
import CommentCount from '@/components/contents/CommentCount';
import ShareButton from '@/components/button/ShareButton';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useContentItem from '@/hooks/useContentItem';
import { getPbImageURL } from '@/utils';
import Spinner from '../Spinner';

function ContentDetail() {
  const { contentId } = useParams();

  const { isLoading, data } = useContentItem(contentId);

  const [date, setDate] = useState();

  useEffect(() => {
    if (data) {
      let datetime = data.created.split(' ')[0];
      setDate(datetime);
    }
  }, [data]);

  if (isLoading) {
    return <Spinner />;
  }
  // if (data && !Array.isArray(data)) {
  if (data) {
    return (
      <div className="flex flex-col m-auto items-center gap-11 my-10 w-full">
        <div className="w-[988px]">
          <h1 className="text-black text-[32px] mb-3">{data.title}</h1>
          <div className="flex justify-between">
            <figure className="flex gap-2 align-middle items-center">
              <img src={anonymous} alt="익명" />
              <p>이름 넣는 곳</p>
            </figure>
            <span className="pt-2">{date}</span>
          </div>
          <div className="flex flex-col gap-11 mt-8">
            <figure className="mx-auto w-[600px] h-[380px] overflow-hidden relative">
              <img
                src={getPbImageURL(data, 'image')}
                // 문제가 되는 부분
                className="absolute top-1/2 -translate-y-1/2 w-full h-auto"
              />
              <figcaption aria-readonly>{data.imageAlt}</figcaption>
            </figure>
            <div className="px-10">{data.content}</div>
            <div className="flex justify-between">
              <div className="flex gap-2 items-center">
                <BookMark />
                <LikeButton />
                <CommentCount />
              </div>
              <ShareButton />
            </div>
          </div>
        </div>
        <Comment />
      </div>
    );
  }
}

export default ContentDetail;
