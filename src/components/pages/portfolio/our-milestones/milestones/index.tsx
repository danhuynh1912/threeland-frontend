import Image from 'next/image';
import React from 'react';
import MilestoneImage from '@/assets/images/portfolio/milestone.svg';

const milestones = [
  {
    id: 0,
    time: '2004',
    title:
      'Started from 2002 and 2 years later, Threeland commenced its activities and tour operation to all Indochina countries – Vietnam, Laos, and Cambodia.',
  },
  {
    id: 1,
    time: '2008',
    title: 'Opened sales office in New York (USA) and Kuala Lumpur (Malaysia).',
  },
  {
    id: 2,
    time: '2010',
    title:
      'Won the exclusive master license of Gray Line International - a leading sightseeing brand. Soon became an exclusive supplier for renowned OTAs and international TAs/ TOs in the region.',
  },
  {
    id: 3,
    time: '2013',
    title:
      'Launched our own new deluxe 4-star cruise in Halong Bay under the name Gray Line Halong Cruise as a new exciting product of Gray Line‘s global portfolio.',
  },
  {
    id: 4,
    time: '2015',
    title:
      'pened sales office in India, Portugal and Spain as a prospective beginning to build strong network of Threeland globally.',
  },
  {
    id: 5,
    time: '2017',
    title:
      'Co-invested in the Eco project “Pu Luong Retreat” in Pu Luong Nature Reserve – an exotic and unspoiled mountainous areas in north Vietnam.',
  },
];

const Milestones = () => {
  return (
    <div className='relative h-fit mt-10 max-w-[1434px] mx-auto'>
      <div className='absolute left-[50%] top-0 bottom-0 h-full w-[0.2px] border-dashed border border-[#9CA1A2]'></div>
      <div className='flex flex-col gap-10'>
        {milestones.map((item, index) => (
          <div
            key={item.time}
            className={`relative w-full ${
              index % 2 && 'flex-row-reverse'
            } flex items-center gap-6`}
          >
            <div className='flex-1'>
              <div
                className={`rounded-[16px] bg-[#0066B3] w-[76px] h-[76px] grid place-items-center ${
                  index % 2 ? 'mr-auto' : 'ml-auto'
                }`}
              >
                <span className='text-[24px] text-white'>{item.time}</span>
              </div>
            </div>
            <div className='w-fit'>
              <Image src={MilestoneImage} alt='milestone' />
            </div>
            <div className='flex-1'>
              <p className={`${index % 2 && 'text-right'}`}>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Milestones;
