import React, { useRef, useEffect, useState } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  hue: number;
  alpha: number;
}

interface DustParticle {
  x: number;
  y: number;
  size: number;
  hue: number;
  vx: number;
  vy: number;
}

const ParticleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [dustParticles, setDustParticles] = useState<DustParticle[]>([]);
  const [mouse, setMouse] = useState<{ x: number | null; y: number | null }>({ x: null, y: null });

  // Initialize particles and canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializeParticles();
    };
    
    // Create initial particles
    const initializeParticles = () => {
      // Calculate appropriate number of particles based on screen size
      const particleCount = Math.min(Math.floor(canvas.width * canvas.height / 10000), 100);
      const dustCount = particleCount * 2;
      
      // Create main particles
      const newParticles: Particle[] = [];
      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 1,
          vy: (Math.random() - 0.5) * 1,
          size: Math.random() * 2 + 1,
          hue: 210 + Math.random() * 30,
          alpha: 0.5 + Math.random() * 0.5
        });
      }
      
      // Create background dust particles
      const newDustParticles: DustParticle[] = [];
      for (let i = 0; i < dustCount; i++) {
        newDustParticles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1 + 0.5,
          hue: 200 + Math.random() * 60,
          vx: (Math.random() - 0.5) * 0.1,
          vy: (Math.random() - 0.5) * 0.1
        });
      }
      
      setParticles(newParticles);
      setDustParticles(newDustParticles);
    };
    
    resizeCanvas();
    
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  // Animation update loop
  useEffect(() => {
    // Update particles every frame
    const updateParticles = () => {
      setParticles(prevParticles => 
        prevParticles.map(particle => {
          // Move particles
          let newX = particle.x + particle.vx;
          let newY = particle.y + particle.vy;
          
          // Bounce off edges
          if (newX < 0 || newX > canvasRef.current?.width!) {
            particle.vx *= -1;
            newX = particle.x;
          }
          if (newY < 0 || newY > canvasRef.current?.height!) {
            particle.vy *= -1;
            newY = particle.y;
          }
          
          // If mouse is active, create attraction
          if (mouse.x !== null && mouse.y !== null) {
            const dx = mouse.x - newX;
            const dy = mouse.y - newY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 150) {
              const force = 0.5 / Math.max(distance, 30);
              particle.vx += dx * force;
              particle.vy += dy * force;
              
              // Limit velocity
              const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
              if (speed > 3) {
                particle.vx = (particle.vx / speed) * 3;
                particle.vy = (particle.vy / speed) * 3;
              }
            }
          }
          
          return {
            ...particle,
            x: newX,
            y: newY
          };
        })
      );

      // Update dust particles with simpler movement
      setDustParticles(prevDust => 
        prevDust.map(dust => {
          let newX = dust.x + dust.vx;
          let newY = dust.y + dust.vy;
          
          // Wrap around edges
          if (newX < 0) newX = canvasRef.current?.width!;
          if (newX > canvasRef.current?.width!) newX = 0;
          if (newY < 0) newY = canvasRef.current?.height!;
          if (newY > canvasRef.current?.height!) newY = 0;
          
          return {
            ...dust,
            x: newX,
            y: newY
          };
        })
      );
    };

    const animationId = requestAnimationFrame(function animate() {
      updateParticles();
      drawFrame();
      requestAnimationFrame(animate);
    });

    return () => cancelAnimationFrame(animationId);
  }, [mouse]);

  // Draw the canvas
  const drawFrame = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    // Clear canvas with semi-transparent black to create trail effect
    ctx.fillStyle = "rgba(15, 23, 42, 0.2)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw connecting lines between particles
    ctx.strokeStyle = "rgba(100, 150, 255, 0.05)";
    ctx.lineWidth = 0.5;
    
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    // Draw dust particles
    dustParticles.forEach(dust => {
      ctx.beginPath();
      ctx.arc(dust.x, dust.y, dust.size, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${dust.hue}, 30%, 70%, 0.1)`;
      ctx.fill();
    });

    // Draw main particles
    particles.forEach(particle => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(210, 80%, 60%, ${particle.alpha})`;
      ctx.fill();
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setMouse({ x: e.clientX, y: e.clientY });
  };

  const handleMouseOut = () => {
    setMouse({ x: null, y: null });
  };

  return (
    <canvas
      ref={canvasRef}
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseOut}
      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }}
    />
  );
};

export default ParticleCanvas;