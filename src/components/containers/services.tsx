import React from 'react';
import { Icons } from '@/components';
const Services = () => {
  return (
    <div className='lg:pt-48 px-4 lg:px-10 lg:pb-24 py-16'>
      <div className='grid-inner'>
        <h1 className='title-lg lg:col-start-2 lg:col-end-12 col-span-full text-center leading-[1.15]'>
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings of spring which I enjoy with
        </h1>
      </div>

      <div className='flex lg:pt-24 w-fit justify-center gap-10 mx-auto md:flex-col'>
        <div className='flex lg:w-[27.5vw] aspect-[376/263] w-full md:mt-16'>
          <div className='min-h-full shrink-0'>
            <span className='bg-secondary inline-block w-[2px] h-full' />
          </div>
          <div className='lg:py-8 pl-8'>
            <Icons.health className='h-14 w-14 inline-block' />
            <h2 className='title-sm leading-[1.25] lg:py-4 py-6'>Healthcare</h2>
            <p className='text-base lg:text-lg font-body'>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>

        <div className='flex lg:w-[27.5vw] aspect-[376/263]'>
          <div className='min-h-full shrink-0'>
            <span className='bg-secondary inline-block w-[2px] h-full' />
          </div>
          <div className='lg:py-8 pl-8'>
            <Icons.education className='h-14 w-14 inline-block' />
            <h2 className='title-sm leading-[1.25] lg:py-4 py-6'>Education</h2>
            <p className='text-base lg:text-lg font-body'>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>

        <div className='flex lg:w-[27.5vw] aspect-[376/263]'>
          <div className='min-h-full shrink-0'>
            <span className='bg-secondary inline-block w-[2px] h-full' />
          </div>
          <div className='lg:py-8 pl-8'>
            <Icons.energy className='h-14 w-14 inline-block' />
            <h2 className='title-sm leading-[1.25] lg:py-4 py-6'>Energy</h2>
            <p className='text-base lg:text-lg font-body'>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
