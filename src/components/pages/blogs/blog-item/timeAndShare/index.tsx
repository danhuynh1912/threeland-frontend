import DotSvg from '@/svg/dotSvg';
import ClockSvg from '@/svg/clockSvg';
import ShareSvg from '@/svg/shareSvg';

const Index = (props: any) => {
  const { theme, item, size } = props;
  return (
    <div className='flex'>
      <div className='w-2 h-2 self-center'>
        <DotSvg color={theme === 'dark' ? '#ffffff' : '#6A7373'} />
      </div>
      <div className='w-6 h-6 mx-2 self-center'>
        <ClockSvg color={theme === 'dark' ? '#ffffff' : '#6A7373'} />
      </div>
      <p
        className={`text-[${
          theme === 'dark' ? '#FFF' : '#6A7373'
        }] self-center`}
      >
        {item?.time}
      </p>
      <div className='mx-5 w-2 h-2 self-center'>
        <DotSvg color={theme === 'dark' ? '#ffffff' : '#6A7373'} />
      </div>
      <div className='w-15 h-15 self-center'>
        <ShareSvg color={theme === 'dark' ? '#ffffff' : '#6A7373'} />
      </div>
      <p
        className={`mx-5 text-[${
          theme === 'dark' ? '#FFF' : '#6A7373'
        }] self-center`}
      >
        {item?.share} Share
      </p>
    </div>
  );
};

export default Index;
