import MainBanner from '@/components/MainBanner';
import Recommend from './Recommend';
import PopularPosts from '@/components/Posts';

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
