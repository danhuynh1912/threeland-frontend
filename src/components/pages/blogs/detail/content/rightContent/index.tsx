import Facebook from '@/svg/facebookSocial';
import Thread from '@/svg/threadSocial';
import Twister from '@/svg/twisterSocial';
import Gmail from '@/svg/gmailSvg';
import BlogItem from './blog-item';
import { ArrayBlogs } from '@/components/pages/blogs/const';

const Index = () => {
  return (
    <div className='2xl:min-w-[clamp(300px,34vw,552px)] sm:min-w-[350px]'>
      <p className='text-[32px] font-semibold pb-5'>Follow Us</p>
      <div className='flex flex-wrap gap-5 pb-10'>
        <div className='p-2 w-[72px] h-[72px] px-[17px] py-[15px] bg-[#F8F9FA] rounded-[40px] cursor-pointer'>
          <div className='bg-[#3B5998] w-[40px] h-[40px] py-[10px] px-[15px] rounded-[20px]'>
            <Facebook color='#fff' width={10} height={20} />
          </div>
        </div>
        <div className='p-2 w-[72px] h-[72px] px-[17px] py-[15px] bg-[#F8F9FA] rounded-[40px] cursor-pointer'>
          <div className='bg-[#3B5998] w-[40px] h-[40px] py-[10px] px-[11px] rounded-[20px]'>
            <Twister color='#fff' width={20} height={20} />
          </div>
        </div>
        <div className='p-2 w-[72px] h-[72px] px-[17px] py-[15px] bg-[#F8F9FA] rounded-[40px] cursor-pointer'>
          <div className='bg-[#3B5998] w-[40px] h-[40px] py-[10px] px-[13px] rounded-[20px]'>
            <Thread color='#fff' width={15} height={20} />
          </div>
        </div>
        <div className='p-2 w-[72px] h-[72px] px-[17px] py-[15px] bg-[#F8F9FA] rounded-[40px] cursor-pointer'>
          <div className='bg-[#fff] w-[40px] h-[40px] py-[10px] px-[10px] rounded-[20px]'>
            <Gmail color='#fff' width={10} height={20} />
          </div>
        </div>
      </div>
      <p className='text-[32px] font-medium pb-5'>
        Subscribe to our newsletter
      </p>
      <div className='flex my-8'>
        <input
          type='text'
          placeholder='Enter your email'
          className='h-[70px] w-full rounded-[4px] px-2 pl-9 border-[1px] border-[#CDD0D0]'
        />
      </div>
      <div
        role='button'
        className='bg-[#0066B3] h-[70px] text-[white] rounded-[4px] flex items-center justify-center'
      >
        <p className='text-[18px] tracking-[5px]'>SUBSCRIBE</p>
      </div>
      <div className=''>
        <p className='text-[32px] font-medium mt-[4rem]'>
          Most viewed articles
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 gap-4'>
          {ArrayBlogs.map(
            (item, index) =>
              index < 3 && (
                <div
                  key={item.id}
                  className={`flex 2xl:flex-row flex-col gap-4 my-7`}
                >
                  <BlogItem
                    item={item}
                    classNameAvt={`2xl:w-[276px] h-[216px] object-cover rounded-[8px]`}
                    isContent={false}
                  />
                </div>
              ),
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
