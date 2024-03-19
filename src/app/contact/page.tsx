import { ContactForm, RenderedMap, Skeleton } from '@/components';
import Link from 'next/link';
import { Suspense } from 'react';

const ContactPage = () => {
  return (
    <div className='bg-secondary pt-nav-height pb-16 lg:pb-32'>
      <div className='pt-20 px-4 lg:px-10 grid-inner lg:hidden'>
        <div className='col-span-full lg:col-start-4 lg:col-end-10 text-left'>
          <h1 className='text-secondary-foreground title-md'>
            Become a Member
          </h1>
        </div>
        <div className='col-span-full lg:col-start-5 lg:col-end-9 text-left'>
          <p className='text-secondary-foreground main-text lg:pt-4 pt-2'>
            Ready to join the Refresh community? Simply complete the form below,
            and our dedicated membership advisor will be in touch with you
            shortly to guide you through the seamless membership process.
          </p>
        </div>
      </div>
      <div className='grid-inner px-4 lg:px-10 pt-12 lg:pt-20'>
        <div className='lg:col-start-1 lg:col-end-8 lg:pr-10 col-span-full md:order-2'>
          <div className='col-span-full lg:col-start-4 lg:col-end-10 text-left md:hidden'>
            <h1 className='text-secondary-foreground title-md'>
              Become a Member
            </h1>
          </div>
          <div className='col-span-full lg:col-start-5 lg:col-end-9 text-left pb-8 md:hidden'>
            <p className='text-secondary-foreground main-text lg:pt-4 pt-2'>
              Ready to join the Refresh community? Simply complete the form
              below, and our dedicated membership advisor will be in touch with
              you shortly to guide you through the seamless membership process.
            </p>
          </div>
          <ContactForm />
        </div>
        <div className='lg:col-start-8 lg:col-end-13 lg:border-l border-accent lg:pl-10 col-span-full md:order-1'>
          <div className='flex flex-col gap-6 text-secondary-foreground lg:pt-14'>
            <div>
              <h3 className='title-xs'>Contact</h3>
              <p className='text-base lg:text-lg mt-2'>
                <Link href='mailto:inquiry@pennycapital.com'>
                  inquiry@pennycapital.com
                </Link>
                <br />
                (214) 123-4567
              </p>
            </div>
            <div>
              <h3 className='title-xs'>Address</h3>
              <p className='text-base lg:text-lg mt-2'>
                Penny Capital
                <br />
                123 Main Drive, Dallas, TX 75225
              </p>
            </div>
            <div>
              <Suspense fallback={<Skeleton className='aspect-video' />}>
                <RenderedMap />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
