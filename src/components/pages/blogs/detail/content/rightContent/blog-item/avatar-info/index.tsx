import Image from 'next/image';

const AvatarInfo = (props: any) => {
  const { image, theme, name } = props;
  return (
    <div className='flex'>
      <Image
        src={image}
        alt='see-more'
        className='object-cover w-[40px] rounded-[20px]'
      />
      <p
        className={`self-center text-[${
          theme === 'dark' ? '#FFF' : '#6A7373'
        }] px-4`}
      >
        By: {name}
      </p>
    </div>
  );
};

export default AvatarInfo;
