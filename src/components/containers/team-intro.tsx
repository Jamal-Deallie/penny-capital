import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
type Props = {};

const TeamIntro = (props: Props) => {
  return (
    <div className='grid-inner py-16 lg:py-24 px-4 lg:px-10'>
      <div className='title-lg lg:col-span-6 col-span-full flex flex-col'>
        <h1 className='title-lg'>A wonderful serenity has</h1>
        <p className='text-base lg:text-lg font-body pt-8'>
          Consider now provided laughter boy landlord dashwood. Often voice and
          the spoke. No shewing fertile village equally prepare up females as
          an. That do a case a what plan hour of paid. Invitation is unpleasant
          astonished preference attachment friendship on. Did sentiments
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
      <figure className='h-auto aspect-square relative overflow-hidden col-span-3 md:mt-16'>
        <Image
          className='object-cover w-full h-auto'
          src='https://res.cloudinary.com/dtwk4dm3g/image/upload/v1710566366/penny_capital/airone_shot-of-a-group-of-businessmen-having-a-meeting-ar-2023-11-27-05-26-47-utc_vy4wad.jpg'
          alt='Penny Capital Business People Meeting or Clapping in Digital Marketing Seminar'
          width={0}
          height={0}
          sizes='100vw'
        />
      </figure>
      <figure className='h-auto aspect-square relative overflow-hidden col-span-3 md:mt-16'>
        <Image
          className='object-cover w-full h-auto'
          src='https://res.cloudinary.com/dtwk4dm3g/image/upload/v1710566366/penny_capital/airone_shot-of-a-group-of-businessmen-having-a-meeting-ar-2023-11-27-05-26-47-utc_vy4wad.jpg'
          alt='Penny Capital Business People Meeting or Clapping in Digital Marketing Seminar'
          width={0}
          height={0}
          sizes='100vw'
        />
      </figure>
      <figure className='h-auto aspect-square relative overflow-hidden col-span-3 md:hidden'>
        <Image
          className='object-cover w-full h-auto'
          src='https://res.cloudinary.com/dtwk4dm3g/image/upload/v1710566366/penny_capital/airone_shot-of-a-group-of-businessmen-having-a-meeting-ar-2023-11-27-05-26-47-utc_vy4wad.jpg'
          alt='Penny Capital Business People Meeting or Clapping in Digital Marketing Seminar'
          width={0}
          height={0}
          sizes='100vw'
        />
      </figure>
      <figure className='h-auto aspect-square relative overflow-hidden col-span-3 md:hidden'>
        <Image
          className='object-cover w-full h-auto'
          src='https://res.cloudinary.com/dtwk4dm3g/image/upload/v1710566366/penny_capital/airone_shot-of-a-group-of-businessmen-having-a-meeting-ar-2023-11-27-05-26-47-utc_vy4wad.jpg'
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
