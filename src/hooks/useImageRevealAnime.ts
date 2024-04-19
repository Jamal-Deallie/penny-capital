'use client';

import { RefObject, useRef } from 'react';

import { gsap, useGSAP } from '@/utils/gsap';

export const useImageRevealAnime = (): RefObject<HTMLDivElement> => {
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!imageRef.current) return;

      const mm = gsap.matchMedia();
      mm.add('(min-width: 800px)', () => {
        const root = imageRef.current;
        const images = gsap.utils.toArray('.img-target', root);
        gsap.fromTo(
          images,
          { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' },
          {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            ease: 'power2.out',
            stagger: 0.25,
            duration: .75,
            scrollTrigger: {
              trigger: root,
              start: 'clamp(top center)',
              markers: false,
            },
          }
        );
      });
    },
    { scope: imageRef }
  );

  return imageRef;
};
