import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

// Get the base URL from Vite
const baseUrl = import.meta.env.BASE_URL;

const projects = [
  {
    title: "Atomic Habits Agent",
    description: "A comprehensive habit tracking agent inspired by James Clear's 'Atomic Habits' book A comprehensive habit tracking agent with push in-app notification system",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800", // TODO: Replace with local image `${baseUrl}assets/habits.jpg`
    tech: ["NextJs", "FastAPI", "AWS", "Agentic AI", "ChromaDB"],
    github: "https://github.com/sairamkiran9/atomic-habits-agent",
    live: "https://atomic-habits-agent.vercel.app/"
  },
  {
    title: "CancerKG.ORG",
    description: "An AI-based knowledge graph solution for improving semantic retrieval across 13M+ heterogeneous documents.",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800", // Knowledge graph visualization image
    tech: ["Python", "React", "MongoDB", "LLMs", "AWS"],
    github: "https://arxiv.org/pdf/2501.00223",
    live: "http://cancerkg.org/"
  },
  {
    title: "AttnGAN-trans",
    description: "Transformer models for enhancing AttnGAN based text-to-image generation - research paper implementation.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800",
    tech: ["PyTorch", "Deep Learning", "Transformers", "Computer Vision", "NLP"],
    github: "https://github.com/sairamkiran9/AttnGAN-trans",
    live: "https://www.sciencedirect.com/science/article/abs/pii/S026288562100189X?via%3Dihub"
  },
  {
    title: "Network Emulator Java",
    description: "An end-to-end OSI layer client to client communication simulator in Java.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800", // TODO: Replace with local image `${baseUrl}assets/network-emulator.jpg`
    tech: ["Java", "Networking", "OSI Model", "Socket Programming", "Multithreading"],
    github: "https://github.com/sairamkiran9/Network-Emulator-Java",
    live: ""
  },
  {
    title: "CookBuddy",
    description: "A scalable AI based recipe recommender platform hosted on AWS",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    tech: ["Django", "React", "JavaScript", "PostgreSQL", "AWS"],
    github: "https://github.com/sairamkiran9/CookBuddy",
    live: "https://drive.google.com/file/d/1Yp3sEGMDyrm9HqDNFD2joMEHQmRFzXm-/view?usp=sharing"
  },
  {
    title: "CredManager",
    description: "A secure password management tool for storing and sharing passwords securely",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800",
    tech: ["Python", "React", "Firebase", "ChromeExtension"],
    github: "https://github.com/sairamkiran9/cred-manager",
    live: ""
  }
];

export default function Projects() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center text-white mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
    >
      <div className="relative group">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-white"
          >
            <Github size={24} />
          </motion.a>
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-white"
          >
            <ExternalLink size={24} />
          </motion.a>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech: string) => (
            <span 
              key={tech}
              className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}