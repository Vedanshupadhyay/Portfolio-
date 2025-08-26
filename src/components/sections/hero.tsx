
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../animated-section';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center bg-background overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />

      <AnimatedSection as="div" className="relative z-10 px-4">
        <h1
          className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter mb-4 font-headline animate-fade-in-up bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
          style={{ animationDelay: '0.2s' }}
        >
          Developer. Innovator.
        </h1>
        <p
          className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          Crafting high-performance digital experiences from server to screen.
        </p>
        <Link
          href="#projects"
          className="inline-block animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          <Button size="lg" className="group shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow">
            View My Work
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </AnimatedSection>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(
              hsl(var(--primary) / 0.05) 1px,
              transparent 1px
            ),
            linear-gradient(
              to right,
              hsl(var(--primary) / 0.05) 1px,
              transparent 1px
            );
          background-size: 2rem 2rem;
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
