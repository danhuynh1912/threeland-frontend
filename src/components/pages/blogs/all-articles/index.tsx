import Image from 'next/image';
import { ArrayBlogs } from '../const';

import ArrowDown from '@/assets/images/blogs/arrow_left_alt.svg';

import BlogItem from '@/components/pages/blogs/blog-item';

const Index = () => {
  return (
    <div className='lg:mr-[clamp(1rem,3vw,5rem)]'>
      <p className='text-[48px] font-bold'>All articles</p>
      <div className='grid lg:grid-cols-1 grid-cols-2 gap-6'>
        {ArrayBlogs.map(
          (item, index) =>
            index < 5 && (
              <div
                key={item.id}
                className={`py-10 flex min-[1760px]:flex-row flex-col items-center lg:items-start`}
              >
                <BlogItem
                  item={item}
                  classNameAvt={`w-[557px] h-[300px] object-cover min-[1441px]:mr-10`}
                />
              </div>
            ),
        )}
      </div>
      <div className='flex justify-center m-4 my-20'>
        <div className='flex border-[1px] px-5 py-3 border-[#E6E8E8] rounded-[8px] cursor-pointer'>
          <p className='text-center text-[18px]'>View more (100)</p>
          <Image
            src={ArrowDown}
            alt='x-mark'
            className='w-3 h-3 mx-2 self-center'
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
