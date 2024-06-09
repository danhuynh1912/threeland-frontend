import DotSvg from '@/svg/dotSvg';
import ClockSvg from '@/svg/clockSvg';
import ShareSvg from '@/svg/shareSvg';

const Index = (props: any) => {
  const { theme, item, size } = props;
  return (
    <div className='flex gap-4 flex-wrap'>
      <div className='flex gap-1 w-max'>
        <div className='w-2 h-2 self-center'>
          <DotSvg color={theme === 'dark' ? '#ffffff' : '#6A7373'} />
        </div>
        <div className='w-6 h-6 self-center'>
          <ClockSvg color={theme === 'dark' ? '#ffffff' : '#6A7373'} />
        </div>
        <p
          className={`text-[14px] text-[${
            theme === 'dark' ? '#FFF' : '#6A7373'
          }] self-center`}
        >
          {item?.time}
        </p>
      </div>
      <div className='flex gap-2 w-max'>
        <div className='w-2 h-2 self-center'>
          <DotSvg color={theme === 'dark' ? '#ffffff' : '#6A7373'} />
        </div>
        <div className='w-15 h-15 self-center'>
          <ShareSvg color={theme === 'dark' ? '#ffffff' : '#6A7373'} />
        </div>
        <p
          className={`text-[14px] text-[${
            theme === 'dark' ? '#FFF' : '#6A7373'
          }] self-center`}
        >
          {item?.share} Share
        </p>
      </div>
    </div>
  );
};

export default Index;
