import { motion } from 'framer-motion';
import { Brain, Code2, Codepen, Infinity, Database, Terminal } from 'lucide-react';

export default function About() {
  const skills = [
    {
      icon: <Terminal className="w-6 h-6" />,
      title: "Backend Development",
      description: "Architected multiple RESTFUL API services using Python (Django, Flask) and NextJS"
    },
    {
      icon: <Codepen className="w-6 h-6 bd-organe" />,
      title: "Frontend Development",
      description: "Expert in React, JavaScript, TypeScript, and modern CSS frameworks"
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "API Integrations",
      description: "Skilled in integrating 3rd party services like Shopify, Stripe into distributed applciations"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database Management",
      description: "Scaled PostgreSQL, MongoDB databases and managed AWS RDS to handle 10TB data per day"
    },
    {
      icon: <Infinity className="w-6 h-6" />,
      title: "CI/CD",
      description: "Expertise in building applications over Docker and Kubernetes. Skilled in buidling shared libraries using Jenkins."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Generative AI",
      description: "Trend forecasting, MLOps, LLMs (GPT3). Authored and was part of two AI publications."
    }
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          I'm a problem solver and am passionate about software engineering and distributed applications. With over 3 years of experience in full-stack development and distributed services, I bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4 mx-auto text-white"
              >
                {skill.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-2 text-center">{skill.title}</h3>
              <p className="text-gray-400 text-center">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}