import Link from 'next/link';
import { Icons, NavLink, MobileNav } from '@/components';

import { siteConfig } from '@/constants/config';
const SiteHeader = () => {
  return (
    <header className='bg-secondary fixed left-0 right-0 top-0  w-full h-nav-height lg:px-10 px-4 z-50'>
      <div className='h-full w-full lg:rounded-lg flex items-center justify-between'>
        <Link href='/' className='inline-flex items-end gap-1 shrink-0'>
          <Icons.logo className='h-8 fill-accent' />
          <span className='font-heading text-accent text-2xl leading-none'>
            Penny Capital
          </span>
        </Link>
        <nav className='flex gap-12 h-full items-center lg:pt-2 lg:w-fit w-full bg-secondary md:hidden'>
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
        <MobileNav />
      </div>
    </header>
  );
};

export default SiteHeader;
