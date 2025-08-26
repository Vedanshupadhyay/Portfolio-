
import { Code } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/50 bg-background/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Code className="w-6 h-6 text-primary" />
            <span className="font-headline text-lg">DevFolio X</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {currentYear} DevFolio X. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
