import banner from '@/assets/banner/banner@1920w.png';

function Event() {
  return (
    <div className="flex flex-col m-auto items-center gap-11 my-10">
      <h2 className="text-black text-[28px] font-bold">이벤트</h2>
      <div className="flex flex-col gap-10">
        <figure>
          <img src={banner} alt="" className="w-[984px]" />
        </figure>
      </div>
    </div>
  );
}

export default Event;
