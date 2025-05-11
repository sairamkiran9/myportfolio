import { motion } from 'framer-motion';
import SkillCategory from './SkillCategory';

const skillsData = {
  languages: [
    { title: 'Java', level: 95, color: 'bg-red-500' },
    { title: 'Python', level: 90, color: 'bg-red-400' },
    { title: 'JavaScript', level: 85, color: 'bg-red-600' },
    { title: 'TypeScript', level: 85, color: 'bg-red-500' },
    { title: 'Go', level: 80, color: 'bg-red-400' },
    { title: 'C++', level: 75, color: 'bg-red-600' },
    { title: 'SQL', level: 90, color: 'bg-red-500' },
    { title: 'Shell', level: 80, color: 'bg-red-400' },
  ],
  frameworks: [
    { title: 'Spring Boot', level: 95, color: 'bg-blue-500' },
    { title: 'React', level: 90, color: 'bg-blue-400' },
    { title: 'Node.js', level: 85, color: 'bg-blue-600' },
    { title: 'Apache Kafka', level: 90, color: 'bg-blue-500' },
    { title: 'gRPC', level: 85, color: 'bg-blue-400' },
    { title: 'JUnit', level: 85, color: 'bg-blue-600' },
    { title: 'Hadoop', level: 80, color: 'bg-blue-500' },
    { title: 'Helm', level: 75, color: 'bg-blue-400' },
  ],
  databases: [
    { title: 'PostgreSQL', level: 95, color: 'bg-green-500' },
    { title: 'MongoDB', level: 90, color: 'bg-green-400' },
    { title: 'Redis', level: 90, color: 'bg-green-600' },
    { title: 'Kafka Streams', level: 85, color: 'bg-green-500' },
  ],
  devops: [
    { title: 'Docker', level: 95, color: 'bg-purple-500' },
    { title: 'Kubernetes', level: 90, color: 'bg-purple-400' },
    { title: 'GitHub Actions', level: 85, color: 'bg-purple-600' },
    { title: 'Jenkins', level: 90, color: 'bg-purple-500' },
    { title: 'ArgoCD', level: 85, color: 'bg-purple-400' },
    { title: 'Prometheus', level: 80, color: 'bg-purple-600' },
    { title: 'Grafana', level: 80, color: 'bg-purple-500' },
    { title: 'Envoy', level: 75, color: 'bg-purple-400' },
  ],
  cloud: [
    { title: 'AWS', level: 90, color: 'bg-yellow-500' },
    { title: 'GCP', level: 85, color: 'bg-yellow-400' },
    { title: 'Azure', level: 80, color: 'bg-yellow-600' },
    { title: 'AWS ECS', level: 90, color: 'bg-yellow-500' },
    { title: 'AWS Fargate', level: 85, color: 'bg-yellow-400' },
    { title: 'Consul', level: 80, color: 'bg-yellow-600' },
  ],
};

export default function Skills() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            With experience building high-throughput, fault-tolerant distributed systems processing millions of transactions daily, I've developed expertise across the full technology stack.
          </p>
        </motion.div>
        
        <div className="space-y-16">
          <SkillCategory title="Programming Languages" skills={skillsData.languages} />
          <SkillCategory title="Frameworks & Libraries" skills={skillsData.frameworks} />
          <SkillCategory title="Databases & Data Systems" skills={skillsData.databases} />
          <SkillCategory title="DevOps & CI/CD" skills={skillsData.devops} />
          <SkillCategory title="Cloud & Infrastructure" skills={skillsData.cloud} />
        </div>
      </div>
    </section>
  );
}