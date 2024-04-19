'use client';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

import { useStore } from '@/lib/store';
import { cn } from '@/utils/cn';

import { NavLink } from '@/components';

import { siteConfig } from '@/constants/config';
import { div } from 'three/examples/jsm/nodes/Nodes.js';

const MobileNav = () => {
  const pathname = usePathname();

  const [navIsOpen, setNavIsOpen] = useStore(({ navIsOpen, setNavIsOpen }) => [
    navIsOpen,
    setNavIsOpen,
  ]);

  const toggleNav = () => {
    setNavIsOpen(!navIsOpen);
  };

  useEffect(() => {
    setNavIsOpen(false);
  }, [pathname]);

  return (
    <>
      <button
        onClick={toggleNav}
        className='h-10 w-10 z-10 flex justify-between flex-col py-3 px-1 group'>
        <div
          className={cn(
            'bg-accent transition-all duration-300 ease-out h-[1px] w-full shrink-0 rounded-sm origin-left group-hover:bg-primary',
            navIsOpen
              ? 'rotate-45 -translate-y-1 translate-x-1'
              : 'translate-y-0 rotate-0'
          )}></div>
        <div
          className={cn(
            'bg-accent t transition-all duration-300 ease-out h-[1px] w-full shrink-0 rounded-sm group-hover:bg-primary',
            navIsOpen ? 'opacity-0 translate-x-full' : 'opacity-1 translate-x-0'
          )}></div>
        <div
          className={cn(
            'bg-accent transition-all duration-300 ease-out h-[1px] w-full shrink-0 rounded-sm origin-left group-hover:bg-primary',
            navIsOpen
              ? '-rotate-45 translate-y-1 translate-x-1'
              : 'translate-y-0 rotate-0'
          )}></div>
      </button>
      <nav
        className={cn(
          'lg:hidden flex md:flex-col gap-12 h-full items-center lg:pt-2 lg:w-fit w-full bg-secondary md:h-screen md:fixed md:top-0 md:left-0 md:right-0  md:py-16 lg:[clip-path:polygon(0_0,_100%_0,_100%_100%,_0_100%)] md:invisible',
          navIsOpen
            ? ' md:duration-700 ease-in-out md:[clip-path:polygon(0_0,_100%_0,_100%_100%,_0_100%)] transition-[clip-path] md:visible'
            : ' md:duration-700 md:ease-in-out  md:[clip-path:polygon(0_0,_100%_0,_100%_0,_0_0)] transition-all md:invisible'
        )}>
        <div className='overflow-hidden'>
          <NavLink
            href='/'
            className={cn(
              'block text-lg text-center capitalize font-heading leading-snug md:text-3xl translate-y-[120%]',
              navIsOpen
                ? `translate-y-[0%] duration-300 delay-[.15s]`
                : `translate-y-[120%]`
            )}
            unmatchedClass='text-secondary-foreground hover:text-accent hover:transition-colors hover:duration-200 hover:ease-in'
            matchedClass='text-accent hover:text-primary transition hover:duration-200 hover:ease-in'>
            home
          </NavLink>
        </div>
        <div className='overflow-hidden'>
          <NavLink
            href='/mission'
            className={cn(
              'block text-lg text-center capitalize font-heading leading-snug md:text-3xl',
              navIsOpen
                ? `translate-y-[0%] delay-[.25s] duration-300`
                : `translate-y-[120%]`
            )}
            unmatchedClass='text-secondary-foreground hover:text-accent hover:transition-colors hover:duration-200 hover:ease-in'
            matchedClass='text-accent hover:text-primary transition hover:duration-200 hover:ease-in'>
            Mission
          </NavLink>
        </div>
        <div className='overflow-hidden'>
          <NavLink
            href='/team'
            className={cn(
              'block text-lg text-center capitalize font-heading leading-snug md:text-3xl translate-y-[120%]',
              navIsOpen
                ? `translate-y-[0%] duration-300 delay-[0.35s]`
                : `translate-y-[120%]`
            )}
            unmatchedClass='text-secondary-foreground hover:text-accent hover:transition-colors hover:duration-200 hover:ease-in'
            matchedClass='text-accent hover:text-primary transition hover:duration-200 hover:ease-in'>
            Team
          </NavLink>
        </div>
        <div className='overflow-hidden'>
          <NavLink
            href='/insights'
            className={cn(
              'block text-lg text-center capitalize font-heading leading-snug md:text-3xl translate-y-[120%]',
              navIsOpen
                ? `translate-y-[0%] duration-300 delay-[0.45s]`
                : `translate-y-[120%]`
            )}
            unmatchedClass='text-secondary-foreground hover:text-accent hover:transition-colors hover:duration-200 hover:ease-in'
            matchedClass='text-accent hover:text-primary transition hover:duration-200 hover:ease-in'>
            Insights
          </NavLink>
        </div>
        <div className='overflow-hidden'>
          <NavLink
            href='/contact'
            className={cn(
              'block text-lg text-center capitalize font-heading leading-snug md:text-3xl translate-y-[120%]',
              navIsOpen
                ? `translate-y-[0%] duration-300 delay-[0.55s]`
                : `translate-y-[120%]`
            )}
            unmatchedClass='text-secondary-foreground hover:text-accent hover:transition-colors hover:duration-200 hover:ease-in'
            matchedClass='text-accent hover:text-primary transition hover:duration-200 hover:ease-in'>
            Contacts
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default MobileNav;
