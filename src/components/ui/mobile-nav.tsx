'use client';
import { useRef, useEffect } from 'react';
import { useStore } from '@/lib/store';
import { usePathname, useSearchParams } from 'next/navigation';
import { NavLink } from '@/components';
import { siteConfig } from '@/constants/config';
import { cn } from '@/utils/cn';

const MobileNav = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [navIsOpen, setNavIsOpen] = useStore(({ navIsOpen, setNavIsOpen }) => [
    navIsOpen,
    setNavIsOpen,
  ]);

  const toggleNav = () => {
    setNavIsOpen(!navIsOpen);
  };

  useEffect(() => {
    setNavIsOpen(false);
  }, [pathname, searchParams]);

  return (
    <>
      <button
        onClick={toggleNav}
        aria-label='toggle navigation'
        className='inline-block cursor-pointer h-8 z-50 top-5 right-4 lg:left-10 fixed lg:hidden box-content'>
        <svg
          className='relative h-full w-full'
          viewBox='0 0 384 276'
          xmlns='http://www.w3.org/2000/svg'>
          <line
            className={cn(
              'stroke-accent stroke-[24px]',
              navIsOpen ? 'stroke-accent ' : 'stroke-primary'
            )}
            x1='16'
            y1='17'
            x2='368'
            y2='17'
          />
          <line
            className={cn(
              ' stroke-accent stroke-[24px]',
              navIsOpen ? 'stroke-accent ' : 'stroke-primary'
            )}
            x1='16'
            y1='139.2'
            x2='368'
            y2='139.2'
          />
          <line
            className={cn(
              ' stroke-[24px]',
              navIsOpen ? 'stroke-accent ' : 'stroke-primary'
            )}
            x1='16'
            y1='261'
            x2='368'
            y2='261'
          />
        </svg>
      </button>
      <nav
        className={cn(
          'flex md:flex-col gap-12 h-full items-center lg:pt-2 lg:w-fit w-full bg-secondary md:h-screen md:fixed md:top-0 md:left-0 md:right-0  md:py-16 lg:[clip-path:polygon(0_0,_100%_0,_100%_100%,_0_100%)]',
          navIsOpen
            ? ' md:duration-700 ease-in-out md:[clip-path:polygon(0_0,_100%_0,_100%_100%,_0_100%)] transition-[clip-path]'
            : ' md:duration-700   md:ease-in-out  md:[clip-path:polygon(0_0,_100%_0,_100%_0,_0_0)] transition-[clip-path]'
        )}>
        {siteConfig.primaryLinks.map((item, index) => {
          return (
            <NavLink
              key={index}
              href={item.href}
              className='block text-lg text-center capitalize font-heading leading-none md:text-3xl'
              unmatchedClass='text-secondary-foreground hover:text-accent transition duration-200 ease-in'
              matchedClass='text-accent hover:text-primary transition duration-200 ease-in'>
              {item.label}
            </NavLink>
          );
        })}
      </nav>
    </>
  );
};

export default MobileNav;
