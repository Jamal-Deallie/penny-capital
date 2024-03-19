import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger, useGSAP);
export { gsap, useGSAP, ScrollTrigger };
