import React from 'react';
import OurJourneyImage from '@/assets/images/who-we-are/our-journey.png';
import Image from 'next/image';

const OurJourney = () => {
  return (
    <>
      <section className='bg-[#0066B3] px-[24px] sm:px-[50px] lg:px-[100px] pb-[4rem] pt-[clamp(2rem,6vw,7rem)]'>
        <div className='max-w-[1400px] mx-auto'>
          <p className='max-w-[1105px] ml-auto text-[clamp(20px,4vw,56px)] 2xl:text-[56px] font-medium text-white'>
            Threeland Travel - Gray Line Vietnam A Premier Destination
            Management Company in Vietnam, Laos, Cambodia!
          </p>
        </div>
      </section>

      <section className='relative pb-[clamp(2rem,6vw,7rem)]'>
        <div className='block md:max-[960px]:hidden absolute h-[15%] bg-[rgba(0,102,179,1)] top-0 left-0 right-0'></div>

        <div className='flex flex-col md:flex-row max-[499px]:items-center min-[500px]:items-end md:max-[960px]:items-center gap-[2rem] relative px-[24px] sm:px-[50px] lg:px-[100px]'>
          <Image
            src={OurJourneyImage}
            alt='our-journey'
            className='max-[499px]:relative absolute md:relative w-[250px] md:w-[35%] 2xl:w-[45%] max-w-[705px] min-[960px]:min-h-[420px]'
          />

          <div className='flex flex-col 2xl:gap-6 relative flex-1 max-[499px]:pt-0 pt-[10rem] md:pt-0 2xl:pb-[3rem]'>
            <p className='text-[70px] xl:text-[clamp(70px,9vw,155px)] min-[1700px]-text-[155px] text-[#ECF1FE] font-semibold xl:leading-[106px]'>
              01
            </p>
            <h3 className='text-[30px] xl:text-[clamp(40px,4vw,56px)] 2xl:text-[56px] font-semibold'>
              Our journey
            </h3>

            <p className='min-[1440px]:text-[20px] text-justify font-extralight'>
              From obtaining the tourism operating international license in
              2003 in Vietnam to opening our fouth country of Myanmar and doing
              business as Grayline Vietnam (a branch of Grayline International
              USA) in 2010, our passion for travel in Southeast Asia and
              insatiable desire for excellence have driven us to become one of
              the region’s most eminent DMCs. <br /> With 2 decades of
              experience, we pride ourselves on the encyclopedic knowledge and
              years-proven profesionalism with expert teams of in-country
              consultants. As a dedicated destination management company, we
              have remained being one of top choices for clients or individual
              travelers looking for best agents in town with specialist
              knowledge that crafts one-of-a-kind experience, and top-notch
              services on the ground.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurJourney;
