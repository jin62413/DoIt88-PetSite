import BirthDate from '@/components/signUp/BirthDate';
import { useNavigate } from 'react-router-dom';
import pb from '@/api/pocketbase';
import debounce from '@/utils/debounce';
import { useState, useRef } from 'react';
import AgreementCheckbox from '@/components/signUp/AgreementCheckbox';
import ImageUploader from '@/components/signUp/ImageUploader';
import FormInput from '@/components/signUp/FormInput';

// import useImageStore from '@/store/imageStore';
// import useAuthStore from '@/store/auth';
// import BirthDate2 from '@/components/signUp/BirthDate2';

function SignUP() {
  // const navigate = useNavigate();

  // const isAuth = useAuthStore((state) => state.isAuth);
  // const signIn = useAuthStore((state) => state.signIn);

  // const handleSignIn = async (e) => {
  //   e.preventDefault();

  //   sign;
  //   const { email, password } = formState;

  //   try {
  //     await signIn(email, password);
  //     // ...
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const data = {

  //   password: '12345678',
  //   passwordConfirm: '12345678',
  //   userID: 'test11111111111',
  //   userPWD: 'test10',
  //   nickname: 'test10',
  //   birthDate: '2022-01-01',
  // };

  const [formState, setFormState] = useState({
    userID: '',
    password: '',
    passwordConfirm: '',
    nickname: '',
    // birthDate: '',
    profile: [],
  });

  const [imageName, setImageName] = useState(null);
  // const imageState = useImageStore();

  const formData = new FormData();

  const handleRegister = async (e) => {
    e.preventDefault();

    // const { password, passwordConfirm } = formState;
    const { userID, nickname, password, passwordConfirm } = formState;

    if (password !== passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다. 다시 확인해보세요.');
      return;
    }

    // PocketBase SDK 인증 요청

    // await pb.collection('users').create({
    //   ...formState,
    // });
    try {
      console.log(imageName);
      // await pb.collection('users').create(formState);

      // formData.append('password', password);
      // formData.append('passwordConfirm', passwordConfirm);
      formData.append('profile', imageName);

      console.log(formData);
      console.log(formState);

      // await pb.collection('users').create();
      await pb.collection('users').create({ ...formState });
      await pb.collection('users').update(formData);

      // console.log(formState);
    } catch (error) {
      console.log('오류', error.response);
    }

    // navigate('signIn');
  };

  const handleInput = (e) => {
    const { id, value } = e.target;
    setFormState({
      ...formState,
      [id]: value,
    });
  };

  const [fileImages, setFileImages] = useState([]);

  const handleUpload = (e) => {
    const { files } = e.target;
    const fileImages = Array.from(files).map((file) => ({
      image: URL.createObjectURL(file),
      // label: file.name,
    }));
    setFileImages(fileImages);

    console.log(fileImages);
  };

  const handleDebounceInput = debounce(handleInput, 500);

  return (
    <div className=" mx-auto max-w-[750px] flex-col py-7">
      <h2 className="text-center font-semibold  text-4xl my-7">회원가입</h2>
      <p className="text-[#686868] text-right my-5">
        <span className="text-[#FF483D]">*</span>는 필수 입력 항목입니다.
      </p>
      <form className="flex-col" onSubmit={handleRegister}>
        <div className="border-y-2 flex-col border-black items-center gap-10">
          <FormInput
            label="아이디"
            isNecessary="true"
            id="userID"
            placeholder="아이디를 입력해주세요"
            isBtn="true"
            defaultValue={formState.userID}
            onChange={handleDebounceInput}
          />
          <FormInput
            label="비밀번호"
            type="password"
            isNecessary="true"
            id="password"
            placeholder="비밀번호를 입력해주세요"
            // defaultValue={formState.password}
            onChange={handleDebounceInput}
          />
          <FormInput
            label="비밀번호 확인"
            type="password"
            isNecessary="true"
            id="passwordConfirm"
            placeholder="비밀번호를 한 번 더 입력해주세요"
            // defaultValue={formState.passwordConfirm}
            onChange={handleDebounceInput}
          />
          <FormInput
            label="닉네임"
            isNecessary="true"
            id="nickname"
            placeholder="닉네임을 입력해주세요"
            isBtn="true"
            defaultValue={formState.nickname}
            onChange={handleDebounceInput}
          />

          <ImageUploader
            // defaultValue={formState.profile}
            imageName={imageName}
            setImageName={setImageName}
            onChange={handleUpload}
          />

          {/* <BirthDate defaultValue={formState.birthDate} onChange={handleDate} /> */}
          {/* <BirthDate2/> */}
        </div>

        {/* <AgreementCheckbox /> */}

        <button
          type="submit"
          className="w-[340px] h-[50px] bg-[#E2DFFF] text-white font-medium rounded-xl text-lg block mt-14 mx-auto"
        >
          가입하기
        </button>
      </form>
    </div>
  );
}

export default SignUP;
