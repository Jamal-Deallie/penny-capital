import React from 'react';
import Image from 'next/image';
const About = () => {
  return (
    <section className='pt-16 lg:pb-24 pb-16'>
      <div className='grid-inner'>
        <h1 className='lg:col-span-8 col-span-full title-lg px-4 lg:px-10'>
          A wonderful serenity has taken possession of my entire soul
        </h1>
      </div>
      <div className='grid-inner pt-16'>
        <figure className='h-auto aspect-[12/18] relative overflow-hidden col-span-full lg:col-span-4'>
          <Image
            className='object-cover w-full h-auto'
            src='https://res.cloudinary.com/dtwk4dm3g/image/upload/v1710568856/penny_capital/airone_corporate-teamworking-colleagues-in-modern-office-2023-11-27-04-59-44-utc_npuv8p.jpg'
            alt='Penny Capital Business People Meeting or Clapping in Digital Marketing Seminar'
            width={0}
            height={0}
            sizes='100vw'
          />
        </figure>
        <figure className='h-auto aspect-[12/18] relative overflow-hidden col-span-full lg:col-span-4 md:hidden'>
          <Image
            className='object-cover w-full h-auto'
            src='https://res.cloudinary.com/dtwk4dm3g/image/upload/v1710568856/penny_capital/airone_corporate-teamworking-colleagues-in-modern-office-2023-11-27-04-59-44-utc_npuv8p.jpg'
            alt='Penny Capital Business People Meeting or Clapping in Digital Marketing Seminar'
            width={0}
            height={0}
            sizes='100vw'
          />
        </figure>
        <figure className='h-auto aspect-[12/18] relative overflow-hidden col-span-full lg:col-span-4 md:hidden'>
          <Image
            className='object-cover w-full h-auto'
            src='https://res.cloudinary.com/dtwk4dm3g/image/upload/v1710568856/penny_capital/airone_corporate-teamworking-colleagues-in-modern-office-2023-11-27-04-59-44-utc_npuv8p.jpg'
            alt='Penny Capital Business People Meeting or Clapping in Digital Marketing Seminar'
            width={0}
            height={0}
            sizes='100vw'
          />
        </figure>
      </div>
      <div className='grid-inner px-4 lg:px-10'>
        <p className='lg:col-start-3 lg:col-span-4 col-span-full pt-16 lg:text-lg text-base'>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean. A small river named Duden flows by their place and
          supplies it with the necessary regelialia. It is a paradisematic
          country, in which roasted parts of sentences fly into your mouth.
        </p>
        <p className='lg:col-start-7 lg:col-span-4 col-span-full pt-16 lg:text-lg text-base'>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean. A small river named Duden flows by their place and
          supplies it with the necessary regelialia. It is a paradisematic
          country, in which roasted parts of sentences fly into your mouth.
        </p>
      </div>
    </section>
  );
};

export default About;
