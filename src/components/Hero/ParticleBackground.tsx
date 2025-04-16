import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
};

export default function ParticleBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate 50 random particles with varying properties
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // Position (X-axis)
      y: Math.random() * 100, // Position (Y-axis)
      size: Math.random() * 4 + 2, // Particle size (2-6)
      duration: Math.random() * 3 + 2, // Animation duration (2-5 seconds)
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="relative w-full h-full bg-gradient-to-b from-gray-950 to-gray-900">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            opacity: [0, 0.5, 0], // Fade in and out
            scale: [0, 1, 0], // Scale up and down
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
