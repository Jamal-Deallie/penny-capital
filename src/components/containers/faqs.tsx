import React from 'react';
import faqs from '@/data/faqs.json';
import { AccordionGroup } from '@/components';
type Props = {};

const Faqs = () => {
  return (
    <div className='grid-inner relative bg-secondary lg:py-24 py-16 px-4 lg:px-10'>
      <div className='lg:pt-nav-height lg:col-start-3 lg:col-end-11 col-span-full'>
        <h1 className='title-lg text-primary text-center'>
          Possession of my entire soul, like these sweet mornings
        </h1>
      </div>
      <AccordionGroup data={faqs} />
    </div>
  );
};

export default Faqs;
