import { SiteHeader, Lenify, Footer, GSAP } from '@/components';
import { ReactNode } from 'react';

const Wrapper = ({
  children,
  lenisOptions,
  className,
}: {
  children: ReactNode;
  className?: string;
  lenisOptions?: {};
}) => {
  return (
    <>
      <Lenify />
      <div>
        <SiteHeader />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Wrapper;
