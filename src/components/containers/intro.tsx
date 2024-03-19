'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP, gsap, ScrollTrigger } from '@/lib/gsap';

const Intro = () => {
  const root = useRef(null);
  // .to('.menu', {
  //   duration: 1,
  //   clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
  //   ease: 'power2.out',
  // })

  useGSAP(
    () => {
      if (!root.current) return;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: 'clamp(top center)',
          end: 'clamp(+=50%)',
          markers: true,
          scrub: 1,
        },
      });
      const images = gsap.utils.toArray('.img-clip', root.current);
      // console.log(images);
      tl.to('.opacity-0', {
        duration: 1.2,
        opacity: 1,
        ease: 'sine.out',
      }).to(images, {
        // clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        ease: 'power2.out',
        stagger: 0.5,
      });
    },
    { scope: root }
  );

  // [clip-path:polygon(0_100%,_100%_100%,_100%_100%,_0_100%)]
  return (
    <div className='pt-16 lg:pt-24' ref={root}>
      <div className='grid-inner px-4 lg:px-10'>
        <h1 className='title-lg lg:col-span-9 opacity-0 col-span-full'>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts
        </h1>
      </div>
      <div className='grid-inner lg:pt-32'>
        <figure className='img-clip h-auto aspect-[61/32] relative overflow-hidden col-span-full lg:col-span-6'>
          <Image
            className='object-cover w-full h-auto'
            src='https://res.cloudinary.com/dtwk4dm3g/image/upload/v1710386787/penny_capital/penny_business-people-meeting-or-clapping-in-digital-ma-2023-11-27-05-17-32_rpmfut.webp'
            alt='Penny Capital Business People Meeting or Clapping in Digital Marketing Seminar'
            width={0}
            height={0}
            sizes='100vw'
          />
        </figure>
        <figure className='img-clip h-auto aspect-[61/32] relative overflow-hidden col-span-full lg:col-span-6 [clip-path:polygon(0_100%,_100%_100%,_100%_100%,_0_100%)]'>
          <Image
            className='object-cover w-full h-auto'
            src='https://res.cloudinary.com/dtwk4dm3g/image/upload/v1710386787/penny_capital/penny_business-people-meeting-or-clapping-in-digital-ma-2023-11-27-05-17-32_rpmfut.webp'
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
