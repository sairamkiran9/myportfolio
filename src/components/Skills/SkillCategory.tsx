import { motion } from 'framer-motion';
import SkillCard from './SkillCard';

interface Skill {
  title: string;
  level: number;
  color: string;
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
}

export default function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div className="mb-8">
      <motion.h3
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-2xl font-bold text-white mb-4"
      >
        {title}
      </motion.h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </div>
  );
}