'use client';

import { useFadeClipAnime } from '@/hooks';

import focusItems from '@/data/focusItems.json';

import { FocusCard } from '@/components';

const Focuses = () => {
  const fadeClipRef = useFadeClipAnime({ clipPath: 'bottom' });

  return (
    <div className='lg:pt-48 px-4 lg:px-10 lg:pb-24 py-16'>
      <div className='grid-inner'>
        <h1 className='title-lg lg:col-start-2 lg:col-end-12 col-span-full text-center leading-[1.15]'>
          We are devoted to catalyzing the next generation of innovation in
          sectors with promising prospects for the future
        </h1>
      </div>

      <div
        className='flex lg:pt-24 pt-16 w-fit justify-center mx-auto md:flex-col md:gap-10'
        ref={fadeClipRef}>
        {/* <div className='flex lg:w-[33%] aspect-[376/263] w-full md:mt-16'>
          <div className='min-h-full shrink-0 line'>
            <span className='bg-secondary inline-block w-[2px] h-full' />
          </div>
          <div className='lg:py-8 px-8'>
            <Icons.health className='h-14 w-14 inline-block' />
            <h2 className='title-sm leading-[1.25] lg:py-4 py-6'>Healthcare</h2>
            <p className='text-base lg:text-lg font-body'>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>

        <div className='flex lg:w-[33%] aspect-[376/263]'>
          <div className='min-h-full shrink-0'>
            <span className='bg-secondary inline-block w-[2px] h-full' />
          </div>
          <div className='lg:py-8 px-8'>
            <Icons.education className='h-14 w-14 inline-block' />
            <h2 className='title-sm leading-[1.25] lg:py-4 py-6'>Education</h2>
            <p className='text-base lg:text-lg font-body'>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>

        <div className='flex lg:w-[33%] aspect-[376/263]'>
          <div className='min-h-full shrink-0'>
            <span className='bg-secondary inline-block w-[2px] h-full line' />
          </div>
          <div className='lg:py-8 px-8'>
            <Icons.energy className='h-14 w-14 inline-block' />
            <h2 className='title-sm leading-[1.25] lg:py-4 py-6'>Energy</h2>
            <p className='text-base lg:text-lg font-body'>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div className='min-h-full shrink-0 md:hidden line'>
            <span className='bg-secondary inline-block w-[2px] h-full' />
          </div>
        </div> */}
        {/* <FocusCard className='[&>*:last-child>span]:hidden' />
        <FocusCard className='[&>*:last-child>span]:hidden' />
        <FocusCard /> */}
        {focusItems.map(item => (
          <FocusCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Focuses;
