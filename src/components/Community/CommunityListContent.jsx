import mung from '@/assets/community/mung.svg';

function CommunityListContent() {
  return (
    <>
      <div className="CommunityListContent flex gap-[28px]">
        <div className="CommunityListContentLeft py-[11px] w-[826px]">
          <h2 className="CommunityListTitle text-black text-[21px] font-[700] pb-[12px]">
            이것은 제목입니다. 제목은 길이제한vs크기제한+말줄임?
          </h2>
          <div className="CommunityListText">
            본문 내용입니다만 몇 줄까지 넣어야 할까요 제 생각엔 2줄까지가 적당한
            것 같습니다 본문본문본문본문본문본문본문본문본문본문
            본문내용입니다만 몇 줄까지 넣어야 할까요 제 생각엔 2줄까지가 적당한
            것같습니다
            본문본문본문본문본문본문본문본문본문말줄임와랄라라라라라라라라라라..
          </div>
        </div>
        <div className="CommunityListContentRight py-[11px]">
          <img src={mung} alt="강아지 사진" className="w-[120px] h-[120px " />
        </div>
      </div>
    </>
  );
}

export default CommunityListContent;
