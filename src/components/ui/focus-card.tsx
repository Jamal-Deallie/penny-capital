import Image from 'next/image';
import React from 'react';

import { cn } from '@/utils/cn';

type CardProps = {
  className?: string;
  src: string;
  description: string;
  focus: string;
};

const FocusCard = ({ className, src, focus, description }: CardProps) => {
  return (
    <div className={cn('flex lg:w-[33%] aspect-[376/263]', className)}>
      <div className='min-h-full shrink-0'>
        <span className='bg-secondary inline-block w-[2px] h-full line-target' />
      </div>
      <div className='lg:py-8 px-8 fade-target'>
        <figure className='h-14 relative w-14'>
          <Image
            className='object-cover w-full h-auto'
            src={src}
            alt={focus}
            width={0}
            height={0}
            sizes='100vw'
          />
        </figure>
        <h2 className='title-sm leading-[1.25] lg:py-4 py-6'>{focus}</h2>
        <p className='text-base lg:text-lg font-body'>{description}</p>
      </div>
      <div className='min-h-full shrink-0 md:hidden'>
        <span className='bg-secondary inline-block w-[2px] h-full line-target' />
      </div>
    </div>
  );
};

export default FocusCard;
