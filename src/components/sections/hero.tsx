
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../animated-section';
import { cn } from '@/lib/utils';

const backgroundImages = [
  { url: 'https://picsum.photos/1920/1080?random=1', hint: 'mountain landscape' },
  { url: 'https://picsum.photos/1920/1080?random=2', hint: 'moody forest' },
  { url: 'https://picsum.photos/1920/1080?random=3', hint: 'dark valley' },
  { url: 'https://picsum.photos/1920/1080?random=4', hint: 'misty mountains' },
  { url: 'https://picsum.photos/1920/1080?random=5', hint: 'cloudy peaks' },
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

      <div className="relative z-10 px-4 flex flex-col items-center">
        <AnimatedSection as="h1" className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
          Full Stack Developer | Software Engineer and Innovator
        </AnimatedSection>
        <AnimatedSection as="p" className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-8 transition-all duration-1000 ease-out delay-300">
          Crafting high-performance digital experiences from server to screen with code.
        </AnimatedSection>
        <AnimatedSection as="div" className="transition-all duration-1000 ease-out delay-500">
          <Link href="#projects">
            <Button size="lg" className="group">
              View My Work
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </AnimatedSection>
      </div>
      
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
