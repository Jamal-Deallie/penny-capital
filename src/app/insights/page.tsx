import React from 'react';
import { InsightCard } from '@/components';
type Props = {};

const InsightsPage = (props: Props) => {
  return (
    <main className='min-h-screen bg-primary px-4 lg:px-10 pt-nav-height'>
      <div className='grid-inner pt-16'>
        <h1 className='col-span-full lg:col-span-9 title-lg'>
          Penny Capital provides valuable insights for startup success and
          growth
        </h1>
      </div>
      <div className='grid-inner py-16 lg:py-24'>
        <InsightCard />
      </div>
    </main>
  );
};

export default InsightsPage;
