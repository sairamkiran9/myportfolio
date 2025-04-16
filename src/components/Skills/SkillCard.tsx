import { motion } from 'framer-motion';
import styles from './Skills.module.css';

interface SkillCardProps {
  title: string;
  level: number;
  color: string;
}

export default function SkillCard({ title, level, color }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={styles['skill-card']}
    >
      <h3 className="text-white font-medium mb-2">{title}</h3>
      <div className={styles['progress-bar']}>
        <motion.div
          className={`${styles['progress-fill']} ${color}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        />
      </div>
    </motion.div>
  );
}