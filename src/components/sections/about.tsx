
import Image from 'next/image';
import AnimatedSection from '../animated-section';
import { Card, CardContent } from '../ui/card';

export default function About() {
  return (
    <AnimatedSection id="about" className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 font-headline">
          About Me
        </h2>
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <Card className="overflow-hidden shadow-lg border-primary/20 transition-all duration-300 hover:shadow-primary/40 hover:scale-105">
              <CardContent className="p-0">
                <Image
                  src="https://picsum.photos/600/800"
                  alt="Profile picture of the developer"
                  data-ai-hint="developer portrait"
                  width={600}
                  height={800}
                  className="object-cover w-full h-full"
                />
              </CardContent>
            </Card>
          </div>
          <div className="md:col-span-3">
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Hello! I'm a passionate full-stack developer with a strong foundation in computer science principles and a drive for creating elegant, high-performance applications. My expertise spans from building robust back-end systems with Java to crafting dynamic and responsive user interfaces with modern web technologies.
            </p>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              I thrive on solving complex problems, whether it's optimizing algorithms (thanks to my love for DSA and OOP) or architecting scalable cloud solutions. I'm constantly learning and exploring new tools to stay at the forefront of technology.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, I enjoy contributing to open-source projects and exploring the latest trends in software development. Let's build something amazing together!
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
