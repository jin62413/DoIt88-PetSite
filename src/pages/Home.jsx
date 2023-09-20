import Recommend from '@/components/MainRecommend/Recommend';
import MainBanner from '@/components/home/MainBanner';
import PopularPosts from '@/components/home/Posts';

function Home() {
  return (
    <div>
      <h2 className="text-slate-400">홈</h2>
      <MainBanner />
      <Recommend />
      <PopularPosts />
    </div>
  );
}

export default Home;
