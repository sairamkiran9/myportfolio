import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "CancerKG.ORG",
    description: "A knowledge graph based search engine with 13M+ nodes.",
    image: "./assets/cancer.png",
    tech: ["Python", "React", "MongoDB", "LLMs", "AWS"],
    github: "https://github.com/sairamkiran9",
    live: "http://cancerkg.org/"
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
    description: "A secure password management tool for storign and sharing passwords securely",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800",
    tech: ["Python", "React", "Firebase", "ChromeExtension"],
    github: "https://github.com/sairamkiran9/cred-manager",
    live: ""
  }
];

export default function Projects() {
  return (
    <section className="py-20 bg-gray-900">
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
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
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