import eventBanner from '@/assets/recommend/eventBanner.png';

function BannerRecommend() {
  return (
    <>
      <img
        src={eventBanner}
        alt="이벤트 배너"
        className=" w-[700px] my-[40px]"
      />
    </>
  );
}

export default BannerRecommend;
