function SignUP() {
  return (
    <div className="mx-[500px]">
      <h2 className="text-center font-semibold  text-[40px] my-7">회원가입</h2>
      <p className="text-[#686868] text-right my-5">
        <span className="text-[#FF483D]">*</span>는 필수 입력 항목입니다.
      </p>
      <form
        action="/"
        method="post"
        className="border-t-2 h-72 flex border-black"
      >
        <div className="my-6 flex-row">
          <label htmlFor="id" className="w-[240px]">
            아이디
          </label>
          <input
            type="text"
            id="id"
            placeholder="아이디를 입력해주세요"
            className="border w-[400px] py-3 outline-none pl-4 border-[#A6A6A6] rounded-lg text-lg text-[#E6E6E6]"
          />
          <button type="button"></button>
        </div>
      </form>
    </div>
  );
}

export default SignUP;
