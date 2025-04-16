import { motion } from 'framer-motion';
import SkillCategory from './SkillCategory';

const skillsData = {
  frontend: [
    { title: 'React', level: 90, color: 'bg-blue-500' },
    { title: 'TypeScript', level: 85, color: 'bg-blue-400' },
    { title: 'CSS/Tailwind', level: 95, color: 'bg-blue-600' },
    { title: 'Next.js', level: 80, color: 'bg-blue-500' },
  ],
  backend: [
    { title: 'Node.js', level: 85, color: 'bg-green-500' },
    { title: 'Python', level: 80, color: 'bg-green-400' },
    { title: 'PostgreSQL', level: 75, color: 'bg-green-600' },
    { title: 'GraphQL', level: 70, color: 'bg-green-500' },
  ],
  tools: [
    { title: 'Git', level: 90, color: 'bg-purple-500' },
    { title: 'Docker', level: 75, color: 'bg-purple-400' },
    { title: 'AWS', level: 70, color: 'bg-purple-600' },
    { title: 'CI/CD', level: 80, color: 'bg-purple-500' },
  ],
};

export default function Skills() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Skills & Expertise
        </motion.h2>
        
        <SkillCategory title="Frontend Development" skills={skillsData.frontend} />
        <SkillCategory title="Backend Development" skills={skillsData.backend} />
        <SkillCategory title="Tools & Technologies" skills={skillsData.tools} />
      </div>
    </section>
  );
}