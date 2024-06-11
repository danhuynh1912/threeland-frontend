import React from 'react';
import Questions from './questions';

const GotQuestion = () => {
  return (
    <section className='bg-[rgba(243,245,246,1)] py-[4rem]'>
      <div className='flex flex-col-reverse min-[860px]:flex-row items-center gap-[clamp(1rem,6vw,6rem)] px-[24px] sm:px-[50px] lg:px-[100px] max-w-[1584px] mx-auto'>
        <div className='min-[860px]:w-[35%] w-full'>
          <p className='text-[rgba(0,102,179,1)] font-extralight text-[18px]'>
            FAQ
          </p>
          <h3 className='text-[clamp(28px,4vw,44px)] xl:text-[44px] leading-[clamp(40px,4vw,57.29px)] font-semibold max-w-[466px] mt-2'>
            Got a question For company
          </h3>
          <input
            type='text'
            className='rounded-[34px] max-w-[430px] w-full h-[56px] px-[16px] text-[14px] mt-4'
            placeholder='Your email'
          />
          <div
            role='button'
            className='bg-[rgba(0,102,179,1)] rounded-[28px] w-[110px] h-[44px] grid place-items-center text-white text-[14px] mt-2'
          >
            <span>Submit</span>
          </div>
        </div>

        <Questions />
      </div>
    </section>
  );
};

export default GotQuestion;
