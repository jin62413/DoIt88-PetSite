import { getPbImageURL } from '@/utils';

function BannerItem({ item }) {
  return (
    <li>
      <figure className="">
        <img
          src={getPbImageURL(item, 'image')}
          className="w-full h-full relative"
          alt=""
        />
        {/* <div className=" w-[1120px] h-full mx-auto"> */}
        {/* <div className="absolute w-[1120px] h-full z-10 top-0 left-1/2 -translate-x-1/2">
            <div className="absolute w-full z-10 top-[314px]">
              <button
                type="button"
                className="bg-primary hover:bg-[#E2DFFF] px-[42px] py-4 rounded-10 text-white"
              >
                상세보기
              </button>
            </div>
          </div> */}
        <button
          type="button"
          className="bg-primary hover:bg-[#E2DFFF] px-[42px] py-4 rounded-10 text-white absolute top-[60%] left-[365px]"
        >
          상세보기
        </button>
        <figcaption></figcaption>
      </figure>
    </li>
  );
}

export default BannerItem;
