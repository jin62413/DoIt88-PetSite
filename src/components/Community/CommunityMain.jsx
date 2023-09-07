import bookmark from '@/assets/community/bookmark.svg';
import bookmarkOn from '@/assets/community/bookmarkOn.svg';
import heart from '@/assets/community/heart.svg';
import heartOn from '@/assets/community/heartOn.svg';
import share from '@/assets/community/share.svg';
import cake from '@/assets/community/cake.svg';
import yawn from '@/assets/community/yawn.svg';
import { useState } from 'react';

function CommunityMain() {
  const [bookChanged, setBookChanged] = useState(false);
  const [heartChanged, setHeartChanged] = useState(false);

  return (
    <div className="flex justify-center">
      <div className="CommunityContainer flex-col w-[988px] h-[1000px]">
        <div className="CommunityInfoWrapper flex items-center">
          <img
            className="rounded-[50%] w-[60px] h-[60px] mr-[8px] "
            src={cake}
            alt="프로필 사진"
          />
          <div className=" font-medium text-2xl text-[#5956E9]">닉네임</div>
        </div>
        <div className="CommunityTitleWrapper flex justify-between items-end pt-[24px]">
          <div className="CommunityTitle text-[#1E1E1E] text-[32px] font-[700]">
            우리 고양이 하품하는 거 볼래?
          </div>
          <div className="CommunityDate">2023.09.05</div>
        </div>
        <div className="CommunityContent pt-[24px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim iste
          voluptas culpa, veniam eius tempore facilis. Perferendis, numquam? Quo
          sapiente officia aliquid. Fugit amet commodi dolore, debitis harum
          temporibus excepturi! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Enim iste voluptas culpa, veniam eius tempore
          facilis. Perferendis, numquam? Quo sapiente officia aliquid. Fugit
          amet commodi dolore, debitis harum temporibus excepturi! Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Enim iste voluptas
          culpa, veniam eius tempore facilis. Perferendis, numquam? Quo sapiente
          officia aliquid. Fugit amet commodi dolore, debitis harum temporibus
          excepturi! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Enim iste voluptas culpa, veniam eius tempore facilis. Perferendis,
          numquam? Quo sapiente officia aliquid. Fugit amet commodi dolore,
          debitis harum temporibus excepturi! Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Enim iste voluptas culpa, veniam eius
          tempore facilis. Perferendis, numquam? Quo sapiente officia aliquid.
          Fugit amet commodi dolore, debitis harum temporibus excepturi! Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Enim iste voluptas
          culpa, veniam eius tempore facilis. Perferendis, numquam? Quo sapiente
          officia aliquid. Fugit amet commodi dolore, debitis harum temporibus
          excepturi! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Enim iste voluptas culpa, veniam eius tempore facilis. Perferendis,
          numquam? Quo sapiente officia aliquid. Fugit amet commodi dolore,
          debitis harum temporibus excepturi! Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Enim iste voluptas culpa, veniam eius
          tempore facilis.
        </div>
        <div className="CommunityImage flex justify-center pt-[22px] pb-[44px]">
          <img src={yawn} alt="커뮤니티 글 이미지" />
        </div>
        <div className="CommunityIconsWrapper flex justify-center">
          <ul className="CommunityIcons flex w-[198px] justify-between">
            <li>
              <img
                onClick={(e) => {
                  setBookChanged(!bookChanged);
                }}
                src={bookChanged ? bookmarkOn : bookmark}
                alt="북마크 아이콘"
              />
            </li>
            <li>
              <img
                onClick={(e) => {
                  setHeartChanged(!heartChanged);
                }}
                src={heartChanged ? heartOn : heart}
                alt="하트 아이콘"
              />
            </li>
            <li>
              <img src={share} alt="공유 아이콘" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CommunityMain;
