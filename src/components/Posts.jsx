import PopularItem from './PopularItem';

function PopularPosts() {
  return (
    <div className="flex flex-col m-auto items-center py-10">
      <h2 className="text-[28px] font-bold">커뮤니티 인기글</h2>
      <PopularItem />
      <PopularItem />
      <PopularItem />
    </div>
  );
}

export default PopularPosts;
