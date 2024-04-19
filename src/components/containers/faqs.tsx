'use client';
import { useFadeAnime } from '@/hooks';
import faqs from '@/data/faqs.json';

import { AccordionGroup } from '@/components';

const Faqs = () => {
  const fadeRef = useFadeAnime();
  return (
    <div className='grid-inner relative bg-secondary lg:py-24 py-16 px-4 lg:px-10'>
      <div className='lg:pt-nav-height lg:col-start-3 lg:col-end-11 col-span-full'>
        <h1 className='title-lg text-primary text-center'>
          Explore our answers to your questions
        </h1>
      </div>
      <div
        className='pt-16 lg:pt-32 lg:col-start-3 lg:col-end-11 col-span-full'
        ref={fadeRef}>
        <AccordionGroup data={faqs} />
      </div>
    </div>
  );
};

export default Faqs;
