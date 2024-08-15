import Image from 'next/image';

const Title = () => {
  return (
    <div className='bg-bg-PC bg-cover h-screen flex flex-col justify-center items-center text-white'>
      <Image
        src='https://www.technoproholdings.com/en/group/img/img_logo01.png'
        width={400}
        height={400}
        alt='logo'
        priority={true}
        className='shadow-2xl'
      />
      <h1 className='text-5xl font-bold my-3 shadow-lg'>ジョン　ホーン</h1>
      <h2 className='text-3xl font-bold shadow-lg'>Presentation</h2>
    </div>
  );
};
export default Title;
