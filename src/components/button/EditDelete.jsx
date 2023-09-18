import pb from '@/api/pocketbase';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function EditDelete() {
  const { dataId } = useParams();
  const navigator = useNavigate();

  const handleEditRecord = () => {
    try {
      navigator(`community/edit/${dataId}`);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteRecord = async () => {
    const deleteConfirm = confirm('정말 삭제하시겠나요?');

    try {
      if (deleteConfirm) {
        await pb.collection('community').delete('w7yse0ni9dvh5qb');
        toast('삭제되었습니다', {
          icon: '🗑',
        });
        navigator('community');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button
        onClick={handleEditRecord}
        className="mr-[8px] text-black text-[16px] font-[500]"
      >
        수정
      </button>
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
