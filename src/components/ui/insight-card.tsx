import Link from 'next/link';
import React from 'react';
type CardProps = {
  date: string;
  title: string;
  summary: string;
};

const InsightCard = ({ date, title, summary }: CardProps) => {
  return (
    <Link
      href='#'
      className='lg:col-span-4 col-span-full bg-secondary text-secondary-foreground p-6 aspect-[3/2] border-4 border-transparent hover:border-accent hover:duration-300 hover:ease-out'>
      <div className='border-b-2 border-text-secondary-foreground pb-1'>
        <span className='block'>{date}</span>
        <span className='block title-xs pt-4 truncate'>{title}</span>
      </div>

      <p className='text-base lg:text-lg whitespace-pre-line text-ellipsis line-clamp-3 pt-6'>
        {summary}
      </p>
    </Link>
  );
};

export default InsightCard;
