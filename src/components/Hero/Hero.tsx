import { motion } from 'framer-motion';
import { ChevronsDown, Github, Linkedin, Mail, } from 'lucide-react';
import BackgroundAnimation from './BackgroundAnimation';
import SocialLink from './SocialLink';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles['hero-section']}>
      <BackgroundAnimation />
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
          <motion.h2
            className={styles['hero-subtitle']}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Software Engineer - Full Stack
          </motion.h2>

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

          {/* <motion.button
            // className={styles['cta-button']}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <SocialLink href="" icon={<ChevronsDown />} />
          </motion.button> */}
          
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