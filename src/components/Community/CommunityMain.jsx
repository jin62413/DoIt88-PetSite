import CommunityComment from './CommunityComment';
import BookMark from '@/components/button/Bookmark';
import LikeButton from '@/components/button/likeButton';
import ShareButton from '@/components/button/ShareButton';
import EditDelete from '@/components/button/EditDelete';
import pb from '@/api/pocketbase';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPbImageURL } from '@/utils';
import CommentInput from '../commentInput/CommentInput';
import Comment from '../commentInput/Comment';
import { useNavigate } from 'react-router-dom';

function CommunityMain() {
  const { dataId } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [profile, setProfile] = useState('');
  const [comment, setComment] = useState([]);
  const [user, setUser] = useState('');

  const [created, setCreated] = useState('');

  useEffect(() => {
    const getCommunityItem = async () => {
      try {
        const data = await pb
          .collection('community')
          .getOne('w7yse0ni9dvh5qb', { expand: 'user, comment, comment.user' });
        const { title, content, created, expand } = data;
        setTitle(title);
        setContent(content);
        setImage(getPbImageURL(data, 'image'));
        setCreated(created);
        // setNickname(data.expand.user.nickname);
        // setProfile(getPbImageURL(data.expand.user, 'profile'));
        if (expand) {
          setProfile(getPbImageURL(expand.user, 'profile'));
          setComment(expand.comment);
          setUser(expand.user);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getCommunityItem();
  }, []);

  const [date, setDate] = useState();

  useEffect(() => {
    if (created) {
      let datetime = created.slice(0, 10);
      setDate(datetime);
    }
  }, [created]);

  // console.log(comment);
  return (
    <>
      <h2 className="sr-only">커뮤니티</h2>
      <div className="flex justify-center max-w-full">
        <div className="flex-col max-w-[988px]">
          {/* 작성자 */}
          <div className="flex items-end justify-between">
            <figure className="flex items-center">
              <img
                className="rounded-full w-[60px] h-[60px] mr-2 object-contain"
                src={profile}
                alt="프로필 사진"
              />
              <figcaption className="font-medium text-2xl text-primary">
                {user.nickname}
              </figcaption>
            </figure>
            <EditDelete />
          </div>

          {/* 본문 */}
          <div className="flex flex-col items-center border-b border-[#A6A6A6]">
            <div className="flex justify-between items-end py-6 w-full">
              <h3 className="text-black text-[32px] font-bold">{title}</h3>
              <time>{date}</time>
            </div>
            <div className="flex flex-col justify-center w-full gap-[22px] pb-[44px]">
              <p className="pt-6">{content}</p>
              <img src={image} alt="첨부 이미지" className="w-1/3 mx-auto" />
            </div>

            {/* 아이콘 */}
            <div className="flex gap-11 mb-11">
              <BookMark className="bg-[#E6E6E6] no-repeat rounded-full" />
              <LikeButton className="bg-[#E6E6E6] no-repeat rounded-full" />
              <ShareButton className="bg-[#E6E6E6] no-repeat rounded-full" />
            </div>
          </div>

          {/* 댓글 */}
          <div className="py-8">
            {comment &&
              comment?.map((item) => {
                return (
                  <CommunityComment
                    key={item.id}
                    profile={item.expand.user}
                    nickname={item.expand.user.nickname}
                    comment={item.comment}
                    commentDate={item.created}
                  />
                );
              })}
          </div>

          {/* 댓글 작성 */}
          <Comment />
        </div>
      </div>
    </>
  );
}

export default CommunityMain;
