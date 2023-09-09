import BirthDate from '@/components/signUp/BirthDate';
import { useNavigate } from 'react-router-dom';
import pb from '@/api/pocketbase';
import debounce from '@/utils/debounce';
import { useState } from 'react';
import AgreementCheckbox from '@/components/signUp/AgreementCheckbox';
import ImageUploader from '@/components/signUp/ImageUploader';
import FormInput from '@/components/signUp/FormInput';

function SignUP() {
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    name: '',
    password: '',
    passwordConfirm: '',
    nickname: '',
    bitdate: '',
    profile: '',
  });

  const handleRegister = async (e) => {
    e.preventDefault();

    const { password, passwordConfirm } = formState;

    if (password !== passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다. 다시 확인해보세요.');
      return;
    }

    // PocketBase SDK 인증 요청
    await pb.collection('users').create({
      ...formState,
      emailVisibility: true,
    });

    navigate('signIn');
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleDebounceInput = debounce(handleInput, 500);

  return (
    <div className=" mx-auto max-w-[750px] flex-col py-7">
      <h2 className="text-center font-semibold  text-4xl my-7">회원가입</h2>
      <p className="text-[#686868] text-right my-5">
        <span className="text-[#FF483D]">*</span>는 필수 입력 항목입니다.
      </p>
      <form >
        <div className="border-y-2 flex-col border-black items-center gap-10">
          <FormInput label='아이디' isNecessary='true' id='id' placeholder='아이디를 입력해주세요' isBtn='true' />
          <FormInput label='비밀번호' isNecessary='true' id='pwd' placeholder='비밀번호를 입력해주세요'/>
          <FormInput label='비밀번호 확인' isNecessary='true' id='checkPWD' placeholder='비밀번호를 한 번 더 입력해주세요'/>
          <FormInput label='닉네임' isNecessary='true' id='nickname' placeholder='닉네임을 입력해주세요' isBtn='true' />
          {/* <div className="my-6 flex flex-row justify-between items-center">
            <label htmlFor="id" className="w-[150px] py-3 inline-block">
              <span className="font-semibold text-lg relative">
                아이디
                <span className="text-[#FF483D] inline-block absolute -top-3 -right-3">
                  *
                </span>
              </span>
            </label>
            <input
              type="text"
              id="id"
              placeholder="아이디를 입력해주세요"
              className="border w-[400px] py-3 outline-none pl-4 border-[#A6A6A6] rounded-lg text-lg text-black focus:border focus:border-primary"
            />
            <button
              type="button"
              className="rounded-xl  text-primary font-medium text-xl px-14 py-3 border-primary border"
            >
              중복확인
            </button>
          </div> */}
          {/* <div className="my-6 flex flex-row justify-start gap-2 items-center">
            <label htmlFor="pwd" className="w-[150px] py-3 inline-block">
              <span className="font-semibold text-lg relative">
                비밀번호
                <span className="text-[#FF483D] inline-block absolute -top-3 -right-3">
                  *
                </span>
              </span>
            </label>
            <input
              type="text"
              id="pwd"
              placeholder="비밀번호를 입력해주세요"
              className="border w-[400px] py-3 outline-none pl-4 border-[#A6A6A6] rounded-lg text-lg text-black focus:border focus:border-primary"
            />
          </div> */}
          {/* <div className="my-6 flex flex-row justify-start gap-2 items-center">
            <label htmlFor="checkPWD" className="w-[150px] py-3 inline-block">
              <span className="font-semibold text-lg relative">
                비밀번호 확인
                <span className="text-[#FF483D] inline-block absolute -top-3 -right-3">
                  *
                </span>
              </span>
            </label>
            <input
              type="text"
              id="checkPWD"
              placeholder="비밀번호를 한 번 더 입력해주세요"
              className="border w-[400px] py-3 outline-none pl-4 border-[#A6A6A6] rounded-lg text-lg text-black focus:border focus:border-primary"
            />
          </div> */}
          {/* <div className="my-6 flex flex-row justify-between items-center">
            <label htmlFor="nickname" className="w-[150px] py-3 inline-block">
              <span className="font-semibold text-lg relative">
                닉네임
                <span className="text-[#FF483D] inline-block absolute -top-3 -right-3">
                  *
                </span>
              </span>
            </label>
            <input
              type="text"
              id="nickname"
              placeholder="닉네임을 입력해주세요"
              className="border w-[400px] py-3 outline-none pl-4 border-[#A6A6A6] rounded-lg text-lg text-black focus:border focus:border-primary"
            />
            <button
              type="button"
              className="rounded-xl  text-primary font-medium text-xl px-14 py-3 border-primary border"
            >
              중복확인
            </button>
          </div> */}
          <ImageUploader />

          <BirthDate />
        </div>

        <AgreementCheckbox />

        <button
          type="submit"
          className="w-[340px] h-[50px] bg-[#E2DFFF] text-white font-medium rounded-xl text-lg"
        >
          가입하기
        </button>
      </form>
    </div>
  );
}

export default SignUP;
