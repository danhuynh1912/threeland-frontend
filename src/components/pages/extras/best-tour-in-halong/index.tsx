import Image from 'next/image';
import React from 'react';
import LocationHeImage from '@/assets/images/he-loc.svg';
import ClockHeImage from '@/assets/images/he-clock.svg';
import StarHeImage from '@/assets/images/he-star.svg';
import ExploreColorImage from '@/assets/images/explore-color.svg';
import BestTourHalongImage from '@/assets/images/he-3.png';
import ArrowDown from '@/assets/images/blogs/arrow_left_alt.svg';

const BestTourInHalong = () => {
  return (
    <section className='px-[24px] sm:px-[50px] lg:px-[100px] pb-[2rem] pt-[clamp(1rem,7vw,7rem)]'>
      <div className='grid min-[560px]:grid-cols-2 min-[878px]:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8'>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div key={item} className=''>
            <div className='relative rounded-[24px] bg-[#F7F7F7] h-full p-3 pb-5 overflow-hidden'>
              <div className='p-1'>
                <h5 className='font-medium 2xl:text-[22px] leading-[clamp(24px,2vw,32px)]'>
                  Essential Vietnam with Sapa
                </h5>
                <div className='flex gap-2 items-start mt-4'>
                  <Image src={LocationHeImage} alt='location' />
                  <p className='font-light text-[#6A7373] text-[12px] 2xl:text-[16px]'>
                    Saigon – Mekong Delta – Hoi An – Hue – Hanoi – Sapa – Halong
                    Bay
                  </p>
                </div>
                <div className='min-[1330px]:flex flex-wrap mt-4'>
                  <div className='flex items-center gap-2 w-fit'>
                    <Image src={ClockHeImage} alt='location' />
                    <p className='font-light text-[12px] 2xl:text-[16px]'>
                      8Day 9Night
                    </p>
                  </div>
                  <div className='flex items-center gap-2 flex-1 mt-4 min-[1330px]:mt-0 min-[1330px]:justify-center'>
                    <Image src={StarHeImage} alt='location' />
                    <p className='font-light text-[12px] 2xl:text-[16px] min-w-max'>
                      4.8 (3454 reviews)
                    </p>
                  </div>
                </div>
                <p className='flex gap-2 items-center my-4'>
                  <span className='text-[26px] 2xl:text-[36px] font-medium'>
                    $150
                  </span>
                  <span className='line-through 2xl:text-[18px] font-extralight mt-1'>
                    $320/d
                  </span>
                </p>
              </div>
              <Image
                className='w-full'
                src={BestTourHalongImage}
                alt={'BestTourHalongImage'}
              />
              <div
                role='button'
                className='absolute mx-auto left-0 right-0 bottom-[-16px] bg-[#F7F7F7] rounded-full p-4 w-fit'
              >
                <Image src={ExploreColorImage} alt='explore-color' />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='flex w-fit mx-auto mt-6 border-[1px] px-5 py-3 border-[#E6E8E8] rounded-[8px] cursor-pointer'>
        <p className='text-center text-[18px]'>View more</p>
        <Image
          src={ArrowDown}
          alt='x-mark'
          className='w-3 h-3 mx-2 self-center'
        />
      </div>
    </section>
  );
};

export default BestTourInHalong;
