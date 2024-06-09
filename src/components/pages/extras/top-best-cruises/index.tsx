'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import RightSliderImage from '@/assets/images/right-slider.svg';
import LeftSliderImage from '@/assets/images/left-slider.svg';
import ArrowLeft from '@/svg/arrow_left';
import ArrowRight from '@/svg/arrow_right';
import LocationHeImage from '@/assets/images/he-loc.svg';
import UserVoteImage from '@/assets/images/user-vote.svg';
import UserCommentAvatarImage from '@/assets/images/user-comment-avatar.jpeg';
import DynastyCruiseImage from '@/assets/images/extras/dynasty-cruise.png';

const slideImagesCustomerReview = [
  {
    caption: 'Slide 1',
    url: DynastyCruiseImage,
  },
  {
    caption: 'Slide 2',
    url: DynastyCruiseImage,
  },
  {
    caption: 'Slide 3',
    url: DynastyCruiseImage,
  },
];

const Top10BestCruises = () => {
  const slider = useRef(null);
  const settingsCustomerReview = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleClickPrev = () => {
    // @ts-ignore
    slider?.current?.slickPrev();
  };

  const handleClickNext = () => {
    // @ts-ignore
    slider?.current?.slickNext();
  };

  return (
    <>
      <section className='bg-[#0066B3] px-[24px] sm:px-[50px] lg:px-[100px] py-[clamp(1rem,7vw,7rem)]'>
        <div className='max-w-[1410px] w-full mx-auto text-white text-center'>
          <p className='text-[20px] sm:text-[24px] font-extralight tracking-[5px]'>
            EXTRAS
          </p>
          <h3 className='text-[24px] sm:text-[30px] lg:text-[48px] font-medium max-w-[1185px] mx-auto mt-2'>
            TOP 10 BEST HALONG BAY CRUISE DEALS RECOMMENDED FOR YOU
          </h3>
          <p className='text-[20px] font-extralight mt-2'>
            The highly trusted collection of Best Halong Bay Cruises that is
            frequently updated by our Halong Cruise Experts depending much on
            the cruises, conditions: best facilities, unique experiences, best
            offers, high-end meals on board, professional staff, and especially
            excellent comments, feedback from our real valuable customers. We
            hope that you can select a suitable Halong bay cruise for your
            holiday and have unforgettable experiences beside your beloved ones.
          </p>
        </div>
      </section>

      <section className='top-best-cruises flex bg-[#f3f3f3] gap-6 pt-[3rem] pb-[6rem]'>
        <div className='relative max-w-[1640px] px-[24px] sm:px-[50px] lg:px-[100px] mx-auto w-full'>
          <div className='absolute left-[16px] sm:left-[30px] lg:left-[70px] h-full flex justify-center flex-col mb-20'>
            <div
              onClick={handleClickPrev}
              className='px-4 py-4 border-[2px] border-[#F3F3F3] bg-[#fff] z-50 rounded-[30px] cursor-pointer'
            >
              <ArrowLeft />
            </div>
          </div>
          <div
            onClick={handleClickNext}
            className='absolute right-[16px] sm:right-[30px] lg:right-[70px] h-full flex justify-center flex-col mb-20'
          >
            <div className='px-4 py-4 border-[2px] border-[#F3F3F3] bg-[#fff] z-50 rounded-[30px] cursor-pointer'>
              <ArrowRight />
            </div>
          </div>
          <Slider
            className='mt-[4rem]'
            ref={slider}
            {...settingsCustomerReview}
          >
            {slideImagesCustomerReview.map((slideImage, index) => {
              console.log(slideImage);
              return (
                <div key={index} role='button' className='group px-2'>
                  <div className=''>
                    <Image src={slideImage.url} alt='url' />
                  </div>
                  <h5 className='group-hover:underline text-[clamp(24px,3vw,32px)] font-medium mt-2'>
                    Dynasty Cruise
                  </h5>
                  <div className='flex items-center gap-1'>
                    <Image src={LocationHeImage} alt='location' />
                    <p className='text-[rgba(156,161,162,1)] xl:text-[20px]'>
                      Ha Long, Quang ninh, Viet Nam
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Top10BestCruises;
