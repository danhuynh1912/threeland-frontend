import React from 'react';
import OurJourney from '@/components/pages/who-we-are/our-journey';
import OurBeyond from '@/components/pages/who-we-are/our-beyond';
import OurRegional from '@/components/pages/who-we-are/our-regional';
import OurCoporate from '@/components/pages/who-we-are/our-coporate';

const Page = () => {
  return (
    <main>
      {/* Our Journey Section */}
      <OurJourney />

      {/* Our Beyond Section */}
      <OurBeyond />

      {/* Our Regional Section  */}
      <OurRegional />

      {/* Our Coporate Section */}
      <OurCoporate />
    </main>
  );
};

export default Page;
