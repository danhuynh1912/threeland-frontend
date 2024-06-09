import React from 'react';
import OurCoporateImage from '@/assets/images/who-we-are/our-coporate.png';
import Image from 'next/image';

const OurCoporate = () => {
  return (
    <section className='md:flex items-center gap-8 px-[24px] sm:px-[50px] lg:px-[100px] pt-[3rem] pb-[clamp(3rem,9vw,10rem)]'>
      <Image
        src={OurCoporateImage}
        alt='our-coporate'
        className='flex-1 md:max-w-[705px]'
      />
      <div className='flex flex-col 2xl:gap-6 relative flex-1 2xl:pb-[3rem]'>
        <p className='text-[70px] xl:text-[clamp(70px,9vw,155px)] min-[1700px]-text-[155px] text-[#ECF1FE] font-semibold xl:leading-[106px]'>
          04
        </p>
        <h3 className='text-[30px] xl:text-[clamp(40px,4vw,56px)] 2xl:text-[56px] font-semibold'>
          Our corporate social responsibility
        </h3>

        <p className='min-[1440px]:text-[20px] min-[1440px]:leading-[40px] text-justify font-extralight'>
          Sustainable tourism navigates us in everything we do. Our on-going
          commitment to responsible travel has empowered us to connect travelers
          and local people in a meaningful way while bringing the most of
          benifits to local communities and minimizing our footprints in the
          destinations we operate in. Especially with Gray Line Ha Long Cruise
          and Pu Luong Retreat – Threeland-owned properties, which are attached
          to strict policies of environment protection, ethical employment that
          empowers indigenous communities, responsible production and
          consumption, our etho of sustainability is even more visible. We are
          currently engaging with Travelife whose certification process provides
          explicit guidelines for us to follow sustainable tourism code of
          conduct.
        </p>
      </div>
    </section>
  );
};

export default OurCoporate;
