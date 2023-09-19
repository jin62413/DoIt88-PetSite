import Pagination from '../Pagination';
import CommunityListPost from './CommunityListPost';
import CommunityListProcedure from './CommunityListProcedure';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '@/store/auth';
import toast from 'react-hot-toast';

function CommunityList() {
  const navigate = useNavigate();

  const isAuth = useAuthStore((state) => state.isAuth);

  const handlePage = () => {
    if (isAuth) {
      navigate('/community/new');
    } else {
      toast('로그인해야 글 작성이 가능합니다.', {
        icon: '🗑',
      });
      navigate('/signIn');
    }
  };

  return (
    <div className="flex justify-center">
      <div>
        <div className="w-[1015px] flex-col justify-center items-center py-[40px]">
          <h1 className="text-center text-black text-[28px] font-[700] mb-[50px]">
            커뮤니티
          </h1>
          <CommunityListProcedure />
          <CommunityListPost />
          <div className="flex justify-end mt-[12px]">
            <button
              onClick={handlePage}
              className="w-[140px] h-[52px] bg-primary text-white text-[16px] font-[500] rounded-10"
            >
              글쓰기
            </button>
          </div>
        </div>
        <div className="flex justify-center py-[16px]">
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default CommunityList;
