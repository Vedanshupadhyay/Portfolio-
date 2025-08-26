
import { BrainCircuit, Laptop, Database } from 'lucide-react';
import AnimatedSection from '../animated-section';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';

const skillCategories = [
  {
    title: 'Backend & Core Concepts',
    icon: <BrainCircuit className="w-8 h-8 text-primary" />,
    skills: ['Java', 'Data Structures & Algorithms', 'Object-Oriented Programming', 'Spring Boot'],
  },
  {
    title: 'Frontend & Web Tech',
    icon: <Laptop className="w-8 h-8 text-primary" />,
    skills: ['React', 'Next.js', 'TypeScript', 'HTML5 & CSS3', 'Tailwind CSS'],
  },
  {
    title: 'Databases & DevOps',
    icon: <Database className="w-8 h-8 text-primary" />,
    skills: ['SQL (PostgreSQL)', 'NoSQL (MongoDB)', 'Docker', 'Git & GitHub'],
  },
];

export default function Skills() {
  return (
    <AnimatedSection id="skills" className="bg-muted/10 py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 font-headline">
          My Tech Stack
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="flex flex-col text-center items-center shadow-2xl border-border/20 hover:border-primary/50 hover:shadow-primary/30 hover:-translate-y-2 transition-all duration-300 bg-card/50"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardHeader className="items-center">
                {category.icon}
                <CardTitle className="mt-4">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="text-muted-foreground">{skill}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
