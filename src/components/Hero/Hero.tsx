import { motion } from 'framer-motion';
import { ChevronsDown, Github, Linkedin, Mail, } from 'lucide-react';
import SocialLink from './SocialLink';
import styles from './Hero.module.css';
import ParticleBackground from './ParticleBackground';
import VennDiagram from './VennDiagram/VennDiagram';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const role = 'Full Stack AI Engineer';
  
  useEffect(() => {
    if (currentIndex < role.length) {
      // Typing effect
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + role[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 100); // Typing speed
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);
  return (
    <section className={styles['hero-section']}>
      <div className="absolute inset-0 overflow-hidden">
        <ParticleBackground />
      </div>
      <VennDiagram />
      <div className={styles['hero-content']}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            className={`${styles['hero-title']} gradient-text`}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Kiran Muppana
          </motion.h1>
          

          <motion.div
            className={styles['social-links']}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <SocialLink href="https://github.com/sairamkiran9" icon={<Github />} />
            <SocialLink href="https://www.linkedin.com/in/kiran-muppana/" icon={<Linkedin />} />
            <SocialLink href="mailto:kiranmuppana36@gmail.com" icon={<Mail />} />
          </motion.div>
          <motion.h2
            className={styles['hero-subtitle']}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {displayText}{currentIndex < role.length && <span className="animate-pulse">|</span>}
          </motion.h2>
          <motion.div
            className={styles['scroll-indicator']}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ChevronsDown size={32} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      
    </section>
  );
}