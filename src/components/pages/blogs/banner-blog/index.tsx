'use client';
import React, { useEffect, useRef, useState } from 'react';

import TimeAndShare from '@/components/pages/blogs/blog-item/timeAndShare';
import AvatarInfo from '@/components/pages/blogs/blog-item/AvatarInfo';

import Avatar from '@/assets/images/blogs/avt.png';

const BannerBlog = (props: any) => {
  const { isDetail } = props;

  return (
    <section
      className={`bg-[url('/blogs/backgroundBlog.png')] flex ${
        isDetail ? '' : 'justify-center'
      } relative bg-banner-1 h-[calc(100vh-69px)] xl:h-[calc(100vh-144px)] 2xl:h-[650px] overflow-hidden bg-cover text-[#FFFFFF]`}
    >
      {isDetail ? (
        <div className='flex flex-col justify-center max-w-[1313px] px-[24px] sm:px-[50px] lg:px-[100px]'>
          <TimeAndShare
            item={{ time: 'June 28, 2018', share: '1K' }}
            theme='dark'
          />
          <p
            className={`text-[clamp(30px,4vw,64px)] 2xl:text-[64px] min-w-[1/2] font-bold leading-[clamp(36px,5vw,64px)] py-5`}
          >
            Vietnamese Coffee: Discover the World&apos;s Best Coffee
          </p>
          <p className='text-[20px] leading-[26px] mb-5 line-clamp-[4]'>
            Tasting coffee in Vietnam is an experience that we highly recommend
            to our readers. This simple drink is more than simply a source of
            energy for the day; it is an essential component of Vietnamese
            culture. The strong but delicious fragrance of freshly brewed coffee
            can be found{' '}
          </p>
          <AvatarInfo image={Avatar} name='Peter Rowardson' theme='dark' />
        </div>
      ) : (
        <div className='flex flex-col justify-center'>
          <div
            className={`text-[69px] text-center font-bold py-2 w-[1200px] max-[1000px]:w-[600px]`}
          >
            Talk To Our Local Expert Directly
          </div>
          <div className='text-center font-normal text-[18px] mx-30 py-2'>
            We are a real estate agency that will help you find the best
            residence you dream of, let’s discuss for your dream house?
          </div>
          <div className='flex justify-center py-2'>
            <div
              role='button'
              className='bg-[#0066B3] w-[200px] h-[48px] text-[white] rounded-[8px] flex items-center justify-center'
            >
              <span className='text-[16px] font-semibold'>
                Get Free Advice Now
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BannerBlog;
