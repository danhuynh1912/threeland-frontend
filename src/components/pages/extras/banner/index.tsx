import Image from 'next/image';
import React from 'react';
import SearchImage from '@/assets/images/search.svg';
import RightArrowImage from '@/assets/images/right-arrow.svg';
import CruisesNameImage from '@/assets/images/extras/cruises-name.svg';
import StarRatingImage from '@/assets/images/extras/star-rating.svg';
import BannerTextImage from '@/assets/images/extras/resort-your-holiday.svg';

type Props = {
  title?: string;
  titleWidth?: string;
  subTitle?: string;
  defaultForm?: boolean;
  url?: string;
  isMobileFullScreen?: boolean;
  children?: React.ReactNode;
};

const Banner = (props: Props) => {
  const {
    url = 'extras/halong-cruises-banner.png',
    isMobileFullScreen = true,
  } = props;
  // const bgImg = `bg-[url('/${url}')]`;
  return (
    <section
      style={{ backgroundImage: `url('/${url}')` }}
      className={`relative bg-banner-1 ${
        isMobileFullScreen
          ? 'h-[calc(100vh-144px)] max-[1300px]:h-[calc(100vh-69px)]'
          : 'h-[clamp(200px,10vw,400px)] lg:max-[1300px]:h-[calc(100vh-69px)] min-[1301px]:h-[calc(100vh-144px)]'
      } overflow-hidden bg-cover`}
    >
      <div className='absolute inset-0 bg-extras-banner flex flex-col justify-center'>
        <div className='px-[24px] sm:px-[50px] lg:px-[100px] max-w-[1540px] w-full mx-auto'>
          <p className='uppercase font-extralight text-white mb-2 tracking-[5px]'>
            welcome to
          </p>
          <Image src={BannerTextImage} alt='banner-text' />
        </div>
        <div className='w-full px-[clamp(24px,4vw,100px)]'>
          <div className='flex flex-wrap min-[930px]:flex-row flex-col items-center gap-2 bg-black bg-opacity-[0.3] rounded-[8px] p-2 mt-[4rem] max-w-full min-[930px]:w-max w-full mx-auto'>
            <div className='relative xl:max-w-[312px] xl:w-[312px] min-[930px]:max-w-[200px] min-[930px]:w-[200px] w-full'>
              <Image
                src={CruisesNameImage}
                alt='duration'
                className='absolute top-[1.2rem] left-[0.5rem]'
              />
              <select className='w-full flex-1 h-[62px] rounded-[4px] px-2 pl-9'>
                <option value='volvo'>Cruises name</option>
                <option value='saab'>Saab</option>
                <option value='opel'>Opel</option>
                <option value='audi'>Audi</option>
              </select>
            </div>

            <div className='relative xl:max-w-[312px] xl:w-[312px] min-[930px]:max-w-[200px] min-[930px]:w-[200px] w-full'>
              <Image
                src={StarRatingImage}
                alt='duration'
                className='absolute top-[1.2rem] left-[0.5rem]'
              />
              <select className='w-full h-[62px] rounded-[4px] px-2 pl-9'>
                <option value='volvo'>Star rating</option>
                <option value='saab'>Saab</option>
                <option value='opel'>Opel</option>
                <option value='audi'>Audi</option>
              </select>
            </div>

            <div className='relative xl:max-w-[312px] xl:w-[312px] min-[930px]:max-w-[200px] min-[930px]:w-[200px] w-full'>
              <Image
                src={SearchImage}
                alt='duration'
                className='absolute top-[1.2rem] left-[0.5rem]'
              />
              <input
                type='text'
                placeholder='Search'
                className='w-full h-[62px] rounded-[4px] px-2 pl-9'
              />
            </div>

            <div
              role='button'
              className='min-[930px]:w-[123px] w-full h-[62px] flex gap-2 items-center justify-center text-white bg-[#0066B3] rounded-[4px]'
            >
              <span>Search</span>
              <Image src={RightArrowImage} alt='duration' className='' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
