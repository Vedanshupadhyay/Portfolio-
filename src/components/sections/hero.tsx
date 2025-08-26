
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../animated-section';
import { cn } from '@/lib/utils';

const backgroundImages = [
  { url: 'https://picsum.photos/1920/1080?random=30', hint: 'mountain sunrise' },
  { url: 'https://picsum.photos/1920/1080?random=31', hint: 'sandy beach' },
  { url: 'https://picsum.photos/1920/1080?random=32', hint: 'rocky coast' },
  { url: 'https://picsum.photos/1920/1080?random=33', hint: 'snowy peak' },
  { url: 'https://picsum.photos/1920/1080?random=34', hint: 'ocean waves' },
];

const StaggeredWord = ({ text, className }: { text: string; className?: string }) => {
  return (
    <span className={className}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="inline-block animate-reveal"
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center text-center bg-background overflow-hidden">
      {backgroundImages.map((image, index) => (
        <Image
          key={index}
          src={image.url}
          alt="Hero background"
          data-ai-hint={image.hint}
          fill
          priority={index === 0}
          className={cn(
            'absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out',
            index === currentImageIndex ? 'opacity-100 animate-zoom-in' : 'opacity-0'
          )}
          style={{ animationDuration: '5s' }}
        />
      ))}
      <div className="absolute inset-0 bg-background/50 z-1" />

      <AnimatedSection as="div" className="relative z-10 px-4">
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter mb-4 font-headline bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          <StaggeredWord text="Developer. Innovator." />
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          Crafting high-performance digital experiences from server to screen.
        </p>
        <Link href="#projects" className="inline-block animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <Button size="lg" className="group shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-shadow">
            View My Work
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </AnimatedSection>

      <style jsx>{`
        @keyframes reveal {
          from {
            opacity: 0;
            transform: translateY(30px) skewY(10deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) skewY(0deg);
          }
        }
        .animate-reveal {
          animation: reveal 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
          opacity: 0;
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
        @keyframes zoom-in {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.1);
          }
        }
        .animate-zoom-in {
          animation: zoom-in 5s linear forwards;
        }
      `}</style>
    </section>
  );
}
