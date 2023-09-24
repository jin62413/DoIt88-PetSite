import CommunityListPost from './SHcommunityListPost';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function SHcommunityList() {
  const navigate = useNavigate();

  const authDataString = localStorage.getItem('pocketbase_auth');
  const authData = JSON.parse(authDataString);

  const handlePage = () => {
    if (authData) {
      navigate('/community/new');
    } else {
      toast('로그인을 해주세요.', {
        icon: '🐾',
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
          <CommunityListPost />
        </div>
      </div>
    </div>
  );
}

export default SHcommunityList;
