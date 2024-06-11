import Banner from '@/components/core/banner';
import FAQ from '@/components/pages/who-we-are/faq';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Threeland why us',
  applicationName: 'Threeland Travel',
  description: 'This is description about the page',
  keywords: ['travel', 'Vietnam', 'tour', 'destination'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* About Banner Section */}
      <Banner
        title='Talk to our local expert directly'
        titleWidth='974px'
        url='portfolio-banner.jpeg'
        defaultForm={false}
        isMobileFullScreen={false}
      >
        <div
          role='button'
          className='mt-4 bg-[#0066B3] text-[white] w-[201px] h-[48px] grid place-items-center rounded-[8px]'
        >
          <span>Get Free Advice Now</span>
        </div>
      </Banner>
      {children}
      {/* FAQ */}
      <FAQ />
    </>
  );
}
