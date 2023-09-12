import { useState } from 'react';

function ImageUploader({ imageName, setImageName }) {
  const [selectedImage, setSelectedImage] = useState(null);
  // const [imageName,setImageName]=useState(null)

  
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
    setImageName(file);

    console.log(e.target);
    console.log(URL.createObjectURL(file));                   
  };

  const handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.target.click();
    }
  };

  return (
    <div className="flex gap-2 my-6">
      <p className="w-[150px] py-3 inline-block">
        <span className="font-semibold text-lg relative">
          프로필 사진
          <span className="text-[#FF483D] inline-block absolute -top-3 -right-3">
            *
          </span>
        </span>
      </p>
      {selectedImage ? (
        <img
          src={selectedImage}
          alt="Selected"
          className="h-[110px] w-[110px]"
        />
      ) : (
        <div className="h-[130px] w-[130px] bg-[#D9D9D9] rounded-md" />
      )}

      {/* type이 file인 input은 label을 커스텀 하여 접근 */}
      <label
        htmlFor="profile"
        className={`rounded-xl text-primary font-medium text-xl px-14 py-3 border-primary border h-[55px]
        ${
          selectedImage
            ? 'hover:bg-primary hover:text-white'
            : 'hover:bg-primary hover:text-white focus:bg-primary focus:text-white'
        }`}
        tabIndex={0}
        onKeyPress={handleEnterPress}
      >
        {selectedImage ? '사진 변경' : '사진 첨부'}
      </label>
      <input
        type="file"
        id="profile"
        accept="*.jpg,*.png,*.jpeg,*.webp,*.avif"
        className="hidden"
        // required
        onChange={handleImageUpload}
      />
    </div>
  );
}

export default ImageUploader;