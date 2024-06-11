import React from 'react';
import Banner from '@/components/pages/extras/banner';
import BestTourInHalong from '@/components/pages/extras/best-tour-in-halong';
import ExtrasHighlight from '@/components/pages/extras/highlight';
import Top10BestCruises from '@/components/pages/extras/top-best-cruises';
import YouAreUnique from '@/components/pages/extras/you-are-unique';
import ViewedArticles from '@/components/pages/blogs/viewed-articles';
import GotQuestion from '@/components/pages/destination/got-question';

const Page = () => {
  return (
    <main className=''>
      {/* Banner Seciton */}
      <Banner />

      {/* Top 10 Best Cruise Section */}
      <Top10BestCruises />

      {/* Highlight Section */}
      <ExtrasHighlight />

      {/* Best Tour In Halong Bay Section */}
      <BestTourInHalong />

      {/* You Are Unique Section */}
      <YouAreUnique />

      {/* Extras Blogs Section */}
      <ViewedArticles title='Halong Bay Travel Guide & News' />

      {/* Got A Question Section */}
      <GotQuestion />
    </main>
  );
};

export default Page;
