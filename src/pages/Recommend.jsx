import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

function Recommend() {
  const [setSwiperRef] = useState(null);

  return (
    <>
      <div className="w-[1038px] bg-white mx-[441px] py-[40px]">
        <h2 className="text-center text-[28px] font-[700] mb-[38px] text-[#1E1E1E]">추천 콘텐츠</h2>

        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          spaceBetween={53}
          pagination={{
            type: 'fraction',
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="../public/recommend/pet1.svg"
              alt="강아지 사진"
              className="w-[310px] h-[210px] mb-[16px] cursor-pointer"
            />
            <span className="text-[20px] font-[500] text-[#1E1E1E]">강아지 상하체 구분, 어떻게 할까?</span>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="../public/recommend/pet2.svg"
              alt="강아지 사진"
              className="w-[310px] h-[210px] mb-[16px] cursor-pointer"
            />
            <span className="text-[20px] font-[500] text-[#1E1E1E]">올바르게 강아지 안는법</span>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="../public/recommend/pet3.svg"
              alt="고양이 사진"
              className="w-[310px] h-[210px] mb-[16px] cursor-pointer"
            />
            <span className="text-[20px] font-[500] text-[#1E1E1E]">안자?</span>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="../public/recommend/pet1.svg"
              alt="강아지 사진"
              className="w-[310px] h-[210px] mb-[16px] cursor-pointer"
            />
            <span className="text-[20px] font-[500] text-[#1E1E1E]">강아지 상하체 구분, 어떻게 할까?</span>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="../public/recommend/pet2.svg"
              alt="강아지 사진"
              className="w-[310px] h-[210px] mb-[16px] cursor-pointer"
            />
            <span className="text-[20px] font-[500] text-[#1E1E1E]">강아지 상하체 구분, 어떻게 할까?</span>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="../public/recommend/pet3.svg"
              alt="고양이 사진"
              className="w-[310px] h-[210px] mb-[16px] cursor-pointer"
            />
            <span className="text-[20px] font-[500] text-[#1E1E1E]">안자?</span>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex justify-center cursor-pointer">
        <img src="../public/recommend/eventBanner.png" alt="이벤트 배너" className=" w-[700px] my-[40px]" />
      </div>
    </>
  );
}

export default Recommend;
