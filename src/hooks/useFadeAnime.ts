'use client';

import { RefObject, useRef } from 'react';

import { gsap, useGSAP } from '@/utils/gsap';

export const useFadeAnime = (): RefObject<HTMLDivElement> => {
  const fadeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!fadeRef.current) return;

      const mm = gsap.matchMedia();
      mm.add('(min-width: 800px)', () => {
        const root = fadeRef.current;

        gsap.fromTo(
          fadeRef.current,
          { opacity: 0 },
          {
            duration: 1.2,
            opacity: 1,
            ease: 'sine.out',
            scrollTrigger: {
              trigger: root,
              start: 'clamp(top 30%)',
              markers: false,
            },
          }
        );
      });
    },
    { scope: fadeRef }
  );

  return fadeRef;
};
