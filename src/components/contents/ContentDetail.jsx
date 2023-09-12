import anonymous from '@/assets/images/Ellipse.svg';
import BookMark from '@/components/button/Bookmark';
import LikeButton from '@/components/button/likeButton';
import CommentCount from '@/components/button/CommentCount';
import ShareButton from '@/components/button/ShareButton';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPbImageURL } from '@/utils';
import ContentComment from './ContentCommentList';
import pb from '@/api/pocketbase';

function ContentDetail() {
  const { contentId } = useParams();

  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [image, setImage] = useState();
  const [imageAlt, setImageAlt] = useState();

  const [created, setCreated] = useState();

  useEffect(() => {
    async function getContent() {
      try {
        const data = await pb.collection('contents').getOne(contentId);
        const { title, content, imageAlt, created } = data;
        setTitle(title);
        setContent(content);
        setImage(getPbImageURL(data, 'image'));
        setImageAlt(imageAlt);
        setCreated(created);
      } catch (error) {
        if (!(error in DOMException)) {
          console.error();
        }
      }
    }

    getContent();
  }, [contentId]);

  const [date, setDate] = useState();

  useEffect(() => {
    if (created) {
      let datetime = created.split(' ')[0];
      setDate(datetime);
    }
  }, [created]);

  // if (data && !Array.isArray(data)) {
  if (title) {
    return (
      <div className="flex flex-col m-auto items-center gap-11 my-10 w-full">
        <div className="w-[988px]">
          <h1 className="text-black text-[32px] mb-3">{title}</h1>
          <div className="flex justify-between">
            <figure className="flex gap-2 align-middle items-center">
              <img
                src={anonymous}
                alt="익명"
                className="rounded-full w-10 h-10"
              />
              <p>이름 넣는 곳</p>
            </figure>
            <span className="pt-2">{date}</span>
          </div>
          <div className="flex flex-col gap-11 mt-8">
            <figure className="mx-auto w-[600px] h-[380px] overflow-hidden relative">
              <img
                src={image}
                className="absolute top-1/2 -translate-y-1/2 w-full h-auto"
              />
              <figcaption aria-readonly>{imageAlt}</figcaption>
            </figure>
            <div className="px-10">{content}</div>
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
        <ContentComment />
      </div>
    );
  }
}

export default ContentDetail;
