import { useState } from 'react';

function BookMark() {
  const [click, setClick] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label="북마크"
        className={`${
          click
            ? 'bg-bookmarkCheck bg-[#E6E6E6] rounded-full w-8 h-8'
            : 'bg-bookmark bg-[#E6E6E6] rounded-full w-8 h-8 '
        }`}
        onClick={() => {
          setClick(!click);
        }}
      ></button>
    </>
  );
}

export default BookMark;
