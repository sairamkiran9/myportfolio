import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, ChevronsDown} from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            John Doe
          </motion.h1>
          <motion.h2 
            className="text-2xl md:text-3xl text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Full Stack Developer
          </motion.h2>
          
          <motion.div 
            className="flex justify-center gap-6 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <SocialLink href="https://github.com" icon={<Github />} />
            <SocialLink href="https://linkedin.com" icon={<Linkedin />} />
            <SocialLink href="mailto:your@email.com" icon={<Mail />} />
          </motion.div>

          <motion.button
            className="px-8 py-3 bg-blue-600 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >cvfaaf
            <SocialLink href="" icon={<ChevronsDown />} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition-colors"
      whileHover={{ scale: 1.2, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
    >
      {icon}
    </motion.a>
  );
}