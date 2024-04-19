import { cn } from '@/utils/cn';

type CardProps = {
  number: number;
  clientName: string;
  description: string;
  className?: string;
};

const ClientCard = ({
  number,
  clientName,
  description,
  className,
}: CardProps) => {
  return (
    <>
      <div
        className={cn(
          'lg:col-start-1 lg:col-end-2 col-span-1 fade-target',
          className
        )}>
        <span className='bg-primary text-primary-foreground w-8 h-8 rounded-full inline-flex items-center justify-center font-heading text-lg'>
          {number}
        </span>
      </div>
      <div className='lg:col-span-7 col-span-5 lg:flex lg:justify-start fade-target'>
        <h2 className='lg:text-6xl text-4xl font-heading lg:text-center text-left'>
          {clientName}
        </h2>
      </div>
      <div className='lg:col-span-4 col-span-full md:py-4 text-base lg:text-lg pb-3 fade-target'>
        <p>{description}</p>
      </div>
      <span className='h-[2px] col-span-full bg-primary mb-16 line-target'></span>
    </>
  );
};

export default ClientCard;
