import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperMainBanner from './SwiperMainBanner';
import leftButton from '@/assets/icon/mainbanner-left.svg';
import rightButton from '@/assets/icon/mainbanner-right.svg';

// 메인 배너 스와이퍼 기능
function MainBanner() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="max-w-full min-w-[1120px] relative">
      <Swiper
        // {...setSwiperSetting}

        // install Swiper modules
        modules={[Autoplay, Navigation]}
        spaceBetween={60}
        centeredSlides={true}
        loop={true}
        enabled={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        slidesPerView={1}
        navigation={
          {
            prevEl: prevRef.current, // 이전 버튼
            nextEl: nextRef.current,
          } // 다음 버튼
        }
        onBeforeInit={(swiper) => {
          // 초기 설정
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.update();
        }}
        className="flex justify-center items-center"
      >
        <SwiperSlide>
          <SwiperMainBanner
            title1="지금은 내 친구"
            title2="자랑하는 시간!"
            descript="나만 보기 아까운 귀엽고 재미있는 반려동물 사진이 있다면 자랑하고 선물 받아가자"
            bg="xl:bg-mainBanner1_1 lg:bg-mainBanner1_2 md:bg-mainBanner1_3 sm:bg-mainBanner1_4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperMainBanner
            title1="같이 놀러 가자"
            descript="반려동물과 같이 가고 싶은 장소를 공유하자"
            bg="xl:bg-mainBanner2_1 lg:bg-mainBanner2_2 md:bg-mainBanner2_3 sm:bg-mainBanner2_4"
          />
        </SwiperSlide>
      </Swiper>

      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-30 w-[1250px] flex items-center justify-between">
        <button ref={prevRef} type="button">
          <img src={leftButton} />
        </button>
        <button ref={nextRef} type="button">
          <img src={rightButton} />
        </button>
      </div>
    </div>
  );
}

export default MainBanner;
