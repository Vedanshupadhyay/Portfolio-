
'use client';

import { useEffect, type ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';

gsap.registerPlugin(ScrollSmoother);

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const smoother = ScrollSmoother.create({
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
    });

    return () => {
      // Kill the smoother instance when the component unmounts
      if (smoother) {
        smoother.kill();
      }
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}
