import React, { Suspense } from 'react';

import { employeeItems } from '@/data';

import { TeamCard } from '@/components';

const TeamPage = () => {
  const departments: string[] = employeeItems.map(
    ({ department }) => department
  );
  const uniqueDepartments = departments.filter(
    (department, index) => departments.indexOf(department) === index
  );

  return (
    <main className='bg-primary px-4 lg:px-10 pb-16 lg:pb-24 min-h-screen-height pt-nav-height'>
      <div className='py-16 grid-inner relative'>
        <h1 className='title-lg col-span-full lg:col-span-10 relative'>
          At Penny Capital, our diverse team brings expertise in finance,
          technology, marketing, and operations
        </h1>
      </div>

      <div className='grid-inner mb-16 relative h-14 z-10'>
        <div className='col-span-full lg:col-start-1 lg:col-end-6 absolute top-0 right-0 left-0'>
          <details className='overflow-hidden rounded border border-primary-foreground [&_summary::-webkit-details-marker]:hidden'>
            <summary className='flex cursor-pointer items-center justify-between gap-2 bg-primary p-4 text-primary-foreground transition duration-200 ease-in'>
              <span className='main-text text-primary-foreground'>
                Select A Department
              </span>

              <span className='transition group-open:-rotate-180 duration-200'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='h-4 w-4'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                  />
                </svg>
              </span>
            </summary>

            <div className='border-t border-primary-foreground bg-primary'>
              <header className='flex items-center justify-between p-4'>
                <span className='main-text text-primary-foreground'>
                  {' '}
                  0 Selected{' '}
                </span>

                <button
                  type='button'
                  className='main-text text-primary-foreground underline underline-offset-4'>
                  Reset
                </button>
              </header>

              <ul className='space-y-1 border-t border-primary-foreground p-4'>
                {uniqueDepartments.map(department => (
                  <li key={department}>
                    <label
                      htmlFor={department}
                      className='inline-flex items-center gap-2'>
                      <input
                        type='checkbox'
                        id={department}
                        className='size-5 rounded border-primary-foreground bg-primary'
                      />

                      <span className='main-text text-primary-foreground'>
                        {' '}
                        {department}{' '}
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </details>
        </div>
      </div>
      <Suspense>
        <div className='grid-inner relative gap-y-8'>
          {employeeItems.map(({ id, ...employee }) => {
            return <TeamCard key={id} {...employee} />;
          })}
        </div>
      </Suspense>
    </main>
  );
};

export default TeamPage;
