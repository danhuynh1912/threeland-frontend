'use client';

import { url } from 'inspector';
import { ArrayBlogs } from '../const';

import BlogItem from '@/components/pages/blogs/blog-item';

import TimeAndShare from '@/components/pages/blogs/blog-item/timeAndShare';
import Link from 'next/link';

const Index = ({ title = 'Most viewed articles' }: { title?: string }) => {
  return (
    <div className={`min-[1439px]:flex-row flex-col flex`}>
      <div className='bg-[#0066B3] flex-1 pl-[100px] pr-[24px] 2xl:pr-[100px] pt-[50px]'>
        <p className='text-[clamp(30px,3vw,48px)] 2xl:text-[48px] font-bold text-[#FFF]'>
          {title}
        </p>
        {ArrayBlogs.map(
          (item, index) =>
            index < 3 && (
              <Link
                href='/blogs/1/'
                key={item.id}
                className={`xl:flex-row gap-4 flex-col max-[1440px]:items-center flex my-7`}
              >
                <BlogItem
                  item={item}
                  classNameAvt={`w-[276px] h-[216px] object-cover rounded-[8px] min-[1441px]:mr-10`}
                  theme={'dark'}
                  isContent={false}
                />
              </Link>
            ),
        )}
      </div>

      <section
        className={`bg-[url('/blogs/bg.png')] flex-1 justify-center overflow-hidden text-[#FFFFFF]`}
      >
        <div
          className={`flex max-[144px]:h-[700px] flex-col justify-end p-20 h-full`}
        >
          <TimeAndShare item={ArrayBlogs[0]} theme='dark' size='normal' />
          <p className='text-[36px] font-medium'>
            Interesting Facts About Hanoi You Probably Didn&apos;t Know!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
