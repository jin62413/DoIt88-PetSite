import { useEffect } from 'react';
import uncheckedImage from '@/assets/icon/checkFalse.svg'; // 체크되지 않은 상태의 이미지
import checkedImage from '@/assets/icon/checkTrue.svg'; // 체크된 상태의 이미지
import arrow from '@/assets/icon/arrow.svg';
import useAgreement from '@/store/agreementStore';
import { AnimatePresence, motion } from 'framer-motion';
import Dialog from './Dialog';
import { useState, useRef } from 'react';
import Modal from './Modal';

const AgreementCheckbox = () => {
  const agreementContents = {
    service: 'Geppetto 서비스 이용약관',
    privacy: 'Geppetto 개인정보 보호 정책',
    marketing: 'Geppetto 마케팅 정책',
    serviceContents: `
    
    <span>환영합니다! Geppetto(이하 "서비스")를 이용해 주셔서 감사합니다. </span>
    <span>아래의 약관은 Geppetto와 사용자 사이의 권리와 의무를 규정합니다. </span>
    <span>본 약관에 동의하지 않는 경우, 해당 서비스를 사용할 수 없습니다.</span>

    정의
    1.1 "Geppetto"는 본 웹 어플리케이션을 운영하는 회사를 가리킵니다.
    1.2 "사용자"란 본 서비스에 접속하여 제공되는 기능과 콘텐츠를 활용하는 개인 또는 단체를 말합니다.

    계정 생성 및 보안
    2.1 사용자가 본 서비스를 이용하기 위해서는 계정 생성 과정을 거치셔야 합니다.
    2.2 계정 정보(아이디, 비밀번호 등)는 사용자 개인에게 책임이 있으며, 타인과 공유하거나 대여할 수 없습니다.
    2.3 계정 정보 유출로 인한 피해나 손실에 대해서 Geppetto는 책임지지 않습니다.

    서비스 이용
    3.1 사용자는 본 서비스를 법률과 관련 규정을 준수하여 이용해야 합니다.
    3.2 Geppetto가 제공하는 기능과 콘텐츠에 대한 지적 재산권은 Geppetto에게 속합니다.
    3.3 사용자가 제공하는 콘텐츠에 대한 저작권 및 지적 재산권은 해당 사용자에게 속합니다.

    개인 정보 보호
    4-1 Geppetto는 사용자 개인 정보 보호를 위해 최선을 다할 것입니다.
    4-2 정확한 개인 정보 제공은 정확한 데이터 처리와 관련된 문제들에서 중요한 역할을 합니다.
   `,

    privacyContents: `
    
    <h1>Geppetto 개인정보 보호 정책</h1>
      <p>
        본 개인정보 보호 정책은 Geppetto 웹 어플리케이션(이하 "Geppetto", "저희", "우리")에서 수집하는 정보와 해당 정보를 처리하는 방법에 대해 설명합니다. Geppetto를 사용함으로서 사용자가 본 개인정보 보호 정책에 동의한 것으로 간주됩니다.
      </p>

      <h2>수집하는 정보</h2>
      <p>
        Geppetto는 사용자가 서비스를 이용할 때 일부 개인 식별 정보를 수집할 수 있습니다. 이러한 정보는 다음과 같을 수 있습니다:
      </p>
      <ul>
        <li>이름, 전자메일 주소, 연락처 등과 같은 개인 식별 정보</li>
        <li>기기 및 브라우저 정보</li>
        <li>서비스 이용 기록, 로그 데이터 등</li>
      </ul>

      <h2>정보의 사용 목적</h2>
      <p>
        Geppetto는 다음과 같은 목적으로 사용자의 개인정보를 처리합니다:
      </p>
      <ul>
        <li>서비스 제공 및 운영</li>
        <li>계정 관리와 인증</li>
        <li>고객 지원 및 문의 응답</li>
        <li>서비스 향상을 위한 분석 및 통계 자료 작성</li>
        <li>법적 의무 준수/li>
     </ul>`,
    marketingContents: `
    
    본 마케팅 정책은 Geppetto 웹 어플리케이션(이하 "Geppetto", "저희", "우리")에서 수집한 정보를 활용하여 진행하는 마케팅 활동에 대해 설명합니다. Geppetto를 사용함으로서 사용자가 본 마케팅 정책에 동의한 것으로 간주됩니다.

수집한 정보 활용
Geppetto는 사용자로부터 수집한 정보를 다음과 같은 목적으로 마케팅 활동에 활용할 수 있습니다:

개인 맞춤형 서비스 제공
새로운 기능, 업데이트, 프로모션 등의 안내 및 소식 전달
설문조사나 피드백 요청을 통한 서비스 개선 및 고객 만족도 측정
관련된 제품 또는 서비스의 소개와 추천
정보 공유와 제3자 협력
Geppetto는 사용자의 개인정보를 제3자와 공유하지 않으며, 법적 규제나 요구 사항 없이 별도로 동의하지 않는 한 판매, 임대 또는 교환하지 않습니다. 그러나 Geppetto가 외부 파트너 또는 업체와 협력하여 마케팅 활동을 진행하는 경우 일부 정보가 필요할 수 있습니다. 이 경우 해당 파트너 또는 업체와 데이터 처리 계약을 체결하고 안전한 방법으로 개인정보를 공유하며, 이들은 본 정책을 준수해야 합니다.

쿠키(Cookies)와 추적 기능
Geppetto 웹 어플리케이션은 쿠키 등 추적 기능을 사용하여 사용자 경험 개선과 타겟된 광고 전달 등 다양한 목적으로 활용할 수 있습니다. 이러한 기능은 사용자에게 맞춤형 컨텐츠 및 광고를 제공하기 위해 필요합니다. 사용자는 자신의 브라우저 설정에서 쿠키 관리 옵션을 선택할 수 있으며, 필요에 따라 거부하거나 경고 메시지 설정도 가능합니다.

보안 조치
Geppetto는 합리적인 보안 조치를 취하여 사용자의 개인정보를 안전하게 유지하기 위해 최선을 다하고 있습니다. 그러나 인터넷 전송 및 전자 저장 시스템은 완전한 보안을 보장할 수 없으므로 절대적으로 안전하다고 할 수 없습니다.

선택 사항과 동의 철회`,
  };

  const {
    selectAllCheck,
    serviceAgreementCheck,
    privacyPolicyCheck,
    ageVerificationCheck,
    marketingAgreementCheck,
    setSelectAllCheck,
    setServiceAgreementCheck,
    setPrivacyPolicyCheck,
    setAgeVerificationCheck,
    setMarketingAgreementCheck,
  } = useAgreement();

  //모달
  const opennerRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    opennerRef.current.focus();
  };

  // 전체 동의 체크박스를 눌렀을 때 다른 모든 체크박스도 체크 상태로 변경
  const handleSelectAllChange = () => {
    let newValue = !selectAllCheck;
    setSelectAllCheck(newValue);
    setServiceAgreementCheck(newValue);
    setPrivacyPolicyCheck(newValue);
    setAgeVerificationCheck(newValue);
    setMarketingAgreementCheck(newValue);
    // 마케팅 정보 수신 동의는 선택사항이므로 자동으로 체크되지 않음
  };

  // 개별 항목 중 하나라도 체크가 해제되면 전체 동의도 해제
  useEffect(() => {
    if (
      serviceAgreementCheck &&
      privacyPolicyCheck &&
      ageVerificationCheck &&
      marketingAgreementCheck
    ) {
      setSelectAllCheck(true);
    } else {
      setSelectAllCheck(false);
    }
  }, [
    serviceAgreementCheck,
    privacyPolicyCheck,
    ageVerificationCheck,
    marketingAgreementCheck,
    setSelectAllCheck,
  ]);

  return (
    <div className="flex relative">
      <p className="w-[150px] py-3 inline-block">
        <span className="font-semibold text-lg relative">
          이용약관 동의
          <span className="text-[#FF483D] inline-block absolute -top-3 -right-3">
            *
          </span>
        </span>
      </p>

      <div className="flex-col ml-2 ">
        <div className="relative my-5">
          <img
            src={selectAllCheck ? checkedImage : uncheckedImage}
            alt="checkbox"
            onClick={() => {
              handleSelectAllChange();
            }}
            className="inline-block absolute top-1"
          />
          <input
            id="allCheck"
            type="checkbox"
            checked={selectAllCheck}
            onChange={handleSelectAllChange}
            className="hidden"
          />
          <label
            htmlFor="allCheck"
            className="text-2xl font-medium inline-block ml-8"
          >
            전체 동의합니다.
          </label>
        </div>

        {/* 선택사항인 이용약관 동의 체크박스 */}

        {/* 서비스 이용약관 동의 */}
        <div className="flex justify-between w-[500px]  my-7 ml-3">
          <div className="flex items-center relative">
            <img
              src={serviceAgreementCheck ? checkedImage : uncheckedImage}
              alt="체크버튼"
              onClick={() => setServiceAgreementCheck(!serviceAgreementCheck)}
              className="inline-block absolute top-0.5"
              // className="inline-block absolute top-0.5"
            />
            <label
              htmlFor="serviceCheck"
              className="text-xl font-medium inline-block ml-8"
            >
              서비스 이용약관 동의
            </label>
            <input
              type="checkbox"
              id="serviceCheck"
              onChange={() => {
                setServiceAgreementCheck(!serviceAgreementCheck);
              }}
              className="hidden"
            />
          </div>

          <Modal
            headline={agreementContents.service}
            contents={agreementContents.serviceContents}
          />
        </div>

        {/* 개인정보 수집 및 이용동의 */}
        <div className="flex justify-between w-[500px] relative my-7 ml-3">
          <div>
            <img
              src={privacyPolicyCheck ? checkedImage : uncheckedImage}
              alt="체크버튼"
              onClick={() => setPrivacyPolicyCheck(!privacyPolicyCheck)}
              className="inline-block absolute top-0.5"
            />
            <label
              htmlFor="privacyCheck"
              className="text-xl font-medium inline-block ml-8"
            >
              개인정보 수집 및 이용 동의
            </label>
            <input
              type="checkbox"
              id="privacyCheck"
              onChange={() => setPrivacyPolicyCheck(!privacyPolicyCheck)}
              className="hidden"
            />
          </div>

          <Modal
            headline={agreementContents.privacy}
            contents={agreementContents.privacyContents}
          />
        </div>

        {/* 만 14세 이상 확인 */}
        <div className="flex justify-between w-[500px] relative my-7 ml-3">
          <div>
            <img
              src={ageVerificationCheck ? checkedImage : uncheckedImage}
              alt="체크버튼"
              onClick={() => setAgeVerificationCheck(!ageVerificationCheck)}
              className="inline-block absolute top-0.5"
            />
            <label
              htmlFor="ageCheck"
              className="text-xl font-medium inline-block ml-8"
            >
              만 14세 이상입니다.
            </label>
            <input
              type="checkbox"
              id="ageCheck"
              onChange={() => setAgeVerificationCheck(!ageVerificationCheck)}
              className="hidden"
            />
          </div>
        </div>

        {/* 마케팅 정보 수신 동의 */}
        <div className="flex justify-between w-[500px] relative my-7 ml-3">
          <div>
            <img
              src={marketingAgreementCheck ? checkedImage : uncheckedImage}
              alt="체크버튼"
              onClick={() =>
                setMarketingAgreementCheck(!marketingAgreementCheck)
              }
              className="inline-block absolute top-0.5"
            />
            <label
              htmlFor="marketingCheck"
              className="text-xl font-medium inline-block ml-8"
            >
              (선택) 마케팅 정보 수신 동의
            </label>
            <input
              type="checkbox"
              id="marketingCheck"
              // checked={marketingAgreementCheck}
              onChange={() =>
                setMarketingAgreementCheck(!marketingAgreementCheck)
              }
              className="hidden"
            />
          </div>

          <Modal headline={agreementContents.marketing} contents={agreementContents.marketingContents} />
        </div>
      </div>
    </div>
  );
};

export default AgreementCheckbox;
