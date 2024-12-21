import { motion } from 'framer-motion';

export default function BackgroundAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-500/10"
          style={{
            width: Math.random() * 300 + 100,
            height: Math.random() * 300 + 100,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );
}