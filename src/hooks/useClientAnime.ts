'use client';

import { RefObject, useRef } from 'react';

import { gsap, useGSAP } from '@/utils/gsap';

export const useClientAnime = (): RefObject<HTMLDivElement> => {
  const clientsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!clientsRef.current) return;

      const mm = gsap.matchMedia();
      mm.add('(min-width: 800px)', () => {
        const root = clientsRef.current;
        const lines = gsap.utils.toArray('.line-target', root);
        const text = gsap.utils.toArray('.fade-target', root);
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: root,
            start: 'clamp(center-=20% center)',
            markers: false,
          },
        });
        tl.fromTo(
          lines,
          {
            willChange: 'clipPath',
            clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
          },
          {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            ease: 'power1.in',
            stagger: 0.20,
            duration: 1,
          }
        ).fromTo(
          text,
          {
            willChange: 'opacity',
            opacity: 0,
          },
          {
            opacity: 1,
            ease: 'circ.out',
            duration: 1.25,
          }
        );
      });
    },
    { scope: clientsRef }
  );

  return clientsRef;
};
