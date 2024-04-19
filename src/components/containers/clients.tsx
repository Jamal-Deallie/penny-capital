'use client';
import clients from '@/data/clientItems.json';
import { useClientAnime } from '@/hooks/useClientAnime';
import { ClientCard } from '@/components';
const Clients = () => {
  const slicedItems = clients.slice(0, 4);
  const clientsRef = useClientAnime();
  return (
    <div
      className='bg-secondary text-secondary-foreground lg:py-24 py-16'
      ref={clientsRef}>
      <div className='grid-inner px-4 lg:px-10'>
        <h1 className='title-lg lg:col-start-2 lg:col-end-12 col-span-full text-center lg:pb-24 pb-16'>
          Penny Capital fosters strong, collaborative relationships for mutual
          growth.
        </h1>
        {slicedItems.map((item, index) => (
          <ClientCard
            key={index}
            number={index + 1}
            clientName={item.clientName}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Clients;
