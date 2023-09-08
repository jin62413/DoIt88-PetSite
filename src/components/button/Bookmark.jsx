import { useState } from 'react';

function BookMark() {
  const [click, setClick] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label="북마크"
        className={`${
          click ? 'bg-bookmarkCheck w-8 h-8' : 'bg-bookmark w-8 h-8'
        }`}
        onClick={() => {
          setClick(!click);
        }}
      ></button>
    </>
  );
}

export default BookMark;
