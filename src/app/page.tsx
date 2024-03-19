import Image from 'next/image';
import { nextImport } from '@/utils/nextImport';

const { Intro, Services, Clients, TeamIntro, Faqs } = {
  Intro: nextImport('Intro'),
  Services: nextImport('Services'),
  Clients: nextImport('Clients'),
  TeamIntro: nextImport('TeamIntro'),
  Faqs: nextImport('Faqs'),
};

export default function Home() {
  return (
    <main role='main' className='bg-primary text-primary-foreground'>
      <div className='aspect-[17/9] w-full pt-nav-height'>
        <div className='grid-inner lg:mt-20 mt-16 mb-16 px-4 lg:px-10 '>
          <div className='lg:col-span-9 col-span-full'>
            <h1 className='title-lg md:text-center'>
              A Penny saved <br /> is a Penny earned
            </h1>
          </div>

          <p className='text-base lg:text-xl lg:col-span-4 pt-6 lg:pb-8 col-span-full md:text-center md:pb-6'>
            Unlock growth potential. Invest in startups. High risk, high reward.
            Your gateway to venture capital.
          </p>
          <button className='lg:col-start-1 lg:col-end-3 group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-secondary md:px-6 text-secondary-foreground font-heading col-span-full'>
            Hover me
          </button>
        </div>
      </div>
      <Intro />
      <Services />
      <Clients />
      <TeamIntro />
      <Faqs />
    </main>
  );
}
