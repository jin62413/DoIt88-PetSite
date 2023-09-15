// import mung from '@/assets/community/mung.svg';
import { getPbImageURL } from '@/utils';
import { Link } from 'react-router-dom';

function CommunityListContent({ item }) {
  if (item) {
    return (
      <>
        <Link to={`/community/detail/${item.id}`}>
          <div className="CommunityListContent flex gap-[28px]">
            <div className="CommunityListContentLeft py-[11px] w-[826px]">
              <h2 className="CommunityListTitle text-black text-[21px] font-[700] pb-[12px]">
                <p className="text-xl truncate">{item.title}</p>
              </h2>
              <div className="CommunityListText">{item.content}</div>
            </div>
            <div className="CommunityListContentRight py-[11px]">
              <img
                src={getPbImageURL(item, 'image')}
                alt={item.imageAlt}
                className="w-[120px] h-[120px] rounded-10"
              />
            </div>
          </div>
        </Link>
      </>
    );
  }
}

export default CommunityListContent;
