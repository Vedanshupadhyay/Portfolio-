
import { BrainCircuit, Laptop, Database } from 'lucide-react';
import AnimatedSection from '../animated-section';

const skillCategories = [
  {
    title: 'Backend & Core Concepts',
    icon: <BrainCircuit className="w-10 h-10 text-primary" />,
    skills: ['Java', 'Data Structures & Algorithms', 'Object-Oriented Programming', 'Spring Boot'],
  },
  {
    title: 'Frontend & Web Tech',
    icon: <Laptop className="w-10 h-10 text-primary" />,
    skills: ['React', 'Next.js', 'TypeScript', 'HTML5 & CSS3', 'Tailwind CSS'],
  },
  {
    title: 'Databases & DevOps',
    icon: <Database className="w-10 h-10 text-primary" />,
    skills: ['SQL (PostgreSQL)', 'NoSQL (MongoDB)', 'Docker', 'Git & GitHub'],
  },
];

export default function Skills() {
  return (
    <AnimatedSection id="skills" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          My Tech Stack
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center p-6 bg-card rounded-lg transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1"
            >
              {category.icon}
              <h3 className="text-2xl font-bold my-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li key={i} className="text-muted-foreground">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
