function CommunityListProcedure() {
  return (
    <>
      <fieldset className="CommunityListProcedure flex">
        <div className="">
          <input
            id="radio1"
            type="radio"
            name="radio"
            className="hidden"
            checked
          />
          <label htmlFor="radio1" className="flex items-center cursor-pointer">
            <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey ml-[20px]"></span>
            최신순
          </label>
        </div>

        <div className="">
          <input id="radio2" type="radio" name="radio" className="hidden" />
          <label htmlFor="radio2" className="flex items-center cursor-pointer">
            <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey ml-[20px]"></span>
            인기순
          </label>
        </div>
      </fieldset>
    </>
  );
}

export default CommunityListProcedure;
