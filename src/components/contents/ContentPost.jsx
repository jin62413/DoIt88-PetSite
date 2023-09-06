function ContentPost() {
  return (
    <>
      <a href="">
        <figure className="flex flex-col gap-4 max-w-[310px]">
          <img
            src="/src/assets/images/dog.jpg"
            alt=""
            className="borderRadius"
          />
          <figcaption className="text-xl truncate">
            강아지 상하체 구분, 어떻게 할까?
          </figcaption>
        </figure>
      </a>
    </>
  );
}

export default ContentPost;
