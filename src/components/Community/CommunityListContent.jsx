import { getPbImageURL } from '@/utils';
import { Link } from 'react-router-dom';

function CommunityListContent({ item }) {
  if (item) {
    return (
      <>
        <Link to={`/community/detail/${item.id}`}>
          <div className="flex gap-[28px]">
            <div className="py-[11px] w-[826px]">
              <h2 className="text-black text-[21px] font-[700] pb-[12px]">
                <p className="text-xl truncate">{item.title}</p>
              </h2>
              <div className="CommunityListText">{item.content}</div>
            </div>
            <div className="py-[11px]">
              <img
                src={getPbImageURL(item, 'image')}
                alt="첨부 이미지"
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
