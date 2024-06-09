'use client';
import React from 'react';
import Image from 'next/image';
import BackgroundImage from '@/assets/images/extras/highlights-halong-cruise.png';
import HalongBayText from '@/assets/images/extras/halong-bay-cruise-text.svg';
import HighlightsSmallerImage from '@/assets/images/extras/highlights-smaller-image.png';
import UserVoteImage from '@/assets/images/user-vote.svg';
import LeftSliderWhiteImage from '@/assets/images/left-slider-white.svg';
import RightSliderWhiteImage from '@/assets/images/right-slider-white.svg';

const ExtrasHighlight = () => {
  const handleClickPrev = () => {
    // @ts-ignore
    slider?.current?.slickPrev();
  };

  const handleClickNext = () => {
    // @ts-ignore
    slider?.current?.slickNext();
  };
  return (
    <section className='relative min-[1320px]:max-h-[917px] overflow-hidden'>
      <Image
        src={BackgroundImage}
        alt='bg'
        className='w-full block max-[1319px]:h-[414px]'
      />
      <div className='flex flex-col justify-between absolute top-0 left-0 right-0 min-[1320px]:inset-0 max-[1319px]:h-[414px] bg-black bg-opacity-[0.3] pt-[clamp(1rem,8vw,8rem)]'>
        <div className='px-[24px] sm:px-[50px] lg:px-[100px] max-w-[1910px] w-full mx-auto'>
          <p className='font-extralight mb-4 tracking-[5px] text-white'>
            HIGHLIGHTS
          </p>
          <Image src={HalongBayText} alt='halong-text' />
          <div className='block min-[1320px]:hidden pr-[7rem] pb-[3rem] text-white flex-1 h-fit mt-[3rem]'>
            <div className='flex gap-4 items-center'>
              <span className='text-[20px]'>01</span>
              <div className='flex-1 border border-[rgba(255,255,255,1)]'></div>
              <span className='text-[20px]'>03</span>
            </div>
            <div className='flex items-center gap-3 mt-6'>
              <div
                role='button'
                onClick={handleClickPrev}
                className='rounded-[43px] border-[##EEEEEE] border w-[68px] h-[48px] flex items-center justify-center'
              >
                <Image src={LeftSliderWhiteImage} alt='left-slider' />
              </div>
              <div
                role='button'
                onClick={handleClickNext}
                className='rounded-[43px] border-[##EEEEEE] border w-[115px] h-[48px] flex gap-2 items-center justify-center'
              >
                <p className='text-white'>Next</p>
                <Image src={RightSliderWhiteImage} alt='left-slider' />
              </div>
            </div>
          </div>
        </div>

        <div className='hidden min-[1320px]:flex items-end gap-8 h-fit mt-[4rem]'>
          <div className='bg-white flex justify-between gap-[2rem] pt-8 pr-8 pl-8 min-[1600px]:pl-20 w-full min-[1320px]:w-[70%] min-[1320px]:min-w-[1032px]'>
            <div className='relative w-[45%] min-w-[436px]'>
              <div className='flex gap-4 h-fit'>
                <div className='active bg-[rgba(0,102,179,1)] text-white rounded-[27.5px] px-4 py-2'>
                  <span className='text-[20px]'>Newest</span>
                </div>

                <div className='border border-[rgba(230,232,232,1)] text-black rounded-[27.5px] px-4 py-2'>
                  <span className='text-[20px]'>Luxury</span>
                </div>

                <div className='border border-[rgba(230,232,232,1)] text-black rounded-[27.5px] px-4 py-2'>
                  <span className='text-[20px]'>Budget</span>
                </div>
              </div>

              <div className='mt-8 bg-white absolute left-0 right-[-113px] p-8 shadow-[0px_0px_30px_0px_rgba(0,0,0,0.08)]'>
                <h5 className='text-[24px] min-[1440px]:text-[32px]'>
                  Dynasty Cruise
                </h5>
                <p className='text-[rgba(156,161,162,1)] 2xl:text-[24px] mt-4'>
                  Unit 201, 2nd Floor, Hanoi Towers, 49 Hai Ba Trung Str, Hoan
                  Kiem District, Hanoi, Vietnam
                </p>
                <div className='flex gap-2 items-center mt-4'>
                  <Image src={UserVoteImage} alt='UserVoteImage' />
                  <p className='text-[24px]'>4,93</p>
                </div>
              </div>
            </div>

            <Image
              src={HighlightsSmallerImage}
              alt='HighlightsSmallerImage'
              className='max-h-[455px] w-[55%]'
            />
          </div>

          <div className='hidden min-[1320px]:block pr-[7rem] pb-[3rem] text-white flex-1 h-fit'>
            <div className='flex gap-4 items-center'>
              <span className='text-[20px]'>01</span>
              <div className='flex-1 border border-[rgba(255,255,255,1)]'></div>
              <span className='text-[20px]'>03</span>
            </div>
            <div className='flex items-center gap-3 mt-6'>
              <div
                role='button'
                onClick={handleClickPrev}
                className='rounded-[43px] border-[##EEEEEE] border w-[68px] h-[48px] flex items-center justify-center'
              >
                <Image src={LeftSliderWhiteImage} alt='left-slider' />
              </div>
              <div
                role='button'
                onClick={handleClickNext}
                className='rounded-[43px] border-[##EEEEEE] border w-[115px] h-[48px] flex gap-2 items-center justify-center'
              >
                <p className='text-white'>Next</p>
                <Image src={RightSliderWhiteImage} alt='left-slider' />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 860 - 1320 */}
      <div className='hidden min-[860px]:flex min-[1320px]:hidden items-end gap-8 h-fit'>
        <div className='bg-white flex justify-between gap-[2rem] pt-8 pr-8 pl-8 min-[1600px]:pl-20 w-full min-[1320px]:w-[70%] min-[1320px]:min-w-[1032px]'>
          <div className='relative w-[45%]'>
            <div className='flex gap-4 h-fit'>
              <div className='active bg-[rgba(0,102,179,1)] text-white rounded-[27.5px] px-4 py-2'>
                <span className='text-[20px]'>Newest</span>
              </div>

              <div className='border border-[rgba(230,232,232,1)] text-black rounded-[27.5px] px-4 py-2'>
                <span className='text-[20px]'>Luxury</span>
              </div>

              <div className='border border-[rgba(230,232,232,1)] text-black rounded-[27.5px] px-4 py-2'>
                <span className='text-[20px]'>Budget</span>
              </div>
            </div>

            <div className='mt-8 bg-white absolute left-0 right-[-113px] p-8 shadow-[0px_0px_30px_0px_rgba(0,0,0,0.08)]'>
              <h5 className='text-[24px] min-[1440px]:text-[32px]'>
                Dynasty Cruise
              </h5>
              <p className='text-[rgba(156,161,162,1)] 2xl:text-[24px] mt-4'>
                Unit 201, 2nd Floor, Hanoi Towers, 49 Hai Ba Trung Str, Hoan
                Kiem District, Hanoi, Vietnam
              </p>
              <div className='flex gap-2 items-center mt-4'>
                <Image src={UserVoteImage} alt='UserVoteImage' />
                <p className='text-[24px]'>4,93</p>
              </div>
            </div>
          </div>

          <Image
            src={HighlightsSmallerImage}
            alt='HighlightsSmallerImage'
            className='max-h-[455px] w-[55%] min-w-[430px]'
          />
        </div>

        <div className='hidden min-[1320px]:block pr-[7rem] pb-[3rem] text-white flex-1 h-fit'>
          <div className='flex gap-4 items-center'>
            <span className='text-[20px]'>01</span>
            <div className='flex-1 border border-[rgba(255,255,255,1)]'></div>
            <span className='text-[20px]'>03</span>
          </div>
          <div className='flex items-center gap-3 mt-6'>
            <div
              role='button'
              onClick={handleClickPrev}
              className='rounded-[43px] border-[##EEEEEE] border w-[68px] h-[48px] flex items-center justify-center'
            >
              <Image src={LeftSliderWhiteImage} alt='left-slider' />
            </div>
            <div
              role='button'
              onClick={handleClickNext}
              className='rounded-[43px] border-[##EEEEEE] border w-[115px] h-[48px] flex gap-2 items-center justify-center'
            >
              <p className='text-white'>Next</p>
              <Image src={RightSliderWhiteImage} alt='left-slider' />
            </div>
          </div>
        </div>
      </div>

      {/* 0 - 860 */}
      <div className='block min-[860px]:hidden items-end gap-8 h-fit pb-[2rem]'>
        <div className='bg-white pt-8 pr-8 pl-8 min-[1600px]:pl-20 w-full min-[1320px]:w-[70%] min-[1320px]:min-w-[1032px]'>
          <div className='flex gap-2 sm:gap-4 h-fit'>
            <div className='active bg-[rgba(0,102,179,1)] text-white rounded-[27.5px] px-4 py-2'>
              <span className='text-[20px]'>Newest</span>
            </div>

            <div className='border border-[rgba(230,232,232,1)] text-black rounded-[27.5px] px-4 py-2'>
              <span className='text-[20px]'>Luxury</span>
            </div>

            <div className='border border-[rgba(230,232,232,1)] text-black rounded-[27.5px] px-4 py-2'>
              <span className='text-[20px]'>Budget</span>
            </div>
          </div>

          <Image
            src={HighlightsSmallerImage}
            alt='HighlightsSmallerImage'
            className='max-h-[455px] w-full mt-8'
          />

          <div className='mt-8 bg-white left-0 right-[-113px] p-8 shadow-[0px_0px_30px_0px_rgba(0,0,0,0.08)]'>
            <h5 className='text-[24px] min-[1440px]:text-[32px]'>
              Dynasty Cruise
            </h5>
            <p className='text-[rgba(156,161,162,1)] 2xl:text-[24px] mt-4'>
              Unit 201, 2nd Floor, Hanoi Towers, 49 Hai Ba Trung Str, Hoan Kiem
              District, Hanoi, Vietnam
            </p>
            <div className='flex gap-2 items-center mt-4'>
              <Image src={UserVoteImage} alt='UserVoteImage' />
              <p className='text-[24px]'>4,93</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtrasHighlight;
