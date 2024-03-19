import { Metadata } from 'next';
import * as React from 'react';

export const metadata: Metadata = {
  title: 'Not Found',
};

export default function NotFound() {
  return (
    <main className='bg-black pb-16 lg:pb-32 px-4 lg:px-10 h-screen-height flex justify-center items-center'>
      <div className='text-white text-center'>
        <span className='title-md text-white'>Something Went Wrong...</span>
        <h1 className='title-xl text-white leading-[0.86]'>404</h1>
      </div>
    </main>
  );
}
