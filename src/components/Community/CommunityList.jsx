import Pagination from '../Pagination';
import CommunityListPost from './CommunityListPost';
import CommunityListProcedure from './CommunityListProcedure';

function CommunityList() {
  return (
    <div className="flex justify-center">
      <div>
        <div className="CommunityListContainer w-[1015px] flex-col justify-center items-center py-[40px]">
          <h1 className="CommunityListSubject text-center text-black text-[28px] font-[700] mb-[50px]">
            커뮤니티
          </h1>
          <CommunityListProcedure />
          <CommunityListPost />
          <div className="CommunityListButton flex justify-end mt-[12px]">
            <button className="w-[140px] h-[52px] bg-primary text-white text-[16px] font-[500] rounded-10">
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
