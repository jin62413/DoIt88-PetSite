import { useState } from 'react';
import KakaoShare from './share/KakaoShareButton';
import UrlShare from './share/UrlShareButton';

function ShareButton({ contentId, title }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="float-right ">
      <button
        type="button"
        aria-label="공유하기"
        className="bg-share w-8 h-8 bg-no-repeat mb-4"
        onClick={toggleModal}
      ></button>
      {showModal ? (
        <div className="absolute w-44 h-20 bg-primaryContainer arrow-up rounded-10">
          <div className="flex gap-7 justify-center align-middle py-3">
            <UrlShare />
            <KakaoShare id={contentId} title={title} />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ShareButton;
