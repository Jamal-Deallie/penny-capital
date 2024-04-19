'use client';

import {useState } from 'react';

import { Accordion } from '@/components';

interface FaqProps {
  question: string;
  answer: string;
  id: number;
}

interface AccordionProps {
  data: FaqProps[];
}
export default function AccordionGroup({ data }: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className='w-full'>
      <div className='[&>*:nth-child(even)]:my-10'>
        {data.map((item, index) => (
          <Accordion
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    </div>
  );
}
