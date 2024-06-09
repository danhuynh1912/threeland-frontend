import React from 'react';
import Milestones from './milestones';

const OurMilestones = () => {
  return (
    <section className='py-[clamp(2rem,6vw,7rem)] px-[24px] sm:px-[50px] lg:px-[100px]'>
      <p className='text-[16px] text-center font-extralight'>WHO WE ARE</p>
      <h3 className='text-[clamp(26px,4vw,40px)] min-[1360px]:text-[48px] font-semibold text-center'>
        OUR MILESTONES
      </h3>
      <Milestones />
    </section>
  );
};

export default OurMilestones;
