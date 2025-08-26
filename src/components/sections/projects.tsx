
import Image from 'next/image';
import AnimatedSection from '../animated-section';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Badge } from '../ui/badge';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured online store with product catalogs, shopping cart, user authentication, and an admin dashboard for managing inventory and orders.',
    image: 'https://picsum.photos/600/400?random=1',
    imageHint: 'online shopping',
    technologies: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Stripe API'],
  },
  {
    title: 'Social Media Dashboard',
    description: 'A responsive dashboard for social media analytics, providing users with insights into their account performance, audience growth, and content engagement.',
    image: 'https://picsum.photos/600/400?random=2',
    imageHint: 'social media',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Chart.js'],
  },
  {
    title: 'Real-time Chat App',
    description: 'A web-based chat application that enables users to communicate in real-time through public and private channels, featuring typing indicators and online statuses.',
    image: 'https://picsum.photos/600/400?random=3',
    imageHint: 'communication tech',
    technologies: ['WebSocket', 'Java', 'React', 'Redis', 'Tailwind CSS'],
  },
];

export default function Projects() {
  return (
    <AnimatedSection id="projects" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <CardContent className="p-0">
                <div className="relative aspect-video">
                  <Image
                    src={project.image}
                    alt={project.title}
                    data-ai-hint={project.imageHint}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
              </CardContent>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
