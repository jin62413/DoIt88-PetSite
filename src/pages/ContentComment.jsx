import { useEffect, useState } from 'react';
import pb from '@/api/pocketbase';

function ContentComment(props) {
  const [data, setData] = useState([]);
  const [nickname, setNickname] = useState();
  const [comment, setComment] = useState();
  const [profile, setProfile] = useState();

  const [created, setCreated] = useState();

  useEffect(() => {
    async function getComment() {
      try {
        const data = await pb
          .collection('contents')
          .getOne(props.id, {
            expand: 'comments,comments.user',
          })
          .then((res) => setData(res));
        // console.log(data);
        const { expand } = data;
        if (expand) {
          setComment(expand.comments.comment);
          setCreated(expand.comments);
          setNickname(expand.comments.user);
        }
        // console.log(expand);
      } catch (error) {
        if (!(error in DOMException)) {
          console.error();
        }
      }
    }
    getComment();
  }, []);

  return (
    <>
      {/* {comment?.length !== 0 && ( */}
      <div>
        {console.log(data)}
        {data?.items?.map((item) => (
          <div className="flex gap-6 w-[988px]" key={item.id}>
            {/* <CommentItem id={props.id} item={item} /> */}
            <img
              src={getPbImageURL(item.expand.comments.user.profile)}
              alt="유저프로필사진"
            />
            {console.log(item.comment.expand.comments.comment)}
            <div>
              <div className="flex gap-6 items-baseline">
                <p className="font-semibold text-lg">
                  {item.expand.comments.expand.user.nickname}
                </p>
                {console.log(item.expand.comments.user)}
                <span className="text-sm h-fit">{item.created}</span>
              </div>
              <p>{item.comments.comment}</p>
              {console.log(item.comments.comment)}
            </div>
          </div>
        ))}
        <Comment />
      </div>
      {/* )} */}
    </>
  );
}
export default ContentComment;
