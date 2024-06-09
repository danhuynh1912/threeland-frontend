import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/core/ui/sheet';
import { tourStyleCountriesTooltip, tourStyleTooltip } from '@/constants';
import { MobileMenu } from './mobile-menu';
import EmailImage from '@/assets/images/email.svg';
import PhoneImage from '@/assets/images/phone.svg';
import AmericaImage from '@/assets/images/america.svg';
import DownArrowImage from '@/assets/images/down-arrow.svg';
import DownArrowBlackImage from '@/assets/images/down-arrow-black.svg';
import LogoImage from '@/assets/images/logo-nobackground.svg';
import LogoColorImage from '@/assets/images/logo-color.svg';
import MobileMenuImage from '@/assets/images/mobile-menu.svg';

import WhoWeAreImage from '@/assets/images/about-tooltip/who-we-are.jpeg';
import PortfolioImage from '@/assets/images/about-tooltip/portfolio.jpeg';
import WhyUsImage from '@/assets/images/about-tooltip/why-us.jpeg';
import OurTeamImage from '@/assets/images/about-tooltip/our-team.jpeg';

import HalongCruisesImage from '@/assets/images/extras-tooltip/halong-cruise.jpg';
import MekongCruisesImage from '@/assets/images/extras-tooltip/mekong-cruise.jpg';
import HotelBookingImage from '@/assets/images/extras-tooltip/hotel-booking.jpeg';
import ExtraServiceImage from '@/assets/images/extras-tooltip/extra-service.jpeg';

const Header = () => {
  return (
    <>
      <header className='hidden min-[1300px]:flex flex-col h-[144px] bg-[white] text-[black]'>
        <div className='border-b border-[#f6f8fe] h-[69px] bg-[#0066B3]'>
          <div className='relative flex items-center h-full justify-between max-w-[1480px] mx-auto w-full px-[24px]'>
            <div className='flex gap-7 items-center'>
              <div className='flex items-center gap-2'>
                <Image src={EmailImage} alt='email-header' />
                <p className='text-[white] text-[14px]'>threeland@gmail.com</p>
              </div>
              <div className='flex items-center gap-2'>
                <Image src={PhoneImage} alt='phone-header' />
                <p className='text-[white] text-[14px]'>(+84)979-016-928</p>
              </div>
            </div>

            <Image
              src={LogoImage}
              alt='logo'
              className='absolute left-0 right-0 mx-auto'
            />

            <div className='flex items-center gap-1'>
              <Image src={AmericaImage} alt='america-header' />
              <div role='button' className='flex items-center gap-1'>
                <p className='text-[white]'>ENG</p>
                <Image src={DownArrowImage} alt='down-arrow-header' />
              </div>
            </div>
          </div>
        </div>

        <div className='flex-1 flex justify-between items-center h-[75px] max-w-[1480px] w-full mx-auto px-[24px]'>
          <div className='flex gap-[4rem] items-center h-full'>
            <div role='button' className='h-full flex items-center'>
              <Link href='/' className='text-[16px] hover:underline'>
                Home
              </Link>
            </div>
            <div className='relative group h-full flex items-center'>
              <div role='button' className='flex gap-2 items-center'>
                <p className='text-[16px]'>Destinations</p>
                <Image src={DownArrowBlackImage} alt='down-arrow' />
              </div>

              {/* Destination popover */}
              <div className='transition-all z-10 absolute w-[680px] top-[60px] hidden group-hover:flex justify-between bg-white p-4 border-t-[4px] border-t-[#0066B3]'>
                <div className='max-w-[200px]'>
                  <h5 className='font-semibold'>OUR DESTINATION</h5>
                  <p className='mt-4 font-extralight text-[14px]'>
                    Blessed with stunning landscape & seascape, founded as a
                    major religious & cultural center of Southeast Asia for
                    centuries, our countries offer a chain of unique travel
                    products from active tours to responsible travel, from
                    adventure to wellness, luxury holidays.
                  </p>
                </div>
                <div className='flex-1 max-w-[423px]'>
                  <div
                    role='button'
                    className="group/des bg-[url('https://threeland.com/images/country/destination-vietnam.jpg')] h-[120px]"
                  >
                    <Link
                      href='/destination/vietnam'
                      className='transition-all w-full h-full flex items-center justify-center group-hover/des:bg-black group-hover/des:bg-opacity-[0.3]'
                    >
                      <span className='transition-all text-white font-semibold text-[18px] group-hover/des:underline'>
                        VIET NAM
                      </span>
                    </Link>
                  </div>
                  <div className='flex justify-between mt-2'>
                    <div
                      role='button'
                      className="group/des bg-[url('https://threeland.com/images/country/destination-laos.jpg')] h-[110px] w-[136px]"
                    >
                      <div className='transition-all w-full h-full flex items-center justify-center group-hover/des:bg-black group-hover/des:bg-opacity-[0.3]'>
                        <span className='transition-all text-white font-semibold text-[18px] group-hover/des:underline'>
                          LAOS
                        </span>
                      </div>
                    </div>

                    <div
                      role='button'
                      className="group/des bg-[url('https://threeland.com/images/country/destination-cambodia.jpg')] h-[110px] w-[136px]"
                    >
                      <div className='transition-all w-full h-full flex items-center justify-center group-hover/des:bg-black group-hover/des:bg-opacity-[0.3]'>
                        <span className='transition-all text-white font-semibold text-[18px] group-hover/des:underline'>
                          CAMBODIA
                        </span>
                      </div>
                    </div>

                    <div
                      role='button'
                      className="group/des bg-[url('https://threeland.com/image/country/myanmar3.jpg')] h-[110px] w-[136px] bg-contain"
                    >
                      <div className='transition-all w-full h-full flex items-center justify-center group-hover/des:bg-black group-hover/des:bg-opacity-[0.3]'>
                        <span className='transition-all text-white font-semibold text-[18px] group-hover/des:underline'>
                          MYANMAR
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End destination popover */}
            </div>
            <div className='relative group h-full flex items-center'>
              <div role='button' className='flex gap-2 items-center'>
                <p className='text-[16px]'>Tour Style</p>
                <Image src={DownArrowBlackImage} alt='down-arrow' />
              </div>

              {/* Tour style popover */}
              <div className='transition-all z-10 absolute w-[780px] top-[60px] hidden group-hover:block bg-white p-4 border-t-[4px] border-t-[#0066B3]'>
                <div className='grid grid-cols-4 gap-3'>
                  {tourStyleTooltip.map((item) => (
                    <Link
                      key={item.id}
                      href='/tour-style'
                      className='group/ts flex gap-2 items-center'
                    >
                      <Image src={item.img} alt='top-selling-tour' />
                      <p className='group-hover/ts:underline text-[#0a284a] text-[14px]'>
                        {item.name}
                      </p>
                    </Link>
                  ))}
                </div>

                <div className='grid grid-cols-4 mt-3 gap-2 w-full'>
                  {tourStyleCountriesTooltip.map((item) => (
                    <Link
                      key={item.id}
                      href='/tour-style'
                      className='group/countries-tour relative group/des h-[120px]'
                    >
                      <Image
                        src={item.img}
                        alt='tooltip-image'
                        className='w-full h-full object-cover'
                      />
                      <div className='group-hover/countries-tour:bg-black group-hover/countries-tour:bg-opacity-[0.3] transition-all absolute top-0 left-0 right-0 bottom-0 flex items-center'>
                        <span className='group-hover/countries-tour:underline w-fit mx-[auto] uppercase transition-all text-white font-semibold text-[18px] group-hover/des:underline'>
                          {item.name}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              {/* End tour style popover */}
            </div>
            <div className='relative group h-full flex items-center'>
              <div role='button' className='flex gap-2 items-center'>
                <p className='text-[16px]'>Extras</p>
                <Image src={DownArrowBlackImage} alt='down-arrow' />
              </div>

              {/* Extra popover */}
              <div className='transition-all z-10 absolute w-[680px] top-[60px] translate-x-[-10rem] hidden group-hover:block bg-white p-4 border-t-[4px] border-t-[#0066B3]'>
                <div role='button' className='group/about h-[120px]'>
                  <Link
                    href='/extras/halong-cruises'
                    className='relative transition-all w-full h-full flex items-center justify-center overflow-hidden'
                  >
                    <Image src={HalongCruisesImage} alt='who-we-are' />
                    <div className='flex items-center absolute top-0 left-0 bottom-0 right-0 group-hover/about:bg-black group-hover/about:bg-opacity-[0.3] transition-all'>
                      <span className='transition-all mx-auto text-white font-semibold text-[18px] group-hover/about:underline'>
                        Halong Bay Cruises
                      </span>
                    </div>
                  </Link>
                </div>
                <div className='flex gap-2 justify-between mt-2'>
                  <Link
                    href='/extras/mekong-cruises'
                    className='group/about relative h-[110px] flex-1'
                  >
                    <Image
                      src={MekongCruisesImage}
                      alt='about-image'
                      className='w-full h-full object-cover'
                    />
                    <div className='group-hover/about:bg-black group-hover/about:bg-opacity-[0.3] transition-all absolute top-0 left-0 right-0 bottom-0 flex items-center'>
                      <span className='group-hover/about:underline w-fit mx-[auto] transition-all text-white font-semibold text-[18px] group-hover/des:underline'>
                        Mekong River Cruises
                      </span>
                    </div>
                  </Link>

                  <Link
                    href='/extras/hotel-booking'
                    className='group/about relative h-[110px] flex-1'
                  >
                    <Image
                      src={HotelBookingImage}
                      alt='about-image'
                      className='w-full h-full object-cover'
                    />
                    <div className='group-hover/about:bg-black group-hover/about:bg-opacity-[0.3] transition-all absolute top-0 left-0 right-0 bottom-0 flex items-center'>
                      <span className='group-hover/about:underline w-fit mx-[auto] transition-all text-white font-semibold text-[18px] group-hover/des:underline'>
                        Hotel Booking
                      </span>
                    </div>
                  </Link>

                  <Link
                    href='/extras/extra-service'
                    className='relative group/about h-[110px] flex-1'
                  >
                    <Image
                      src={ExtraServiceImage}
                      alt='about-image'
                      className='w-full h-full object-cover'
                    />
                    <div className='group-hover/about:bg-black group-hover/about:bg-opacity-[0.3] transition-all absolute top-0 left-0 right-0 bottom-0 flex items-center'>
                      <span className='group-hover/about:underline w-fit mx-[auto] transition-all text-white font-semibold text-[18px] group-hover/des:underline'>
                        Extra Service
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
              {/* End extra popover */}
            </div>
            <div role='button' className='flex gap-2 items-center'>
              <p className='text-[16px]'>Responsible</p>
              <Image src={DownArrowBlackImage} alt='down-arrow' />
            </div>
            <div className='relative group h-full flex items-center'>
              <div role='button' className='flex gap-2 items-center'>
                <p className='text-[16px]'>About</p>
                <Image src={DownArrowBlackImage} alt='down-arrow' />
              </div>

              {/* About popover */}
              <div className='transition-all z-10 absolute w-[680px] top-[60px] translate-x-[-10rem] hidden group-hover:flex justify-between bg-white p-4 border-t-[4px] border-t-[#0066B3]'>
                <div className='max-w-[200px]'>
                  <Image src={LogoColorImage} alt='logo' className='' />
                  <p className='mt-4 font-extralight text-[14px]'>
                    Threeland Travel has been one of leading DMCs in Indochina
                    for nearly 2 decades. In each country we operate, we’ve
                    curated in-depth and customized tours that uncover the most
                    authentic part of each destination while ensuring top-notch
                    ground services.
                  </p>
                </div>
                <div className='flex-1 max-w-[423px]'>
                  <div role='button' className='group/about h-[120px]'>
                    <Link
                      href='/about/who-we-are'
                      className='relative transition-all w-full h-full flex items-center justify-center'
                    >
                      <Image src={WhoWeAreImage} alt='who-we-are' />
                      <div className='flex items-center absolute top-0 left-0 bottom-0 right-0 group-hover/about:bg-black group-hover/about:bg-opacity-[0.3] transition-all'>
                        <span className='transition-all mx-auto text-white font-semibold text-[18px] group-hover/about:underline'>
                          WHO WE ARE
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className='flex justify-between mt-2'>
                    <Link
                      href='/about/portfolio'
                      className='group/about relative h-[110px] w-[136px]'
                    >
                      <Image
                        src={PortfolioImage}
                        alt='about-image'
                        className='w-full h-full object-cover'
                      />
                      <div className='group-hover/about:bg-black group-hover/about:bg-opacity-[0.3] transition-all absolute top-0 left-0 right-0 bottom-0 flex items-center'>
                        <span className='group-hover/about:underline w-fit mx-[auto] uppercase transition-all text-white font-semibold text-[18px] group-hover/des:underline'>
                          PORTFOLIO
                        </span>
                      </div>
                    </Link>

                    <Link
                      href='/about/why-us'
                      className='group/about relative h-[110px] w-[136px]'
                    >
                      <Image
                        src={WhyUsImage}
                        alt='about-image'
                        className='w-full h-full object-cover'
                      />
                      <div className='group-hover/about:bg-black group-hover/about:bg-opacity-[0.3] transition-all absolute top-0 left-0 right-0 bottom-0 flex items-center'>
                        <span className='group-hover/about:underline w-fit mx-[auto] uppercase transition-all text-white font-semibold text-[18px] group-hover/des:underline'>
                          WHY US
                        </span>
                      </div>
                    </Link>

                    <Link
                      href='/about/our-team'
                      className='relative group/about h-[110px] w-[136px]'
                    >
                      <Image
                        src={OurTeamImage}
                        alt='about-image'
                        className='w-full h-full object-cover'
                      />
                      <div className='group-hover/about:bg-black group-hover/about:bg-opacity-[0.3] transition-all absolute top-0 left-0 right-0 bottom-0 flex items-center'>
                        <span className='group-hover/about:underline w-fit mx-[auto] uppercase transition-all text-white font-semibold text-[18px] group-hover/des:underline'>
                          OUR TEAM
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              {/* End about popover */}
            </div>
            <div role='button' className='flex gap-2 items-center'>
              <Link href='/blogs' className='text-[16px] hover:underline'>
                Blog
              </Link>
            </div>
            <div role='button' className='flex gap-2 items-center'>
              <Link href='/contact-us' className='text-[16px] hover:underline'>
                Contact Us
              </Link>
            </div>
          </div>

          <div className='flex gap-1 items-center'>
            <div role='button' className='px-3'>
              <span>Login</span>
            </div>
            <div
              role='button'
              className='bg-[#0066B3] w-[112px] h-[48px] text-[white] rounded-[8px] flex items-center justify-center'
            >
              <span className='text-[16px]'>Sign up</span>
            </div>
          </div>
        </div>
      </header>

      <header className='flex min-[1300px]:hidden flex-col h-fit w-full bg-[white] text-[black]'>
        <div className='border-b border-[#f6f8fe] h-[69px] bg-[#0066B3]'>
          <div className='relative flex items-center h-full justify-between max-w-[1480px] mx-auto w-full px-[24px]'>
            <Image src={LogoImage} alt='logo' className='' />

            <Sheet>
              <SheetTrigger asChild>
                <div role='button'>
                  <Image src={MobileMenuImage} alt='mobile-menu' />
                </div>
              </SheetTrigger>
              <SheetContent className='bg-white flex flex-col'>
                <SheetHeader>
                  <SheetTitle>
                    <Image src={LogoColorImage} alt='logo' className='' />
                  </SheetTitle>
                </SheetHeader>
                <MobileMenu />
                <SheetFooter>
                  <div className='flex items-center gap-2'>
                    <Image src={EmailImage} alt='email-header' />
                    <p className='text-[14px]'>threeland@gmail.com</p>
                  </div>
                  <div className='flex items-center gap-2 mt-2'>
                    <Image src={PhoneImage} alt='phone-header' />
                    <p className='text-[14px]'>(+84)979-016-928</p>
                  </div>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
