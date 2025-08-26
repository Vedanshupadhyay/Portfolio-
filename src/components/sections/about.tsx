
import Image from 'next/image';
import AnimatedSection from '../animated-section';

export default function About() {
  return (
    <AnimatedSection id="about" className="py-24 sm:py-32 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          About Me
        </h2>
        <div className="grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-2">
            <div className="relative aspect-square">
              <Image
                src="https://picsum.photos/800/800"
                alt="Profile picture of Vedansh Upadhyay"
                data-ai-hint="developer portrait"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-3">
            <p className="text-lg text-muted-foreground mb-4">
              Hello! I'm Vedansh Upadhyay, a passionate full-stack developer with a strong foundation in computer science principles and a drive for creating elegant, high-performance applications. My expertise spans from building robust back-end systems with Java to crafting dynamic and responsive user interfaces with modern web technologies.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              I thrive on solving complex problems, whether it's optimizing algorithms (thanks to my love for DSA and OOP) or architecting scalable cloud solutions. I'm constantly learning and exploring new tools to stay at the forefront of technology.
            </p>
            <p className="text-lg text-muted-foreground">
              When I'm not coding, I enjoy contributing to open-source projects and exploring the latest trends in software development. Let's build something amazing together!
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
