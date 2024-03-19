'use client';

import Tempus from '@studio-freight/tempus';
import { useLenis } from '@/components/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect, useLayoutEffect } from 'react';

const GSAP = () => {
  useLayoutEffect(() => {
    gsap.defaults({ ease: 'none' });
    // merge rafs
    gsap.ticker.lagSmoothing(0);
    gsap.ticker.remove(gsap.updateRoot);
    Tempus?.add((time: number) => {
      gsap.updateRoot(time / 1000);
    }, 0);
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.clearScrollMemory('manual');
    ScrollTrigger.defaults({
      markers: process.env.NODE_ENV === 'development',
    });
  }, []);

  const lenis = useLenis(ScrollTrigger.update);
  useEffect(() => ScrollTrigger.refresh(), [lenis]);
};

export default GSAP;
