
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import AiAssistant from '@/components/sections/ai-assistant';
import Contact from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <AiAssistant />
      <Contact />
    </div>
  );
}
