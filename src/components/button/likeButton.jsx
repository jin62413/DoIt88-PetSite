import { useState } from 'react';

function LikeButton(props) {
  const [click, setClick] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label="북마크"
        className={
          click
            ? 'bg-likeCheck ' + `${props.className}`
            : 'bg-like ' + `${props.className}`
        }
        onClick={() => {
          setClick(!click);
        }}
      ></button>
    </>
  );
}

export default LikeButton;
