import { useState } from 'react';

function LikeButton() {
  const [click, setClick] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label="좋아요"
        className={`${
          click
            ? 'bg-likeCheck bg-[#E6E6E6] rounded-full w-8 h-8'
            : 'bg-like bg-[#E6E6E6] rounded-full w-8 h-8'
        }`}
        onClick={() => {
          setClick(!click);
        }}
      ></button>
    </>
  );
}

export default LikeButton;
