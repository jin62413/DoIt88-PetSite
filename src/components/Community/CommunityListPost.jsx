import CommunityListContent from './CommunityListContent';
import CommunityListInfo from './CommunityListInfo';

function CommunityListPost() {
  return (
    <>
      <div className="CommunityListPost border-b-2 border-[#747474] p-[20px]">
        <CommunityListContent />
        <CommunityListInfo />
      </div>
    </>
  );
}

export default CommunityListPost;
