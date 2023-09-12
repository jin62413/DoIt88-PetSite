import pb from '@/api/pocketbase';
import { useState } from 'react';
import { useRef } from 'react';

function CommunityNew() {
  const formRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log('click');

    const titleValue = titleRef.current.value;
    const contentValue = contentRef.current.value;
    const imageValue = imageRef.current.files;

    const formData = new FormData();

    formData.append('title', titleValue);
    formData.append('content', contentValue);
    if (imageValue.length > 0) {
      formData.append('image', imageValue[0]);
    }

    try {
      // const record = {
      //   formData,
      //   user: pb.authStore.model.id,
      // };
      console.log('ok');
      await pb.collection('community').create({
        ...formData,
        user: pb.authStore.model.id,
      });
      // navigator('/community');
    } catch (error) {
      console.error(error);
    }
  };

  const handleReset = () => {
    titleRef.current.value = '';
    contentRef.current.value = '';
    imageRef.current.value = '';
    setFileImage(null);
  };

  const [fileImage, setFileImage] = useState(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    const fileImage = { image: URL.createObjectURL(file), label: file.name };
    setFileImage(fileImage);
  };

  const [textareaValue, setTextareaValue] = useState('');

  const handleTextarea = (e) => {
    setTextareaValue(e.target.value);
  };

  return (
    <>
      <h1>글쓰기</h1>
      <form
        encType="multipart/form-data"
        className="flex flex-col"
        ref={formRef}
        onSubmit={handleRegister}
        onReset={handleReset}
      >
        <input
          type="text"
          placeholder="제목을 입력해주세요"
          name="title"
          alt="제목 입력"
          ref={titleRef}
        />
        <textarea
          name="content"
          alt="본문 입력"
          ref={contentRef}
          value={textareaValue}
          onChange={handleTextarea}
        >
          본문 입력
        </textarea>
        <input
          type="file"
          accept="*.jpg, *.png, *.webp, *.svg, *.gif"
          name="image"
          alt="이미지 첨부"
          ref={imageRef}
          onChange={handleUpload}
        />

        {fileImage && (
          <img
            key={fileImage.label}
            src={fileImage.image}
            alt={fileImage.label}
          />
        )}

        <button type="submit">등록</button>
        <button type="reset">취소</button>
      </form>
    </>
  );
}

export default CommunityNew;
