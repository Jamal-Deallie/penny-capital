import React from 'react';

type Props = {};

const InsightCard = (props: Props) => {
  return (
    <div className='lg:col-span-4 col-span-full bg-secondary text-secondary-foreground p-6 aspect-[3/2]'>
      <div className='border-b-2 border-text-secondary-foreground pb-1'>
        <span className='block'>Date</span>
        <span className='block title-sm pt-4 truncate'>Title</span>
      </div>

      <p className='text-base lg:text-lg whitespace-pre-line text-ellipsis line-clamp-3 pt-6'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        ducimus molestias adipisci laudantium necessitatibus tenetur, quia
        facere sint sit officiis quam optio fugiat deleniti maxime officia velit
        sunt. Rerum praesentium necessitatibus harum distinctio ipsa
        exercitationem aspernatur delectus asperiores cumque eligendi,
        accusantium nisi placeat deleniti quam consequatur. Unde at, officiis
        fugiat minus esse possimus numquam perferendis dolores suscipit minima
        ab, fuga voluptatibus assumenda maxime reprehenderit quibusdam
        inventore, nobis voluptas! Fugiat, ipsum!
      </p>
    </div>
  );
};

export default InsightCard;
