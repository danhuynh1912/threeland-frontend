import React from 'react';

const OurPortfolio = () => {
  return (
    <section className='bg-[rgba(0,102,179,1)] pt-[2rem] pb-[clamp(2rem,6vw,7rem)] text-white'>
      <div className='max-w-[1910px] px-[24px] sm:px-[50px] xl:px-[100px] mx-auto'>
        <p className='font-extralight text-center'>WHO WE ARE</p>
        <h3 className='text-[clamp(26px,4vw,40px)] min-[1360px]:text-[48px] font-semibold text-center'>
          OUR PORTFOLIO
        </h3>
        <div className='flex gap-10 flex-wrap lg:flex-nowrap justify-center mt-10'>
          <div className='flex gap-4 flex-1 min-w-[280px] max-w-[380px] lg:max-w-none'>
            <p className='text-[clamp(80px,8vw,120px)] font-semibold leading-[107.24px] text-[#EAEAEA4D]'>
              1
            </p>
            <div className=''>
              <h4 className='text-[clamp(24px,2vw,36px)] font-semibold'>
                Threeland Travel
              </h4>
              <p className='text-[18px] font-extralight text-justify mt-2'>
                Our primary brand provides customized travel packages that
                satiate the thirst of any travelers. Family retreat or
                adventure, leisure or MICE, beach break or definite cultural
                discovery, we have a lot to offer any taste of travel which
                makes us one of the most trusted and exciting DMCs of many
                travel agents abroad.
              </p>
            </div>
          </div>

          <div className='flex gap-4 flex-1 min-w-[280px] max-w-[380px] lg:max-w-none'>
            <p className='text-[clamp(80px,8vw,120px)] font-semibold leading-[107.24px] text-[#EAEAEA4D]'>
              2
            </p>
            <div className=''>
              <h4 className='text-[clamp(24px,2vw,36px)] font-semibold'>
                Gray line vietnam
              </h4>
              <p className='text-[18px] font-extralight text-justify mt-2'>
                Known as a franchiser from Gray Line International (USA), whose
                principal offers are day trips and activities, shore excursions,
                airport transfers, limousine and other ground services for
                business travel across Southeast Asia.
              </p>
            </div>
          </div>

          <div className='flex gap-4 flex-1 min-w-[280px] max-w-[380px] lg:max-w-none'>
            <p className='text-[clamp(80px,8vw,120px)] font-semibold leading-[107.24px] text-[#EAEAEA4D]'>
              3
            </p>
            <div className=''>
              <h4 className='text-[clamp(24px,2vw,36px)] font-semibold'>
                Gray line halong
              </h4>
              <p className='text-[18px] font-extralight text-justify mt-2'>
                Gray Line Halong is a division/ sub franchiser of Gray Line
                International, mainly focusing on cruise services. We have
                remained as one of top cruise providers on the UNESCO Heritage
                Halong Bay.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPortfolio;
