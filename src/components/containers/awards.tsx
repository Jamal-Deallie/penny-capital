import React from 'react';

import { awardItems } from '@/data/awardItems';

const Awards = () => {
  return (
    <section className='text-secondary-foreground px-4 lg:px-10 py-16 lg:py-24 grid-inner'>
      <h1 className='title-lg col-span-full lg:col-start-1 lg:col-end-10'>
        We have garnered numerous accolades, including Venture Capital Firm of
        the Year and Innovation Award
      </h1>

      <div className='col-span-full lg:col-start-5 lg:col-end-13 lg:pt-24 pt-16'>
        {awardItems.map(award => {
          return (
            <div key={award.id} className='pb-6'>
              <div className='grid-cols-7 grid md:gap-1'>
                <div className='lg:col-span-3 col-span-full'>
                  <p className='lg:text-lg text-base font-body'>
                    {award.award}
                  </p>
                </div>
                <div className='lg:col-span-3 col-span-full'>
                  <p className='lg:text-lg text-base font-body col-start-2 col-end-2'>
                    {award.title}
                  </p>
                </div>
                <div className='lg:col-span-1 col-span-full lg:justify-self-end'>
                  <p className='lg:text-lg text-base font-body'>{award.year}</p>
                </div>
              </div>
              <span className='bg-primary w-full h-[2px] block mt-1' />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Awards;
