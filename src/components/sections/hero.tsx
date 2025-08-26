
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../animated-section';
import { cn } from '@/lib/utils';

const backgroundImages = [
  { url: 'https://picsum.photos/1920/1080?random=50', hint: 'mountain forest' },
  { url: 'https://picsum.photos/1920/1080?random=51', hint: 'misty peaks' },
  { url: 'https://picsum.photos/1920/1080?random=52', hint: 'alpine lake' },
  { url: 'https://picsum.photos/1920/1080?random=53', hint: 'forest valley' },
  { url: 'https://picsum.photos/1920/1080?random=54', hint: 'cloudy mountains' },
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
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
            index === currentImageIndex ? 'opacity-20 animate-ken-burns' : 'opacity-0'
          )}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-1" />

      <AnimatedSection as="div" className="relative z-10 px-4">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4">
          Developer. Innovator.
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
          Crafting high-performance digital experiences from server to screen.
        </p>
        <Link href="#projects">
          <Button size="lg" className="group">
            View My Work
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </AnimatedSection>
      <style jsx>{`
        @keyframes ken-burns {
          0% {
            transform: scale(1) translate(0, 0);
          }
          100% {
            transform: scale(1.1) translate(-2%, 2%);
          }
        }
        .animate-ken-burns {
          animation: ken-burns 20s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
