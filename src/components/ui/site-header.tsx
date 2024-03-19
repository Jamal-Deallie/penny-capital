import React from 'react';
import { MobileNav, Icons } from '@/components';
import Link from 'next/link';
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
        <MobileNav />
      </div>
    </header>
  );
};

export default SiteHeader;
