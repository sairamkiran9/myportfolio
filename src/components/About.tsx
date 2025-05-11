import { motion } from 'framer-motion';
import { Brain, Code2, Codepen, Infinity, Database, Terminal, Cloud, BarChart3 } from 'lucide-react';

export default function About() {
  const skills = [
    {
      icon: <Terminal className="w-6 h-6" />,
      title: "Distributed Systems",
      description: "Architected high-throughput, fault-tolerant distributed systems using Java, Spring Boot, and Apache Kafka handling 5M+ daily API calls at 99.99% uptime"
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Microservices Architecture",
      description: "Led migration from monoliths to event-driven architecture with gRPC communication, reducing service coupling by 60% and improving inter-service throughput by 40%"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database Optimization",
      description: "Orchestrated horizontal sharding for PostgreSQL, optimized SQL queries, and implemented Redis caching with custom eviction policies, achieving 2x performance improvement"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Infrastructure",
      description: "Built autoscaling mechanisms on AWS ECS and Fargate, optimizing compute costs by 25%. Experienced with AWS, GCP, and Azure cloud platforms"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "DevOps & Observability",
      description: "Redesigned CI/CD pipelines with GitHub Actions and ArgoCD, reducing deployment time from 30 to 5 minutes. Implemented Prometheus and Grafana monitoring, cutting MTTR by 75%"
    },
    {
      icon: <Infinity className="w-6 h-6" />,
      title: "API Design & Security",
      description: "Standardized API contracts with OpenAPI and implemented rate limiting with Envoy sidecars. Enhanced security with OAuth 2.0 and Keycloak, reducing support tickets by 25%"
    },
    {
      icon: <Codepen className="w-6 h-6" />,
      title: "Frontend Development",
      description: "Built dynamic, role-based UIs in React with SSO integration. Implemented lazy loading and memoization, reducing load times by 45% and boosting performance scores from 68 to 94"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Machine Learning",
      description: "Published research on transformer models for enhancing AttnGAN-based text-to-image generation in Elsevier Image and Vision Computing"
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
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I'm a software engineer specializing in distributed systems and full-stack development. With experience at Skyline Infrastructure and Amdocs, I've built high-throughput, fault-tolerant applications processing millions of transactions daily. My expertise spans microservices architecture, cloud infrastructure, and performance optimization, consistently delivering 99.99% uptime while reducing costs and improving efficiency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors h-full"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4 mx-auto text-white"
              >
                {skill.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-2 text-center">{skill.title}</h3>
              <p className="text-gray-300 text-center text-sm">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}