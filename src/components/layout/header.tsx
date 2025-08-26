
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Code, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const handleLinkClick = () => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-colors duration-300',
          scrolled ? 'bg-background/80 backdrop-blur-sm' : 'bg-transparent'
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-2">
              <Code className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold">Vedansh Upadhyay</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Button key={link.href} variant="ghost" asChild>
                  <Link
                    href={link.href}
                    className="font-medium text-foreground/80 hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </Button>
              ))}
            </nav>
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-background/95 backdrop-blur-sm transition-transform duration-300 ease-in-out md:hidden',
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20 h-full flex flex-col items-center">
           <nav className="flex flex-col items-center space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xl font-medium text-foreground hover:text-primary transition-colors"
                  onClick={handleLinkClick}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
        </div>
      </div>
    </>
  );
}
