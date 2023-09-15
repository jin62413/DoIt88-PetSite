import pb from '@/api/pocketbase';
import { useState, useEffect } from 'react';
import Comment from '@/components/commentInput/Comment';
import { getPb, getPbImageURL } from '@/utils';

function ContentComment(props) {
  const [data, setData] = useState([]);
  const [nickname, setNickname] = useState();
  const [comment, setComment] = useState();
  const [profile, setProfile] = useState();

  const [created, setCreated] = useState();
  useEffect(() => {
    async function getComment() {
      try {
        // const data = await pb
        //   .collection('contents')
        //   .getOne(props.id, {
        //     expand: 'comments,comments.user',
        //   })
        //   .then((res) => setData(res));
        const data = await pb
          .collection('contentComment')
          .getList(1, 10, {
            expand: 'post,user',
            filter: `(post='${props.id}')`,
          })
          .then((res) => setData(res));
        const { expand } = data;
        setComment(comment);
        setCreated(created);
        console.log(expand);
        if (expand) {
          setNickname(expand.user);
          setProfile(expand.user.profile);
          console.log(expand.user);
        }
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
      {comment?.length !== 0 && (
        <div>
          {data?.items?.map((item) => (
            <div className="flex gap-6 w-[988px]" key={item.id}>
              {console.log(item.expand.user.profile)}
              <img
                src={getPb(item.expand.user.profile, 'profile')}
                alt="유저프로필사진"
              />
              <div>
                <div className="flex gap-6 items-baseline">
                  <p className="font-semibold text-lg">
                    {item.expand.user.nickname}
                  </p>
                  <span className="text-sm h-fit">{item.created}</span>
                </div>
                <p>{item.comment}</p>
              </div>
            </div>
          ))}
          <Comment />
        </div>
      )}
    </>
  );
}
export default ContentComment;
