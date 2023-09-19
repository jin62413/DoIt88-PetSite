import pb from '@/api/pocketbase';
import { useState, useEffect } from 'react';
import { getPbImageURL } from '@/utils';
import ContentCommentForm from './ContentCommentForm';
import CommentEdit from './CommentEdit';
import CommentItem from './CommentItem';

function ContentComment(props) {
  const [data, setData] = useState([]);
  const [setNickname] = useState();
  const [comment, setComment] = useState();
  const [setProfile] = useState();

  const [created, setCreated] = useState();

  useEffect(() => {
    async function getComment() {
      try {
        const data = await pb
          .collection('contentComment')
          .getList(1, 30, {
            expand: 'post,user',
            filter: `(post='${props.id}')`,
          })
          .then((res) => setData(res));
        const { comment, created, expand } = data;
        setComment(comment);
        setCreated(created);
        if (expand) {
          setNickname(expand.user);
          setProfile(expand.user.profile);
        }
      } catch (error) {
        if (!(error in DOMException)) {
          console.error();
        }
      }
    }
    getComment();
  }, [data]);

  const userId = pb.authStore.model.id;

  const [commentEdit, setCommentEdit] = useState({ state: false, index: '' });
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const handleUpdate = async (commentId, newComment) => {
    try {
      await pb
        .collection('contentComment')
        .update(commentId, { comment: newComment });
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <>
      {comment?.length !== 0 && (
        <div>
          {data?.items?.map((item) => (
            <div
              className="flex gap-6 w-[988px] h-20 align-middle"
              key={item.id}
            >
              <figure className="w-14">
                <img
                  src={getPbImageURL(item.expand.user, 'profile')}
                  alt="유저 프로필 사진"
                  className="w-auto h-14 m-auto rounded-full"
                />
              </figure>
              <div>
                <div className="flex gap-6 items-baseline">
                  <p className="font-semibold text-lg">
                    {item.expand.user.nickname}
                  </p>
                  <span className="text-sm h-fit">{`${item.created.slice(
                    0,
                    4
                  )}년 ${item.created.slice(5, 7)}월 ${item.created.slice(
                    8,
                    10
                  )}일`}</span>
                </div>

                {editMode ? (
                  <CommentEdit item={item} />
                ) : (
                  <CommentItem comment={item.comment} />
                )}
              </div>
              {userId == item.expand.user.id && (
                <div className="align-middle items-center right-0">
                  {editMode ? null : (
                    <div className="flex gap-2">
                      <button type="button" onClick={() => setEditMode(true)}>
                        수정
                      </button>
                      <button type="button" className="text-error">
                        삭제
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
          <ContentCommentForm postId={props.id} />
        </div>
      )}
    </>
  );
}
export default ContentComment;
