import React from 'react';
import YouAreUniqueImage from '@/assets/images/extras/you-are-unique.png';
import Image from 'next/image';

const YouAreUnique = () => {
  return (
    <section className='relative h-[600px]'>
      <Image
        src={YouAreUniqueImage}
        alt='YouAreUniqueImage'
        className='h-full object-cover'
      />

      <div className='flex flex-col justify-center items-center px-[24px] sm:px-[50px] lg:px-[100px] absolute inset-0 bg-black bg-opacity-[0.3] text-white'>
        <h3 className='text-[clamp(30px,4vw,48px)] xl:text-[48px] font-medium text-center'>
          YOU ARE UNIQUE, SO IS YOUR TRIP
        </h3>
        <p className='text-[clamp(20px,3vw,32px)] xl:text-[32px] font-extralight text-center'>
          Create your own trip with 100% hassle free
        </p>

        <div
          role='button'
          className='bg-[rgba(255,255,255,1)] px-8 py-4 rounded-[2px] mt-6'
        >
          <span className='text-[rgba(0,102,179,1)] text-[24px] font-medium'>
            Get a Quote
          </span>
        </div>
      </div>
    </section>
  );
};

export default YouAreUnique;
