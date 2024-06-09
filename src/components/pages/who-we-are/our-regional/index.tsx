import React from 'react';
import OurRegionalImage from '@/assets/images/who-we-are/our-regional.png';
import Image from 'next/image';

const OurRegional = () => {
  return (
    <section className='relative py-[clamp(3rem,15vw,18rem)]'>
      <div className='md:w-[50%] max-w-[906px] absolute bg-[rgba(0,102,179,1)] h-[25%] md:h-full top-0 left-0 md:left-auto md:bottom-0 right-0'></div>

      <div className='relative flex flex-col-reverse md:flex-row items-center px-[24px] sm:px-[50px] lg:px-[100px]'>
        <div className='flex flex-col 2xl:gap-6 relative flex-1 2xl:pb-[3rem] max-w-[717px]'>
          <p className='text-[70px] xl:text-[clamp(70px,9vw,155px)] min-[1700px]-text-[155px] text-[#ECF1FE] font-semibold xl:leading-[106px]'>
            03
          </p>
          <h3 className='text-[30px] xl:text-[clamp(40px,4vw,56px)] 2xl:text-[56px] font-semibold'>
            Our regional and global network
          </h3>

          <p className='min-[1440px]:text-[20px] text-justify font-extralight'>
            We have a dense network of sales representatives stretching from
            Asia to Europe and operation offices across the travel destinations
            to promote our products while ensuring optimal services for clients
            on the spot. The international cooperation with Grayline
            International USA has made us one of the few tour operators in
            Vietnam with a high liability insurance of US$ 1,000,000 to mitigate
            unexpected problems during travel.
          </p>
        </div>

        <Image
          src={OurRegionalImage}
          alt='our-regional'
          className='max-h-[555px] object-cover flex-1 min-w-[60%]'
        />
      </div>
    </section>
  );
};

export default OurRegional;
