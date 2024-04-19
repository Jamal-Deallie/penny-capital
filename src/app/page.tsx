import dynamic from 'next/dynamic';
import { Suspense } from 'react';

import { nextImport } from '@/utils/nextImport';

const { Intro, Focuses, Clients, TeamIntro, Faqs } = {
  Intro: nextImport('Intro'),
  Focuses: nextImport('Focuses'),
  Clients: nextImport('Clients'),
  TeamIntro: nextImport('TeamIntro'),
  Faqs: nextImport('Faqs'),
};

const OldPenny = dynamic(() => import('@/components').then(mod => mod.Scene), {
  ssr: false,
});

export default function Home() {
  return (
    <main role='main' className='bg-primary text-primary-foreground relative'>
      <div className='lg:aspect-[17/9] aspect-[195/422] w-full relative pt-nav-height lg:pt-10'>
        <div className='grid-inner px-4 lg:px-10 mb-16 relative grid-rows-[auto] md:pt-12'>
          <div className='w-full lg:h-[55vw] lg:col-start-7 lg:col-end-13  col-span-full lg:row-start-1 row-start-2  lg:absolute'>
            <div className='w-full lg:h-full relative h-[75vw]'>
              <Suspense fallback={null}>
                <OldPenny />
              </Suspense>
            </div>
          </div>

          <div className='lg:col-span-6 col-span-full relative row-start-1 lg:mt-48'>
            <h1 className='title-lg md:text-center'>
              A Penny saved <br /> is a Penny earned
            </h1>
          </div>
          <p className='text-xl lg:text-2xl lg:col-start-1 lg:col-span-5 lg:pt-6 lg:pb-8 col-span-full md:text-center md:pb-6 relative lg:row-start-2 row-start-3'>
            Unlock growth potential. Invest in startups. High risk, high reward.
            Your gateway to venture capital.
          </p>

          <button className='lg:col-start-1 lg:col-end-4 group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-secondary md:px-6 text-secondary-foreground font-heading col-span-full lg:row-start-3 row-start-4 transition-colors hover:bg-accent hover:text-secondary duration-300 ease-in-out text-lg'>
            Explore Penny Capital
          </button>
        </div>
      </div>
      <Intro />
      <Focuses />
      <Clients />
      <TeamIntro />
      <Faqs />
    </main>
  );
}
