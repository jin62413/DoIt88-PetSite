import SHcommunityList from '@/components/searchList/SHcommunityList';
import Pagination from '@/components/home/Pagination';
import SEcontentPost from '@/components/searchList/SEcontentPost';

function SearchList() {
  return (
    <div>
      <SHcommunityList />

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
