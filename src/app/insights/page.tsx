import {insightItems} from '@/data/insightItems';

import { InsightCard } from '@/components';
import { Suspense } from 'react';

const InsightsPage = () => {
  return (
    <main className='min-h-screen bg-primary px-4 lg:px-10 pt-nav-height'>
      <div className='grid-inner pt-16'>
        <h1 className='col-span-full lg:col-span-9 title-lg'>
          Penny Capital provides valuable insights for startup success and
          growth
        </h1>
      </div>
      <Suspense>
        <div className='grid-inner py-16 lg:py-24 gap-y-12'>
          {insightItems.map(insight => (
            <InsightCard
              key={insight.id}
              date={insight.date}
              title={insight.title}
              summary={insight.summary}
            />
          ))}
        </div>
      </Suspense>
    </main>
  );
};

export default InsightsPage;
