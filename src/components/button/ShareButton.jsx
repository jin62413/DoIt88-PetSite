function ShareButton(props) {
  return (
    <div className="float-right">
      <button
        type="button"
        aria-label="공유하기"
        className={'bg-share w-8 h-8 ' + `${props.className}`}
      ></button>
    </div>
  );
}

export default ShareButton;
