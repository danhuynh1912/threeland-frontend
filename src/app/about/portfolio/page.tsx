import React from 'react';
import ThreelandPortfolio from '@/components/pages/portfolio/threeland-portfolio';
import OurPortfolio from '@/components/pages/portfolio/our-portfolio';
import OurMilestones from '@/components/pages/portfolio/our-milestones';

const Page = () => {
  return (
    <main>
      {/* Threeland Portfolio Section */}
      <ThreelandPortfolio />

      {/* Our Portfolio Section */}
      <OurPortfolio />

      {/* Out Milestones */}
      <OurMilestones />
    </main>
  );
};

export default Page;
