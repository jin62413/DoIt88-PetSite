function FormInput({
  type = 'text',
  label,
  isNecessary = false,
  id,
  placeholder,
  isBtn = false,
  ...restProps
}) {
  return (
    <>
      <div
        className={`${
          isBtn
            ? 'my-6 flex flex-row justify-between items-center'
            : 'my-6 flex flex-row justify-start gap-2 items-center'
        }`}
      >
        <label htmlFor={id} className="w-[150px] py-3 inline-block">
          <span className="font-semibold text-lg relative">
            {label}
            {isNecessary ? (
              <span className="text-[#FF483D] inline-block absolute -top-3 -right-3">
                *
              </span>
            ) : (
              ''
            )}
          </span>
        </label>
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className="border w-[400px] py-3 outline-none pl-4 border-[#A6A6A6] rounded-lg text-lg text-black focus:border focus:border-primary"
          {...(isNecessary && { required: true })}
          {...restProps}
        />
        {isBtn ? (
          <button
            type="button"
            className="rounded-xl  text-primary font-medium text-xl px-14 py-3 border-primary border"
          >
            중복확인
          </button>
        ) : (
          ''
        )}
      </div>
    </>
  );
}

export default FormInput;
