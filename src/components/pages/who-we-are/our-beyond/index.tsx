import React from 'react';
import OurBeyondImage from '@/assets/images/who-we-are/our-beyond.png';
import Image from 'next/image';

const OurBeyond = () => {
  return (
    <section className='relative'>
      <div className='absolute top-0 left-0 right-0 md:bottom-0 bottom-[50%]'>
        <Image
          src={OurBeyondImage}
          alt='our-beyond'
          className='h-full object-cover'
        />
      </div>
      <div className='min-[940px]:flex justify-between items-center px-[24px] sm:px-[50px] lg:px-[100px]'>
        <div className='relative max-w-[350px] xl:max-w-[488px] flex-1'>
          <p className='text-[70px] xl:text-[clamp(70px,9vw,155px)] min-[1700px]-text-[155px] text-[#FFFFFF66] font-semibold xl:leading-[106px]'>
            02
          </p>
          <h3 className='text-[clamp(30px,4vw,56px)] 2xl:text-[56px] leading-[clamp(40px,5vw,76px)] font-semibold text-white mt-3'>
            Our beyond the ordinary vision
          </h3>
        </div>

        <div className='relative max-w-[1041px] pt-4 min-[940px]:pt-[clamp(100px,19vw,360px)] flex-1'>
          <div className='bg-white p-3 sm:p-10'>
            <p className='text-justify sm:text-[20px] font-extralight sm:leading-[40px]'>
              Captivated by the fascinating culture and the modernly vibrant yet
              sensational life of Indochina and Myanmar, Threeland’s vision is
              to inspire others to explore the vigourous yet timeless charm of
              the destinations that ignited our journey 20 years ago. Whether it
              is classic or adventure, beach holiday or cultural exploration,
              leisure or MICE, luxury or budget, our travel experts have
              something to offer everyone. With the mission “Simply your best
              local friend”, our competent and hospitable travel gurus are
              tirelessly curating and improving everyday to provide our clients
              with the best customized experiences in our home destinations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurBeyond;
