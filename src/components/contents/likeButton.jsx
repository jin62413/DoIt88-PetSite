import { useState } from 'react';

function LikeButton() {
  const [click, setClick] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label="좋아요"
        className={`${click ? 'bg-likeCheck w-8 h-8' : 'bg-like w-8 h-8'}`}
        onClick={() => {
          setClick(!click);
        }}
      ></button>
    </>
  );
}

export default LikeButton;
