import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

const experiences = [
  {
    title: "Software Development Engineer 2",
    company: "Skyline Infrastructure",
    period: "Jul 2022 – Present",
    description: [
      "Built scalable microservices for a rental platform handling 5M+ daily API requests with 99.99% uptime.",
      "Migrated monolith to event-driven architecture, reducing system coupling by 60%.",
      "Improved system performance with gRPC, PostgreSQL sharding, and Redis caching.",
      "Reduced deployment time by 80% and incident response time by 75% with CI/CD and observability tools.",
      "Tech stack: Java, Spring Boot, Kafka, Kubernetes, AWS (ECS, Fargate), Redis, gRPC, PostgreSQL, Prometheus, Grafana."
    ]
  },
  {
    title: "Software Engineer",
    company: "Amdocs",
    period: "Jul 2021 – Jul 2022",
    description: [
      "Developed backend systems processing 2M+ daily transactions and automated telecom workflows.",
      "Refactored monolith to microservices, improving release cycles and system modularity.",
      "Built a job scheduler, automated DB migrations, and optimized SQL for faster reporting.",
      "Enhanced code quality with 85% test coverage, TDD adoption, and CI/CD pipelines.",
      "Tech stack: Java, Spring, Docker Swarm, RabbitMQ, ActiveMQ, Liquibase, ELK Stack, Jenkins, SQL."
    ]
  }
];


export default function Experience() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Work Experience
        </motion.h2>

        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-700 before:to-transparent">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}