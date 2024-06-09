'use client';
import Image from 'next/image';
import React, { useRef } from 'react';
import Slider from 'react-slick';
// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import RightSliderImage from '@/assets/images/right-slider.svg';
import LeftSliderImage from '@/assets/images/left-slider.svg';
import UserVoteImage from '@/assets/images/user-vote.svg';
import UserCommentAvatarImage from '@/assets/images/user-comment-avatar.jpeg';

const slideImagesCustomerReview = [
  {
    caption: 'Slide 1',
  },
  {
    caption: 'Slide 2',
  },
  {
    caption: 'Slide 3',
  },
  {
    caption: 'Slide 4',
  },
];

const CustomerReviews = () => {
  const slider = useRef(null);
  const settingsCustomerReview = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 6,
    arrows: false,
    // responsive: [
    //   {
    //     breakpoint: 1441,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };
  return (
    <section className='flex bg-[#f3f3f3] gap-6 pt-[3rem] pb-[6rem]'>
      <div className='max-w-[1910px] px-[100px] mx-auto w-full'>
        <div className='flex justify-between mb-[2rem] pr-[1rem]'>
          <h3 className='text-[56px] font-semibold leading-[54px]'>
            Customer Reviews{' '}
            <span className='text-[32px] font-light'>(15 reviews)</span>
          </h3>
          <div className='flex items-center gap-3'>
            <div
              role='button'
              //   onClick={handleClickPrev}
              className='rounded-[43px] border-[#9CA1A2] border w-[68px] h-[48px] flex items-center justify-center'
            >
              <Image src={LeftSliderImage} alt='left-slider' />
            </div>
            <div
              role='button'
              //   onClick={handleClickNext}
              className='rounded-[43px] border-[#9CA1A2] border w-[115px] h-[48px] flex gap-2 items-center justify-center'
            >
              <p className='text-[#071516]'>Next</p>
              <Image src={RightSliderImage} alt='left-slider' />
            </div>
          </div>
        </div>

        <Slider className='mt-[4rem]' ref={slider} {...settingsCustomerReview}>
          {slideImagesCustomerReview.map((slideImage, index) => (
            <div key={index} className='pr-2'>
              <div className='p-8 max-w-[413px] bg-white rounded-[16px] border-[rgba(87, 92, 86, 0.16)] border'>
                <p className='text-[#1D1F1E] text-[18px] 2xl:text-[24px] font-extralight'>
                  “Flow transformed my energy use. Efficient, green tech,
                  outstanding service!”rgba(54, 74, 54, 0.06)
                </p>

                <div className='flex gap-2 items-center mt-8'>
                  <Image src={UserVoteImage} alt='user-vote' />
                  <Image src={UserVoteImage} alt='user-vote' />
                  <Image src={UserVoteImage} alt='user-vote' />
                  <Image src={UserVoteImage} alt='user-vote' />
                  <Image src={UserVoteImage} alt='user-vote' />
                </div>

                <div className='flex gap-5 mt-8'>
                  <Image
                    src={UserCommentAvatarImage}
                    alt='user-avatar'
                    width={56}
                    className='object-cover rounded-full h-[56px]'
                  />
                  <div className=''>
                    <p className='text-[18px] leading-[28px] font-medium'>
                      Jane Cooper
                    </p>
                    <span className='text-[14px]'>CEO, ABC Corporation</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CustomerReviews;
