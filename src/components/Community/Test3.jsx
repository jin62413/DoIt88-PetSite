import useRegister from '@/store/registerStore';
import pb from '@/api/pocketbase';

function Test3() {
  const { nickname } = useRegister();

  const handleNicknameDataValid = async (e) => {
    e.preventDefault();
    try {
      const records = await pb.collection('users').getFullList({
        filter: `(nickname='${nickname}')`,
      });
      // console.log(records);
    } catch (error) {
      console.log('오류', error.response);
    }
  };

  handleNicknameDataValid();

  return (
    <>
      <div>{nickname}</div>
    </>
  );
}

export default Test3;
