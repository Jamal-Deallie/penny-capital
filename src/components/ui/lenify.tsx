'use client';
import Tempus from '@studio-freight/tempus';
import Lenis from '@studio-freight/lenis';
import { useEffect, useLayoutEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { ScrollTrigger, gsap } from '@/lib/gsap';
import { useStore } from '@/lib/store';

export default function Lenify() {
  const lenis = useRef<Lenis | null>(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [navIsOpen] = useStore(({ navIsOpen }) => [navIsOpen]);
  const [setLenis] = useStore(state => [state.setLenis]);

  useEffect(() => {
    if (lenis.current) lenis.current!.scrollTo(0, { immediate: true });
  }, [pathname, searchParams, lenis]);

  useLayoutEffect(() => {
    lenis.current = new Lenis({
      smoothWheel: true,
      lerp: 0.1,
      duration: 1.5,
      syncTouch: true,
    });
    setLenis(lenis.current);
    const resize = setInterval(() => {
      lenis.current!.resize();
    }, 150);
    function onFrame(time: number) {
      lenis.current!.raf(time);
    }
    const unsubscribe = Tempus.add(onFrame);

    return () => {
      unsubscribe();
      clearInterval(resize);
      lenis.current!.destroy();
      lenis.current = null;
    };
  }, []);

  useLayoutEffect(() => {
    if (lenis.current) {
      gsap.defaults({ ease: 'none' });
      // merge rafs
      gsap.ticker.lagSmoothing(0);
      gsap.ticker.remove(gsap.updateRoot);
      Tempus?.add((time: number) => {
        gsap.updateRoot(time / 1000);
      }, 0);
      lenis.current.on('scroll', ScrollTrigger.update);

      ScrollTrigger.clearScrollMemory('manual');
      ScrollTrigger.defaults({
        markers: process.env.NODE_ENV === 'development',
      });
    }
  }, []);

  useEffect(() => {
    if (navIsOpen) {
      lenis.current?.stop();
    } else {
      lenis.current?.start();
    }
  }, [lenis, navIsOpen]);

  return null;
}
