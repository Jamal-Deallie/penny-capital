import React from 'react';

type Props = {};

const Stats = () => {
  return (
    <section className='py-16 lg:py-24'>
      <div className='lg:px-10 px-4 grid-inner'>
        <h1 className='title-lg lg:col-span-10 col-span-full pb-16'>
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings of spring which I enjoy with my whole heart.
        </h1>

        <div className='lg:col-span-3 col-span-full lg:pt-16 lg:px-8 md:pb-16'>
          <span className='bg-primary w-full h-[2px] block' />

          <h2 className='title-lg lg:py-4 lg:pb-6 py-6 text-center'>$32b</h2>
          <p className='lg:text-lg text-base'>
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart.
          </p>
        </div>
        <div className='lg:col-span-3 col-span-full lg:pt-16 lg:px-8 md:pb-16'>
          <span className='bg-primary w-full h-[2px] block' />

          <h2 className='title-lg lg:py-4 pb-6 text-center lg:pb-6 py-6'>4</h2>
          <p className='lg:text-lg text-base'>
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart.
          </p>
        </div>
        <div className='lg:col-span-3 col-span-full lg:pt-16 lg:px-8 md:pb-16'>
          <span className='bg-primary w-full h-[2px] block' />

          <h2 className='title-lg lg:py-4 pb-6 text-center lg:pb-6 py-6'>
            $32b
          </h2>
          <p className='lg:text-lg text-base'>
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart.
          </p>
        </div>
        <div className='lg:col-span-3 col-span-full lg:pt-16 lg:px-8'>
          <span className='bg-primary w-full h-[2px] block' />

          <h2 className='title-lg lg:py-4 pb-6 text-center lg:pb-6 py-6'>4</h2>
          <p className='lg:text-lg text-base'>
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
