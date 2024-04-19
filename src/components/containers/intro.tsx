'use client';
import Image from 'next/image';

import { useImageRevealAnime } from '@/hooks';

const Intro = () => {
  const imageRef = useImageRevealAnime();
  return (
    <div className='pt-16 lg:pt-48'>
      <div className='grid-inner px-4 lg:px-10'>
        <h1 className='title-lg lg:col-span-9 col-span-full fade-target md:leading-none'>
          Penny Capital nurtures transformative ideas that promise not only
          financial returns but also a positive societal impact
        </h1>
      </div>
      <div className='grid-inner lg:pt-32 md:pt-10' ref={imageRef}>
        <figure className='img-target h-auto aspect-[61/32] relative overflow-hidden col-span-full lg:col-span-6'>
          <Image
            className='object-cover w-full h-auto'
            src='/images/business-people-meeting-or-clapping-in-digital.webp'
            alt='Penny Capital Business People Meeting or Clapping in Digital Marketing Seminar'
            width={0}
            height={0}
            sizes='100vw'
          />
        </figure>
        <figure className='img-target h-auto aspect-[61/32] relative overflow-hidden col-span-full lg:col-span-6 [clip-path:polygon(0_100%,_100%_100%,_100%_100%,_0_100%)] md:hidden'>
          <Image
            className='object-cover w-full h-auto'
            src='/images/diverse-business-people-applauding-with-joy.webp'
            alt='Penny Capital Business People Meeting or Clapping in Digital Marketing Seminar'
            width={0}
            height={0}
            sizes='100vw'
          />
        </figure>
      </div>
    </div>
  );
};

export default Intro;
