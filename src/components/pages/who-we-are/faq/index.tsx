'use client';
import React, { useState } from 'react';
import Questions from '../../destination/got-question/questions';

const _categories = [
  { id: 0, name: 'Reliability and security', active: true },
  { id: 1, name: 'Payment & deposit', active: false },
  { id: 2, name: 'Amendments $ cancellation', active: false },
  { id: 3, name: 'Visa $ passport', active: false },
  { id: 4, name: 'Customized $ special tour', active: false },
  { id: 5, name: 'How to book', active: false },
];

const FAQ = () => {
  const [categories, setCategories] = useState(_categories);

  const handleOnClick = (id: number) => {
    const newCategories = [...categories].map((item) => ({
      ...item,
      active: item.id === id,
    }));
    setCategories(newCategories);
  };

  return (
    <section className='bg-[rgba(243,245,246,1)] py-[4rem]'>
      <div className='flex flex-col md:flex-row gap-[clamp(1rem,3vw,6rem)] px-[24px] sm:px-[50px] lg:px-[100px] max-w-[1584px] mx-auto'>
        <div className='flex-1 md:max-w-[clamp(260px,23vw,416px)]'>
          <h3 className='text-[clamp(30px,3vw,56px)] 2xl:text-[56px] leading-[57.29px] font-semibold max-w-[466px] mt-2'>
            FAQ
          </h3>
          <div className='border border-[#E6E8E8] mt-6'>
            {categories.map(({ id, name, active }, index) => (
              <div
                key={name}
                role='button'
                onClick={() => handleOnClick(id)}
                className={`${
                  active ? 'bg-[#0066B3] text-white' : 'bg-white text-black'
                } ${
                  index !== categories.length - 1 &&
                  'border-b border-b-[#E6E8E8]'
                } px-4 py-6`}
              >
                <p>{name}</p>
              </div>
            ))}
          </div>
        </div>

        <Questions />
      </div>
    </section>
  );
};

export default FAQ;
