import MainBanner from '@/components/MainBanner';
import Recommend from '@/components/MainRecommend/Recommend';
import PopularPosts from '@/components/Posts';

function Home() {
  return (
    <div>
      <MainBanner />
      <Recommend />
      <PopularPosts />
    </div>
  );
}

export default Home;
