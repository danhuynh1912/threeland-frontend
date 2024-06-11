'use client';
import { useState } from 'react';
import { ArrayBlogs, arrayTags } from '../const';
import Image from 'next/image';

import ArrowDown from '@/assets/images/blogs/arrow_left_alt.svg';

import BlogItem from './blog-item';
import Link from 'next/link';

const Tag = () => {
  const [tag, setTag] = useState({
    id: 1,
    name: 'All',
  });

  const setTagChoose = (item: any) => {
    setTag(item);
  };

  return (
    <div className='sm:px-[50px] lg:px-[100px]'>
      <p className='text-[48px] font-bold text-[#071516]'>
        Ultimate Travel Guides In Indochina
      </p>
      <div className='flex flex-wrap mt-4 mb-7'>
        {arrayTags.map((item, index) => (
          <p
            key={`${item.id}${index}`}
            onClick={() => setTagChoose(item)}
            className={`border-[${
              tag.id === item.id ? '#0066B3' : '#9CA1A2'
            }] mr-3 text-[${
              tag.id === item.id ? '#FFFFFF' : '#9CA1A2'
            }] rounded-[5px] border-[1px] px-4 py-1 bg-[${
              tag.id === item.id ? '#0066B3' : '#ffffff'
            }] cursor-pointer`}
          >
            {item.name}
          </p>
        ))}
      </div>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 auto-rows-max`}
      >
        {ArrayBlogs.map((item) => (
          <Link href='/blogs/1' className='' role='button' key={item.id}>
            <BlogItem item={item} lineClamp={3} />
          </Link>
        ))}
      </div>
      <div className='flex justify-center m-4 my-20'>
        <div className='flex border-[1px] px-5 py-3 border-[#E6E8E8] rounded-[8px] cursor-pointer'>
          <p className='text-center text-[18px]'>View more</p>
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

export default Tag;
