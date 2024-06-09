import Banner from '@/components/pages/extras/banner';
import ExtrasHighlight from '@/components/pages/extras/highlight';
import Top10BestCruises from '@/components/pages/extras/top-best-cruises';
import React from 'react';

const Page = () => {
  return (
    <main className=''>
      {/* Banner Seciton */}
      <Banner />

      {/* Top 10 Best Cruise Section */}
      <Top10BestCruises />

      {/* Highlight Section */}
      <ExtrasHighlight />
    </main>
  );
};

export default Page;
