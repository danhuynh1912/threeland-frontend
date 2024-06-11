import React from 'react';

// components
import OurTeam from '@/components/pages/our-team/our-team-threeland';
import OurTeamLogo from '@/components/pages/our-team/our-team-logo';
import OurActivity from '@/components/pages/our-team/our-activities';

const Page = () => {
  return (
    <main>
        <OurTeam />

        <OurTeamLogo />

        <OurActivity />
    </main>
  );
};

export default Page;
