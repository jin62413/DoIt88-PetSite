import { useState } from 'react';
import search from '@/assets/icon/search.svg';
import close from '@/assets/icon/close.svg';

function SearchForm() {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const clearInput = () => {
    setSearchText('');
  };

  return (
    <>
      <form action="/" method="post" className="searchForm relative">
        <label htmlFor="allSearch" className="sr-only">
          통합검색
        </label>
        <input
          type="search"
          name=""
          id="allSearch"
          placeholder="통합 검색"
          required
          value={searchText}
          onChange={handleInputChange}
          className="border border-[#5956E9] rounded-3xl w-[280px] pl-16 py-3 outline-none"
        />

        {searchText && (
          <button
            type="button"
            onClick={clearInput}
            className="absolute top-3.5 right-5"
          >
            <img src={close} alt="내용 초기화 버튼" className="w-5 h-5" />
          </button>
        )}

        <button type="submit">
          <img
            src={search}
            alt="검색 버튼"
            className="w-6 h-6 absolute top-3.5 left-5"
          />
        </button>
      </form>
    </>
  );
}

export default SearchForm;
