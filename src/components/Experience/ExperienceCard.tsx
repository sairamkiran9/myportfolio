import { motion } from 'framer-motion';
import styles from './Experience.module.css';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string[];
  index: number;
}

export default function ExperienceCard({ title, company, period, description, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={styles['experience-card']}
    >
      <div className={styles['timeline-dot']} />
      <h3 className={styles['card-title']}>{title}</h3>
      <div className={styles['card-company']}>{company}</div>
      <div className={styles['card-period']}>{period}</div>
      <ul className={styles['card-description']}>
        {description.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
}