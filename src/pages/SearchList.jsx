// import SHcommunityList from '@/components/searchList/SHcommunityList';
import Pagination from '@/components/home/Pagination';
import SEcontentPost from '@/components/searchList/SearchContentPost';


// import CommunityListPost from '@/components/Community/CommunityListPost';
import SHcommunityListPost from '@/components/searchList/SearchCommunityListPost';

function SearchList() {
  return (
    // flex-col justify-center items-center py-[40px] gap-11
    <div className="flex flex-col m-auto items-center gap-11 my-10">
      <div className="flex flex-col m-auto items-center gap-11 my-10">
        <h2 className="text-black text-[28px] font-bold">
          커뮤니티
        </h2>
        <SHcommunityListPost />
      </div>

      <div className="flex flex-col m-auto items-center gap-11 my-10">
        <h2 className="text-black text-[28px] font-bold">콘텐츠</h2>
        <div className="flex gap-8 max-w-5xl flex-wrap">
          <SEcontentPost />
        </div>
      </div>

      <div className="flex justify-center py-[16px]">
        <Pagination />
      </div>
    </div>
  );
}

export default SearchList;
