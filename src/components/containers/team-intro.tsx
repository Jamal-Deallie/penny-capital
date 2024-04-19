'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useImageRevealAnime } from '@/hooks';

const TeamIntro = () => {
  const imageRef = useImageRevealAnime();
  return (
    <div
      className='grid-inner py-16 lg:py-24 px-4 lg:px-10 lg:gap-y-10'
      ref={imageRef}>
      <div className='title-lg lg:col-span-6 col-span-full flex flex-col'>
        <h1 className='title-lg'>
          Our Team Values Innovation and Collaboration
        </h1>
        <p className='text-base lg:text-lg font-body pt-8'>
          Our team of dedicated professionals are driven by innovation and
          collaboration. Our culture fosters growth, encourages creative
          problem-solving, and values strong relationships. We are committed to
          empowering the future of Education, Healthcare, and Energy sectors
          through strategic investments.
        </p>
        <div className='w-fit overflow-hidden'>
          <Link
            href='/'
            role='link'
            className='relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 font-body leading-none text-base lg:text-lg mb-8  pb-1 hover:text-accent'>
            Meet The Team
          </Link>
        </div>
      </div>
      <figure className='h-auto aspect-square relative overflow-hidden col-span-3 md:mt-16 img-target'>
        <Image
          className='object-cover w-full h-auto'
          src='/images/this-is-going-to-be-a-difficult-one.webp'
          alt='Penny Capital Business People Meeting or Clapping in Digital Marketing Seminar'
          width={0}
          height={0}
          sizes='100vw'
        />
      </figure>
      <figure className='h-auto aspect-square relative overflow-hidden col-span-3 md:mt-16 img-target'>
        <Image
          className='object-cover w-full h-auto'
          src='/images/one-team-committed-to-the-dream-portrait.webp'
          alt='Penny Capital Business People Meeting or Clapping in Digital Marketing Seminar'
          width={0}
          height={0}
          sizes='100vw'
        />
      </figure>
      <figure className='h-auto aspect-square relative overflow-hidden col-span-3 md:hidden img-target'>
        <Image
          className='object-cover w-full h-auto'
          src='/images/everyones-input-is-valuable.webp'
          alt='Penny Capital Business People Meeting or Clapping in Digital Marketing Seminar'
          width={0}
          height={0}
          sizes='100vw'
        />
      </figure>
      <figure className='h-auto aspect-square relative overflow-hidden col-span-3 md:hidden img-target'>
        <Image
          className='object-cover w-full h-auto'
          src='/images/high-angle-shot-of-a-group-of-businesspeople.webp'
          alt='Penny Capital Business People Meeting or Clapping in Digital Marketing Seminar'
          width={0}
          height={0}
          sizes='100vw'
        />
      </figure>
    </div>
  );
};

export default TeamIntro;
