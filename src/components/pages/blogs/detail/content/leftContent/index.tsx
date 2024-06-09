import DotSvg from '@/svg/dotSvg';
import Image from 'next/image';
// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Detail1 from '@/assets/images/blogs/detail1.jpg';
import Detail2 from '@/assets/images/blogs/detail2.jpg';
import Detail3 from '@/assets/images/blogs/detail3.jpg';
import Detail4 from '@/assets/images/blogs/detail4.jpg';
import Detail5 from '@/assets/images/blogs/detail5.jpg';

import TickSvg from '@/svg/tick';
import Facebook from '@/svg/facebookSocial';
import In from '@/svg/inSocial';
import Thread from '@/svg/threadSocial';
import Twister from '@/svg/twisterSocial';
import TeleIcon from '@/svg/teleIcon';

const Index = () => {
  return (
    <div className='lg:max-w-[1128px]'>
      <p className='leading-[35px] pb-10 text-justify'>
        Tasting coffee in Vietnam is an experience that we highly recommend to
        our readers. This simple drink is more than simply a source of energy
        for the day; it is an essential component of Vietnamese culture. The
        strong but delicious fragrance of freshly brewed coffee can be found on
        practically every street in Vietnam, whether at roadside vendors or
        trendy cafés. Vietnam has evolved into one of the world&apos;s leading
        suppliers of high-quality coffee. Vietnam has also perfected the process
        of roasting and brewing, and it now offers a variety of coffee varieties
        that are gaining appeal internationally. Vietnam was a French colony in
        the nineteenth century, and the French introduced coffee around 1850.
        Within a few years, coffee cultivation had spread throughout much of
        Vietnam. Initially, output was centered on poor-quality Robusta beans.
        After gaining independence, the Vietnamese adopted coffee as their own
        drink, enhanced quality by cultivating many species of coffee beans in
        Vietnam, and improved the production and export infrastructure. Today,
        Vietnam is the world&apos;s second-largest coffee producer, behind
        Brazil.
      </p>
      <div className='lr-[200px]'>
        <div className='h-[1px] bg-[#E9ECEF]' />
        <div className='py-5'>
          <p className='font-bold text-[24px]'>TABLE OF CONTENTS</p>
          <div className='flex mx-10 my-5'>
            <p className='text-[20px] w-[30px] h-[30px] rounded-[20px] bg-[#0066B3] text-[#FFF] text-center'>
              1
            </p>
            <p className='text-[20px] mx-5 text-[#0066B3]'>
              Tasting coffee in Vietnam
            </p>
          </div>
          <div className='flex mx-10 my-5'>
            <p className='text-[20px] w-[30px] h-[30px] text-[#FFF] rounded-[20px] bg-[#0066B3] text-center'>
              2
            </p>
            <div>
              <p className='text-[20px] mx-5 text-[#0066B3] mb-5'>
                Many of life&apos;s failures
              </p>
              <div className='mx-5 flex'>
                <div className='w-2 h-2 self-center'>
                  <DotSvg color='#0066B3' />
                </div>
                <p className='mx-5 text-[20px] text-[#0066B3]'>
                  Vietnamese Coffee: Discover the World&apos;s Best Coffee
                </p>
              </div>
              <div className='mx-5 flex'>
                <div className='w-2 h-2 self-center'>
                  <DotSvg color='#0066B3' />
                </div>
                <p className='mx-5 text-[20px] text-[#0066B3]'>
                  Tasting coffee in Vietnam is an experience
                </p>
              </div>
            </div>
          </div>
          <div className='flex mx-10 my-5'>
            <p className='text-[20px] w-[30px] h-[30px] text-[#FFF] rounded-[20px] bg-[#0066B3] text-center'>
              3
            </p>
            <p className='text-[20px] mx-5 text-[#0066B3]'>
              Tasting coffee in Vietnam
            </p>
          </div>
        </div>
        <div className='h-[1px] bg-[#E9ECEF]' />
      </div>
      <div>
        <p className='text-[25px] font-bold leading-[40px] py-10 w-3/4'>
          Many of life&apos;s failures are people who did not realize how close
          they were to success when they gave up.
        </p>
        <p className='text-[16px] leading-[25px] pb-8'>
          Quickly monetize synergistic portals via efficient e-commerce.
          Phosfluorescently reinvent frictionless intellectual capital vis-a-vis
          an expanded array of niches. Efficiently provide access to interactive
          scenarios vis-a-vis bleeding-edge value. Energistically maximize
          premium meta-services and multifunctional collaboration and
          idea-sharing. Dramatically unleash front-end value after
          out-of-the-box opportunities. Energistically streamline magnetic
          action items after global markets. Collaboratively scale
          backward-compatible leadership skills and 24/7 best practices.
          Objectively exploit emerging methodologies vis-a-vis functionalized
          ideas. Energistically reconceptualize out-of-the-box innovation
          vis-a-vis cooperative methods of empowerment. Uniquely foster
          revolutionary value whereas accurate communities.
        </p>
        <p className='text-[16px] leading-[25px]'>
          Conveniently engineer robust experiences after performance based
          initiatives. Credibly communicate strategic technology whereas turnkey
          functionalities. Professionally re-engineer magnetic markets for
          highly efficient functionalities. Efficiently fabricate user friendly
          opportunities for backward-compatible experiences. Competently scale
          team building relationships through real-time solutions.
        </p>
        <div>
          <div className='flex gap-5 h-auto max-h-[380px] py-5 max-w-full'>
            <div className='max-w-1/2'>
              <Image
                src={Detail1}
                alt='duration'
                className='flex-1 object-cover h-full'
              />
            </div>
            <div className='max-w-1/2'>
              <Image
                src={Detail2}
                alt='duration'
                className='flex-1 object-cover h-full'
              />
            </div>
          </div>
          <div className='flex gap-5 h-auto max-h-[380px] pb-5 w-full'>
            <div className='max-w-3/4'>
              <Image
                src={Detail3}
                alt='duration'
                className='object-cover h-full'
              />
            </div>
            <div className='max-w-1/3'>
              <Image
                src={Detail4}
                alt='duration'
                className='object-cover h-full'
              />
            </div>
          </div>
        </div>
        <p className='text-[16px] leading-[33px]'>
          Sit dis sed ante integer ullamcorper vel donec tellus a. Nisi vici
          vulputate elit quis adipiscing aenean imperdiet justo varius. Vel eget
          luctus a sem pede sit metus nulla maecenas. Etiam eleifend curabitur
          lorem. Viverra faucibus sem ultricies vitae etiam quam id feugiat in
          tellus vici ut. Tellus quam varius commodo luctus aliquam nec amet
          nullam quis viverra sit fringilla consectetuer.
        </p>
        <div className='py-5'>
          <div className='flex py-2'>
            <TickSvg />
            <p className='px-3 text-[16px] italic font-bold'>
              Ultricies sit semper leo dolor maecenas.
            </p>
          </div>
          <div className='flex py-2'>
            <TickSvg />
            <p className='px-3 text-[16px] italic font-bold'>
              Magnis nam penatibus justo nec quis eget amet venenatis integer
              rutrum eleifend commodo tincidunt.
            </p>
          </div>
          <div className='flex py-2'>
            <TickSvg />
            <p className='px-3 text-[16px] italic font-bold'>
              Aenean nunc pretium lorem ullamcorper leo.
            </p>
          </div>
          <div className='flex py-2'>
            <TickSvg />
            <p className='px-3 text-[16px] italic font-bold'>
              Nec arcu ullamcorper lorem mus eu.
            </p>
          </div>
          <div className='flex py-2'>
            <TickSvg />
            <p className='px-3 text-[16px] italic font-bold'>
              Elit natoque mollis quisque..
            </p>
          </div>
        </div>
        <p className='text-[16px] leading-[33px] pb-5'>
          Sit dis sed ante integer ullamcorper vel donec tellus a. Nisi vici
          vulputate elit quis adipiscing aenean imperdiet justo varius. Vel eget
          luctus a sem pede sit metus nulla maecenas. Etiam eleifend curabitur
          lorem. Viverra faucibus sem ultricies vitae etiam quam id feugiat in
          tellus vici ut. Tellus quam varius commodo luctus aliquam nec amet
          nullam quis viverra sit fringilla consectetuer.
        </p>
        <p className='text-[16px] leading-[33px] pb-5'>
          Sociis consequat adipiscing sit curabitur donec sem luctus cras
          natoque vulputate dolor eget dapibus. Nec vitae eros ullamcorper
          laoreet dapibus mus ac ante viverra. A aenean sit augue curabitur et
          parturient nisi sed enim. Nulla nec quis sit quisque sem commodo
          ultricies neque. Lorem eget venenatis dui ante luctus ultricies tellus
          montes. Quis in sapien tempus.
        </p>
        <Image
          src={Detail3}
          alt='duration'
          className='flex-3 h-[600px] object-cover pb-5'
        />
        <p className='text-[16px] leading-[33px] pb-5'>
          Sociis consequat adipiscing sit curabitur donec sem luctus cras
          natoque vulputate dolor eget dapibus. Nec vitae eros ullamcorper
          laoreet dapibus mus ac ante viverra. A aenean sit augue curabitur et
          parturient nisi sed enim. Nulla nec quis sit quisque sem commodo
          ultricies neque. Lorem eget venenatis dui ante luctus ultricies tellus
          montes. Quis in sapien tempus.
        </p>
        <div className='grid grid-cols-3 gap-5'>
          <Image src={Detail5} alt='duration' className='h-full object-cover' />
          <Image src={Detail5} alt='duration' className='h-full object-cover' />
          <Image src={Detail5} alt='duration' className='h-full object-cover' />
        </div>
      </div>
      <div className='h-[1px] bg-[#E9ECEF] my-10' />
      <div className='flex gap-4 flex-wrap'>
        <p className='text-[24px] font-semibold pr-5'>Share: </p>
        <div className='self-center flex bg-[#3B5998] h-[48px] px-7 rounded-[4px]'>
          <div className='w-[24px] h-[24px] self-center bg-[#FFF] p-[7.5px] rounded-[20px]'>
            <Facebook />
          </div>
          <p className='text-[#FFF] text-[18px] self-center font-bold px-3'>
            Shares
          </p>
          <p className='text-[#FFF] text-[18px] self-center '>636</p>
        </div>
        <div className='self-center flex bg-[#00ACED] h-[48px] px-7 rounded-[4px]'>
          <div className='self-center pr-5 rounded-[20px]'>
            <Twister />
          </div>
          <p className='text-[#FFF] text-[18px] self-center '>636</p>
        </div>
        <div className='self-center flex bg-[#FF0000] h-[48px] px-7 rounded-[4px]'>
          <div className='w-[24px] h-[24px] self-center bg-[#FFF] p-[7.5px] rounded-[20px]'>
            <Thread />
          </div>
          <p className='text-[#FFF] text-[18px] self-center font-bold px-3'>
            Shares
          </p>
          <p className='text-[#FFF] text-[18px] self-center '>636</p>
        </div>
        <div className='self-center flex bg-[#007BB6] h-[48px] px-7 rounded-[4px]'>
          <div className=' self-center pr-5 rounded-[20px]'>
            <In />
          </div>
          <p className='text-[#FFF] text-[18px] self-center '>636</p>
        </div>
      </div>
      <div className='flex my-8 gap-2 sm:gap-5'>
        <input
          type='text'
          placeholder='Enter comment'
          className='h-[70px] w-full rounded-[4px] px-2 pl-9 border-[1px] border-[#CDD0D0]'
        />
        <div
          role='button'
          className='bg-[#0066B3] min-w-[70px] h-[70px] text-[white] rounded-[8px] flex items-center justify-center'
        >
          <TeleIcon />
        </div>
      </div>
      <div
        role='button'
        className='bg-[#0066B3] h-[70px] text-[white] rounded-[8px] flex items-center justify-center'
      >
        <p className='sm:text-[24px] sm:tracking-[5px] tracking-[3px]'>
          VIEW COMMENTS (0)
        </p>
      </div>
    </div>
  );
};

export default Index;
