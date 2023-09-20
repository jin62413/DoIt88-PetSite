import pb from '@/api/pocketbase';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function EditDelete({ item }) {
  const { dataId } = useParams();
  const navigate = useNavigate();

  const handleDeleteRecord = async () => {
    const deleteConfirm = confirm('정말 삭제하시겠나요?');

    try {
      if (deleteConfirm) {
        // 글 삭제
        await pb.collection('community').delete(dataId);
        toast('삭제되었습니다', {
          icon: '🗑',
        });
        // 댓글 삭제
        {
          item?.map(
            async (item) =>
              await pb.collection('communityComment').delete(item.id)
          );
        }
        navigate(-1);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Link to={`/community/edit/${dataId}`}>
        <button className="mr-[8px] text-black text-[16px] font-[500]">
          수정
        </button>
      </Link>
      <button
        onClick={handleDeleteRecord}
        className="text-error text-[16px] font-[500]"
      >
        삭제
      </button>
    </div>
  );
}

export default EditDelete;
