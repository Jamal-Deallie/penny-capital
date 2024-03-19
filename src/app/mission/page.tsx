import Image from 'next/image';
import { nextImport } from '@/utils/nextImport';

const { About, Stats, Awards } = {
  About: nextImport('About'),
  Stats: nextImport('Stats'),
  Awards: nextImport('Awards'),
};

export default function MissionPage() {
  return (
    <main role='main' className='bg-primary text-primary-foreground pt-nav-height'>
      <About />
      <div className='bg-secondary text-secondary-foreground '>
        <Stats />
        <div className='lg:h-auto lg:aspect-[250/119] relative lg:text-primary-foreground w-full'>
          <div className='grid-inner z-10 relative px-4 lg:px-10 pt-16  md:pb-10 lg:py-24'>
            <h1 className='title-lg lg:col-span-6 col-span-full'>
              A message from leadership
            </h1>
            <p className='lg:text-lg text-base font-body col-span-full lg:col-start-1 lg:col-end-6 lg:pt-20 pt-10'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Praesentium obcaecati laboriosam voluptatem sint soluta vitae?
              Ipsa animi odit ad voluptate molestiae vero, suscipit alias
              nostrum sed commodi earum fuga unde tenetur excepturi ratione
              obcaecati sapiente recusandae ipsam voluptatem ea natus.
            </p>
          </div>
          <figure className='h-auto relative aspect-[250/119] w-full lg:absolute overflow-hidden lg:top-0 lg:left-0 lg:right-0'>
            <Image
              className='object-cover w-full h-auto'
              src='https://res.cloudinary.com/dtwk4dm3g/image/upload/v1710620031/penny_capital/penny-ceo-2023-11-27-05-26-38_gmyipi.webp'
              alt='Penny Capital CEO'
              width={0}
              height={0}
              sizes='100vw'
            />
          </figure>
        </div>
        <Awards />
      </div>
    </main>
  );
}
