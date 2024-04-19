import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger, useGSAP);
export { gsap, ScrollTrigger,useGSAP };
