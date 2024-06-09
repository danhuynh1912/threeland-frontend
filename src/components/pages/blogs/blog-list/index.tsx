'use client';
import React, { useEffect, useState } from 'react';
import { ArrayBlogs } from '../const';
import Image from 'next/image';

import post1 from '@/assets/images/blogs/post1.png';

import BlogItem from '@/components/pages/blogs/blog-item';
import Link from 'next/link';

const BlogList = () => {
  const [chooseBlogs, setChooseBlogs] = useState<any>({
    id: 1,
    stt: '01',
    time: 'June 28, 2018',
    share: '1k',
    title: "Vietnamese Coffee: Discover the World's Best Coffee",
    content:
      'Tasting coffee in Vietnam is an experience that we highly recommend to our readers. This simple drink is more than simply a source of energy for the day; it is an essential component of Vietnamese culture. The strong but delicious fragrance of freshly brewed coffee can be found on practically every street in Vietnam, whether at roadside vendors or trendy cafés.',
    name: 'Peter Rowardson',
    image: post1,
  });

  const setIdBlogs = (item: any) => {
    setChooseBlogs(item);
  };

  return (
    <div
      className={`flex max-[1180px]:flex-col justify-end px-[24px] sm:px-[50px] lg:px-[100px] relative py-10`}
    >
      {/* <div></div> */}

      <div
        className={`min-[1180px]:mr-[clamp(1rem,clamp(2vw,3vw,4vw),5rem)] max-[944px]:self-center`}
      >
        <div className={`flex min-[1180px]:flex-col`}>
          {ArrayBlogs.map((item, index) =>
            index < 3 ? (
              <div
                onClick={() => setIdBlogs(item)}
                key={item.stt}
                className={`flex justify-end py-3`}
              >
                {chooseBlogs.id === item.id ? (
                  <>
                    <div
                      className={`hidden min-[1181px]:block w-[clamp(40px,4vw,62px)] h-[2px] rounded-[5px] bg-[#C4C4C4] self-center mr-6`}
                    ></div>

                    <div className='text-[#0066B3] text-[32px] self-center font-bold justify-end'>
                      {item.stt}
                    </div>
                  </>
                ) : (
                  <>
                    <div className='hidden min-[1181px]:block w-[62px] h-[2px] rounded-[5px] self-center mr-6'></div>
                    <div className='text=[#6A7373] self-center text-[14px]'>
                      {item.stt}
                    </div>
                  </>
                )}
              </div>
            ) : null,
          )}
        </div>
      </div>
      <Link
        href='/blogs/1/'
        role='button'
        className={`flex min-[945px]:flex-row flex-col items-center min-[945px]:items-start`}
      >
        <BlogItem item={chooseBlogs} />
      </Link>
    </div>
  );
};
export default BlogList;
