import CommunityComment from './CommunityComment';
import BookMark from '@/components/button/Bookmark';
import LikeButton from '@/components/button/likeButton';
import ShareButton from '@/components/button/ShareButton';
import EditDelete from '@/components/button/EditDelete';
import pb from '@/api/pocketbase';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPbImageURL } from '@/utils';
import Comment from '../commentInput/Comment';
import useAuthStore from '@/store/auth';

function CommunityMain() {
  const { dataId } = useParams();
  // const { isAuth } = useAuthStore();
  // const userId = pb.authStore.model.id;
  const isAuth = useAuthStore((state) => state.isAuth);
  const authDataString = localStorage.getItem('pocketbase_auth');
  const authData = JSON.parse(authDataString);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [profile, setProfile] = useState('');
  const [commentList, setCommentList] = useState([]);
  const [user, setUser] = useState('');
  const [data, setData] = useState(null);
  const [created, setCreated] = useState('');

  // const commentInputRef = useRef(null);
  // const [commentInput, setCommentInput] = useState('');

  useEffect(() => {
    const getCommunityItem = async () => {
      try {
        const data = await pb
          .collection('community')
          .getOne(dataId, { expand: 'user, comment, comment.user' });
        setData(data);
        const { title, content, created, expand, image } = data;
        setTitle(title);
        setContent(content);
        {
          image && setImage(getPbImageURL(data, 'image'));
        }
        setCreated(created);
        // console.log(data);
        if (expand) {
          setProfile(getPbImageURL(expand.user, 'profile'));
          setCommentList(expand.comment);
          setUser(expand.user);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getCommunityItem();
  }, [dataId]);

  const [date, setDate] = useState();

  useEffect(() => {
    if (created) {
      let datetime = created.slice(0, 10);
      setDate(datetime);
    }
  }, [created]);

  // console.log(isAuth);

  /* const handleSubmitComment = async (e) => {
    e.preventDefault();
    console.log('click');
    const commentValue = commentInputRef.current.value;

    const newComment = {
      comment: commentValue,
      user: `${authData.model.id}`,
      record: `${dataId}`,
    };

    // const newCommentData = await pb
    //   .collection('communityComment')
    //   .getList(1, 30, {
    //     filter: `record="${dataId}"`,
    //     sort: '-created',
    //     // expand: 'user, record',
    //   });

    try {
      await pb.collection('communityComment').create(newComment);
      commentInputRef.current.value = '';
      setCommentList([...commentList, newComment]);
      // console.log(newCommentData);
      console.log('ok');
    } catch (err) {
      console.log(err);
    }
  };
  console.log(commentList); */

  return (
    data && (
      <>
        <h2 className="sr-only">커뮤니티</h2>
        <div className="flex justify-center max-w-full my-10">
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
              {isAuth && user.id === authData.model.id && (
                <EditDelete item={commentList} />
              )}
              {/* <EditDelete item={comment} /> */}
            </div>

            {/* 본문 */}
            <div className="flex flex-col items-center border-b border-[#A6A6A6]">
              <div className="flex justify-between items-end py-6 w-full">
                <h3 className="text-black text-[32px] font-bold">{title}</h3>
                <time>{date}</time>
              </div>
              <div className="flex flex-col justify-center w-full gap-[22px] pb-[44px]">
                <p className="pt-6">{content}</p>
                {image && (
                  <img
                    src={image}
                    alt="첨부 이미지"
                    className="w-1/3 mx-auto"
                  />
                )}
              </div>

              {/* 아이콘 */}
              <div className="flex gap-11 mb-11">
                <BookMark className="bg-[#E6E6E6] no-repeat rounded-full" />
                <LikeButton className="bg-[#E6E6E6] no-repeat rounded-full" />
                <ShareButton className="bg-[#E6E6E6] no-repeat rounded-full" />
              </div>
            </div>

            {/* 댓글 */}
            <ul className="py-8">
              {commentList &&
                commentList?.map((item) => {
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
            </ul>

            {/* 댓글 작성 */}
            <Comment dataId={dataId} />
            {/* <textarea
              type="text"
              className="bg-[#f1f1f1] w-[860px] h-[100px] rounded-10 p-5 mr-5 focus:outline-none resize-none"
              placeholder="댓글을 입력해주세요"
              name="comment"
              ref={commentInputRef}
            />
            <button
              onClick={handleSubmitComment}
              className="bg-primary text-white px-4 py-9 rounded-10 right-0 h-5 items-center flex"
            >
              댓글 달기
            </button> */}
          </div>
        </div>
      </>
    )
  );
}

export default CommunityMain;
