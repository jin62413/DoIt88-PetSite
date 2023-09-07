import pet1 from '../assets/recommend/pet1.svg';
import pet2 from '../assets/recommend/pet2.svg';
import pet3 from '../assets/recommend/pet3.svg';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

function SwiperRecommend() {
  const [setSwiperRef] = useState(null);

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        spaceBetween={27}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper max-w-[1000px]"
      >
        <SwiperSlide>
          <img
            src={pet1}
            alt="강아지 사진"
            className="w-[310px] h-[210px] mb-[16px] cursor-pointer"
          />
          <span className="text-[20px] font-[500] text-[#1E1E1E]">
            강아지 상하체 구분, 어떻게 할까?
          </span>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={pet2}
            alt="강아지 사진"
            className="w-[310px] h-[210px] mb-[16px] cursor-pointer"
          />
          <span className="text-[20px] font-[500] text-[#1E1E1E]">
            강아지 상하체 구분, 어떻게 할까?
          </span>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={pet3}
            alt="고양이 사진"
            className="w-[310px] h-[210px] mb-[16px] cursor-pointer"
          />
          <span className="text-[20px] font-[500] text-[#1E1E1E]">안자?</span>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={pet1}
            alt="강아지 사진"
            className="w-[310px] h-[210px] mb-[16px] cursor-pointer"
          />
          <span className="text-[20px] font-[500] text-[#1E1E1E]">
            강아지 상하체 구분, 어떻게 할까?
          </span>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={pet2}
            alt="강아지 사진"
            className="w-[310px] h-[210px] mb-[16px] cursor-pointer"
          />
          <span className="text-[20px] font-[500] text-[#1E1E1E]">
            강아지 상하체 구분, 어떻게 할까?
          </span>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={pet3}
            alt="고양이 사진"
            className="w-[310px] h-[210px] mb-[16px] cursor-pointer"
          />
          <span className="text-[20px] font-[500] text-[#1E1E1E]">안자?</span>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default SwiperRecommend;
