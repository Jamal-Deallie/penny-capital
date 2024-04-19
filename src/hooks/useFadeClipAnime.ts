'use client';

import { RefObject, useRef } from 'react';

import { gsap, useGSAP } from '@/utils/gsap';

type HookProps = {
  clipPath: 'top' | 'bottom' | 'left' | 'right';
};
export const useFadeClipAnime = ({
  clipPath,
}: HookProps): RefObject<HTMLDivElement> => {
  const fadeClipRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!fadeClipRef.current) return;

      const mm = gsap.matchMedia();
      mm.add('(min-width: 800px)', () => {
        const root = fadeClipRef.current;

        function getDirection(key: string) {
          switch (key) {
            case 'top':
              return 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)';
              break;
            case 'bottom':
              return 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)';
              break;
            case 'left':
              return 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)';
              break;
            case 'right':
              return 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)';
              break;
          }
        }

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: root,
            start: 'clamp(top 30%)',
            markers: false,
          },
        });
        const lines = gsap.utils.toArray('.line-target', root);
        const fadeItems = gsap.utils.toArray('.fade-target', root);

        tl.fromTo(
          lines,
          { clipPath: getDirection(clipPath) },
          {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            ease: 'power1.out',
            stagger: 0.15,
          }
        ).fromTo(
          fadeItems,
          { opacity: 0 },
          {
            opacity: 1,
            ease: 'sine.out',
            stagger: 0.45,
          },
          '-=0.75'
        );
      });
    },
    { scope: fadeClipRef }
  );

  return fadeClipRef;
};
