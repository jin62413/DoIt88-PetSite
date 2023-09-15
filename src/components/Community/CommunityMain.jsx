import CommunityComment from './CommunityComment';
import BookMark from '@/components/button/Bookmark';
import LikeButton from '@/components/button/likeButton';
import ShareButton from '@/components/button/ShareButton';
import EditDelete from '@/components/button/EditDelete';
import pb from '@/api/pocketbase';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPbImageURL } from '@/utils';

function CommunityMain() {
  const { dataId } = useParams();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [nickname, setNickname] = useState('');
  const [profile, setProfile] = useState('');
  const [comment, setComment] = useState('');
  const [commentDate, setCommentDate] = useState('');

  const [created, setCreated] = useState('');

  useEffect(() => {
    const getCommunityItem = async () => {
      try {
        const data = await pb
          .collection('community')
          .getOne('322brni67ol1ja2', {
            expand: 'user, comment',
          });
        const { title, content, created } = data;
        setTitle(title);
        setContent(content);
        setImage(getPbImageURL(data, 'image'));
        setCreated(created);
        setNickname(data.expand.user.nickname);
        setProfile(getPbImageURL(data.expand.user, 'profile'));
        console.log(data.expand.comment);
        setComment(data.expand.comment.comment);
        setCommentDate(data.expand.comment.created);
      } catch (error) {
        console.error(error);
      }
      // console.log(record.expand.user.nickname);
    };
    getCommunityItem();
  }, []);

  const [date, setDate] = useState();

  useEffect(() => {
    if (created) {
      let datetime = created.split('')[0];
      setDate(datetime);
    }
  }, [created]);

  return (
    <>
      <h2 className="sr-only">커뮤니티</h2>
      <div className="flex justify-center max-w-full">
        <div className="flex-col max-w-[988px]">
          <div className="flex items-end justify-between">
            <figure className="flex items-center">
              <img
                className="rounded-[50%] w-[60px] h-[60px] mr-[8px]"
                src={profile}
                alt="프로필 사진"
              />
              <figcaption className="font-medium text-2xl text-primary">
                {nickname}
              </figcaption>
            </figure>
            <EditDelete />
          </div>

          <div className="flex flex-col items-center">
            <div className="flex justify-between items-end py-[24px] w-full">
              <h3 className="text-black text-[32px] font-bold">{title}</h3>
              <time>{date}</time>
            </div>
            <div className="flex flex-col justify-center gap-[22px] pb-[44px]">
              <p className="pt-6">{content}</p>
              <img src={image} />
            </div>
            <div className="flex gap-11">
              <BookMark className="bg-[#E6E6E6] no-repeat rounded-full" />
              <LikeButton className="bg-[#E6E6E6] no-repeat rounded-full" />
              <ShareButton className="bg-[#E6E6E6] no-repeat rounded-full" />
            </div>
          </div>
          <CommunityComment
            profile={profile}
            nickname={nickname}
            comment={comment}
            commentDate={commentDate}
          />
        </div>
      </div>
    </>
  );
}

export default CommunityMain;
