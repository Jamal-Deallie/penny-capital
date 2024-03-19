import { Icons } from '@/components';
import Image from 'next/image';

type TeamCardProps = {
  src: string;
  name: string;
  bio: string;
  linkedInSrc?: string;
  email?: string;
  backgroundColor?: string;
};
const TeamCard = ({
  src,
  name,
  bio,
  linkedInSrc,
  backgroundColor,
}: TeamCardProps) => {
  return (
    <div className='lg:col-span-3 col-span-4 md:col-start-2 overflow-hidden relative group pb-6'>
      <div className='relative overflow-hidden aspect-[3/4] bg-transparent lg:w-full'>
        <figure className='h-auto aspect-[8/12] relative overflow-hidden col-span-full lg:col-span-6'>
          <Image
            className='object-cover w-full h-auto'
            src={src}
            alt='Penny Capital Business People Meeting or Clapping in Digital Marketing Seminar'
            width={0}
            height={0}
            sizes='100vw'
          />
        </figure>
      </div>
      <div className='relative mt-4 z-[1]'>
        <p className='text-center text-base text-secondary font-heading leading-none group-hover:text-primary transition-colors lg:text-lg delay-75'>
          {name}
        </p>
      </div>
      <div
        className={`absolute inset-0 h-full w-full ease-out [clip-path:circle(20%_at_120%_120%)] group-hover:[clip-path:circle(170%_at_120%_120%)] motion-safe:transition-[clip-path] motion-safe:duration-500 lg:px-8 lg:pt-10 md:pt-8 md:px-6 bg-secondary ${backgroundColor}`}
        aria-hidden='true'>
        <span className='text-base lg:text-lg text-primary'>{bio}</span>
        <div className='mt-8'>
          <Icons.linkedIn className='fill-primary h-10 w-10 md:w-8 md:h-8' />
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
