import useFetchData from '@/hooks/useFetchData';
import { getPbImageURL } from '@/utils';
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function MainBanner() {
  const PB_PRODUCTS_ENDPOINT = `
  https://geppetto.pockethost.io/api/collections/bannerImage/records
  `;

  const { data, error } = useFetchData(PB_PRODUCTS_ENDPOINT);

  if (error) {
    return (
      <div role="alert">
        <h2>{error.type}</h2>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div className="">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Scrollbar]}
        loop={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        slidesPerView={1}
        navigation
        scrollbar={{ draggable: true, el: null }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
        className="flex justify-center items-center "
      >
        {data.items?.map((item) => (
          <SwiperSlide className="" key={item.id}>
            <div className="w-full h-[500px]">
              <figure className="relative">
                <img
                  src={getPbImageURL(item, 'image')}
                  className="w-full"
                  alt={item.title}
                />
                <figcaption className="">
                  {/* <div className="w-[1120px] max-w-xl mx-auto">
                    <p className="text-4xl">지금은 내친구</p>
                    <p className="text-4xl">자랑하는 시간</p>
                    <Link
                      type="button"
                      className="bg-primary hover:bg-[#E2DFFF] w-10 h-4 rounded-10 text-white"
                    >
                      상세보기
                    </Link>
                  </div> */}
                  <div className="w-1/3 max-w-xl absolute top-0 left-1/4">
                    <p className="text-4xl">지금은 내친구</p>
                    <p className="text-4xl">자랑하는 시간</p>
                    <Link
                      type="button"
                      className="bg-primary hover:bg-[#E2DFFF] w-10 h-4 rounded-10 text-white"
                    >
                      상세보기
                    </Link>
                  </div>
                </figcaption>
                {/* <div className="absolute top-0 left-1/2 -translate-x-1/2">
                  dlsldldldl
                </div> */}
              </figure>
            </div>

            <div>test</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MainBanner;

{
  /*return (
  <div className="relative">
    <Swiper
      // install Swiper modules
      modules={[Navigation, Scrollbar]}
      loop={true}
          // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
      slidesPerView={1}
      navigation
      scrollbar={{ draggable: true, el: null }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
      className="flex justify-center items-center"
    >
      {data.items?.map((item) => (
        <SwiperSlide className="" key={item.id}>
          <figure className="">
            <img
              src={getPbImageURL(item, 'image')}
              className="w-full h-full relative"
              alt={item.title}
            />
            <button
              type="button"
              className="bg-primary hover:bg-[#E2DFFF] px-[42px] py-4 rounded-10 text-white absolute top-[60%] left-[365px]"
            >
              상세보기
            </button>
            <figcaption></figcaption>
          </figure>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);
*/
}

/* -------------------------------------------------------------------------- */
{
  /* <ul className="h-[500px] flex justify-center">
          {data.items?.map((item) => (
            <BannerItem key={item.id} item={item} />
          ))}
        </ul> */
}
{
  /* <button className="swiper-prev">이전</button>
      <button className="swiper-next">다음</button> */
}

{
  /* <div className=" w-[1120px] h-full mx-auto"> */
}
{
  /* <div className="absolute w-[1120px] h-full z-10 top-0 left-1/2 -translate-x-1/2">
        <div className="absolute w-full z-10 top-[314px]">
          <button
            type="button"
            className="bg-primary hover:bg-[#E2DFFF] px-[42px] py-4 rounded-10 text-white"
          >
            상세보기
          </button>
        </div>
      </div> */
}
