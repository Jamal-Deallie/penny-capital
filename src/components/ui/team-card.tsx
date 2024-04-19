import Image from 'next/image';
import { IEmployee } from '@/data';
import { Icons } from '@/components';

type TeamCardProps = Omit<IEmployee, 'id'>;

const TeamCard = ({ imgSrc, name, bio, department, title }: TeamCardProps) => {
  return (
    <div className='lg:col-span-4 col-span-full overflow-hidden relative group pb-6'>
      <div className='relative overflow-hidden aspect-[700/467] bg-transparent lg:w-full'>
        <figure className='h-auto aspect-[8/12] relative overflow-hidden col-span-full lg:col-span-6'>
          <Image
            className='object-cover w-full h-auto'
            src={imgSrc}
            alt={name}
            width={0}
            height={0}
            sizes='100vw'
          />
        </figure>
      </div>
      <div className='relative mt-4 z-[1] flex gap-1 justify-center'>
        <p className='text-base text-black font-heading leading-none group-hover:text-primary transition-colors lg:text-lg delay-75'>
          {name}
        </p>
        <span className='text-lg text-black font-heading leading-none group-hover:text-primary transition-colors lg:text-xl delay-75'>
          -
        </span>
        <p className='text-base text-black font-heading leading-none group-hover:text-primary transition-colors lg:text-lg delay-75'>
          {title}
        </p>
      </div>
      <div
        className='absolute inset-0 h-full w-full ease-out img-clip group-hover:clip-full motion-safe:transition-[clip-path] motion-safe:duration-500 lg:px-8 lg:pt-10 md:pt-8 md:px-6 bg-secondary'
        aria-hidden='true'>
        <div>
          <span className='text-base lg:text-xl text-primary block font-heading'>
            {bio}
          </span>
          <div className='pt-8'>
            <span className='text-base lg:text-xl text-primary inline-block font-heading'>
              Department - {department}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
