import { ReactNode, Suspense } from 'react';

import { Footer, Lenify, SiteHeader } from '@/components';

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Suspense>
        <Lenify />
      </Suspense>
      <div>
        <SiteHeader />
        <Suspense>{children}</Suspense>
        <Footer />
      </div>
    </>
  );
};

export default Wrapper;
