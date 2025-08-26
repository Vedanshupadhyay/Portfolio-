
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../animated-section';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center bg-background overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      <AnimatedSection as="div" className="relative z-10 px-4">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter mb-4 font-headline">
          Full-Stack Developer
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
          Crafting digital experiences from server to screen.
        </p>
        <Link href="#projects">
          <Button size="lg" className="group">
            View My Work
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </AnimatedSection>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(
              hsl(var(--primary) / 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to right,
              hsl(var(--primary) / 0.1) 1px,
              transparent 1px
            );
          background-size: 3rem 3rem;
        }
      `}</style>
    </section>
  );
}
