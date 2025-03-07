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
  const [backgroundHue, setBackgroundHue] = useState<number>(0);
  const [frameCount, setFrameCount] = useState<number>(0);
  const [mouse, setMouse] = useState<{ x: number | null; y: number | null }>({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
    };

    const createParticles = () => {
      const numParticles = adjustParticleCount(canvas);
      const newParticles: Particle[] = [];
      const newDustParticles: DustParticle[] = [];

      for (let i = 0; i < numParticles; i++) {
        newParticles.push(createParticle(canvas));
      }
      for (let i = 0; i < 200; i++) {
        newDustParticles.push(createDustParticle(canvas));
      }

      setParticles(newParticles);
      setDustParticles(newDustParticles);
    };

    const adjustParticleCount = (canvas: HTMLCanvasElement) => {
      const heightConditions = [200, 300, 400, 500, 600];
      const widthConditions = [450, 600, 900, 1200, 1600];
      const particlesForHeight = [40, 60, 70, 90, 110];
      const particlesForWidth = [40, 50, 70, 90, 110];

      let numParticles = 130;

      for (let i = 0; i < heightConditions.length; i++) {
        if (canvas.height < heightConditions[i]) {
          numParticles = particlesForHeight[i];
          break;
        }
      }

      for (let i = 0; i < widthConditions.length; i++) {
        if (canvas.width < widthConditions[i]) {
          numParticles = Math.min(numParticles, particlesForWidth[i]);
          break;
        }
      }

      return numParticles;
    };

    const createParticle = (canvas: HTMLCanvasElement): Particle => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        hue: Math.random() * 360,
        alpha: 1,
      };
    };

    const createDustParticle = (canvas: HTMLCanvasElement): DustParticle => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        hue: Math.random() * 360,
        vx: (Math.random() - 0.5) * 0.05,
        vy: (Math.random() - 0.5) * 0.05,
      };
    };

    const drawBackground = () => {
      setBackgroundHue((prev) => (prev + 0.2) % 360);
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, `hsl(${backgroundHue}, 40%, 15%)`);
      gradient.addColorStop(1, `hsl(${(backgroundHue + 180) % 360}, 40%, 15%)`);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const drawParticles = () => {
      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${particle.hue}, 80%, 60%, ${particle.alpha})`;
        ctx.fill();
      });
    };

    const drawDustParticles = () => {
      dustParticles.forEach((dust) => {
        ctx.beginPath();
        ctx.arc(dust.x, dust.y, dust.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${dust.hue}, 30%, 70%, 0.3)`;
        ctx.fill();
      });
    };

    const animate = () => {
      setFrameCount((prev) => prev + 1);
      drawBackground();
      drawDustParticles();
      drawParticles();
      requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [backgroundHue, particles, dustParticles]);

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
      style={{ display: "block", zIndex:-3 }}
    />
  );
};

export default ParticleCanvas;
