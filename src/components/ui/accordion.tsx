'use client';

import { useRef } from 'react';

import { cn } from '@/utils/cn';

import { Icons } from '@/components';

type AccordionProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
};

export default function Accordion({
  question,
  answer,
  onClick,
  isOpen,
}: AccordionProps) {
  const contentHeight = useRef<HTMLDivElement>(null!);

  return (
    <div
      className={cn(
        'flex flex-col border-[1.75px] rounded-md hover:border-accent ease-out transition md:px-4 lg:px-4  duration-500 border-secondary-foreground',
        isOpen
          ? 'bg-accent border-accent'
          : 'bg-secondary text-secondary-foreground'
      )}>
      <button
        className='box-border flex w-full cursor-pointer appearance-none items-center justify-between py-4 focus:outline-none'
        onClick={onClick}>
        <p className='text-start title-xs leading-[1.25]'>{question}</p>
        <span
          className={cn(
            isOpen
              ? 'ease-in rotate-45 transform duration-700'
              : 'ease-in rotate-0 transform duration-700',
            'block origin-center h-6 w-6'
          )}>
          <Icons.circlePlus
            className={cn(
              isOpen ? 'fill-secondary' : 'fill-primary',
              'h-6 w-6'
            )}
          />
        </span>
      </button>

      <div
        ref={contentHeight}
        className='transition-max-height overflow-hidden duration-700 ease-in-out'
        style={
          isOpen
            ? { maxHeight: contentHeight.current.scrollHeight }
            : { maxHeight: '0px' }
        }>
        <div className='pb-10 pt-2'>
          <p className='text-base lg:text-lg font-body text-secondary'>{answer}</p>
        </div>
      </div>
    </div>
  );
}
