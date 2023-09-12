import pet1 from '@/assets/recommend/pet1.svg';
import pet2 from '@/assets/recommend/pet2.svg';
import pet3 from '@/assets/recommend/pet3.svg';
import prev from '@/assets/icon/prev.svg';
import next from '@/assets/icon/next.svg';

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

function SwiperRecommend() {
  const [setSwiperRef] = useState(null);

  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const setSwiperSetting = {
    // install Swiper modules
    onSwiper: setSwiperRef,
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    spaceBetween: 27,
    pagination: {
      type: 'fraction',
    },
    modules: [Navigation],
    navigation: {
      prevEl: leftRef.current, // 이전 버튼
      nextEl: rightRef.current, // 다음 버튼
    },
    onBeforeInit: (swiper) => {
      // 초기 설정
      swiper.params.navigation.prevEl = leftRef.current;
      swiper.params.navigation.nextEl = rightRef.current;
      swiper.navigation.update();
    },
  };

  return (
    <>
      <Swiper {...setSwiperSetting} className="mySwiper max-w-[1000px]">
        <SwiperSlide>
          <a href="/">
            <img
              src={pet1}
              alt="강아지 사진"
              className="w-[310px] h-[210px] mb-[16px]"
            />
            <span className="text-[20px] font-[500] text-[#1E1E1E]">
              강아지 상하체 구분, 어떻게 할까?
            </span>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/">
            <img
              src={pet2}
              alt="강아지 사진"
              className="w-[310px] h-[210px] mb-[16px]"
            />
            <span className="text-[20px] font-[500] text-[#1E1E1E]">
              올바르게 강아지 안는 법
            </span>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/">
            <img
              src={pet3}
              alt="고양이 사진"
              className="w-[310px] h-[210px] mb-[16px]"
            />
            <span className="text-[20px] font-[500] text-[#1E1E1E]">안자?</span>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/">
            <img
              src={pet1}
              alt="강아지 사진"
              className="w-[310px] h-[210px] mb-[16px]"
            />
            <span className="text-[20px] font-[500] text-[#1E1E1E]">
              강아지 상하체 구분, 어떻게 할까?
            </span>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/">
            <img
              src={pet2}
              alt="강아지 사진"
              className="w-[310px] h-[210px] mb-[16px]"
            />
            <span className="text-[20px] font-[500] text-[#1E1E1E]">
              올바르게 강아지 안는 법
            </span>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/">
            <img
              src={pet3}
              alt="고양이 사진"
              className="w-[310px] h-[210px] mb-[16px]"
            />
            <span className="text-[20px] font-[500] text-[#1E1E1E]">안자?</span>
          </a>
        </SwiperSlide>
      </Swiper>

      {/* <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-20 w-[1038px] flex items-center justify-between"> */}
      <div className="absolute top-1/2 -translate-y-[-385px] left-1/2 -translate-x-1/2 z-20 w-[1038px] flex items-center justify-between">
        <button className="w-[54px] h-[54px]" ref={leftRef} type="button">
          <img src={prev} />
        </button>
        <button className="w-[54px] h-[54px]" ref={rightRef} type="button">
          <img src={next} />
        </button>
      </div>
    </>
  );
}

export default SwiperRecommend;
