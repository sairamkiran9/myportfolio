import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

const experiences = [
  {
    title: "Software Engineer",
    company: "Florida State University",
    period: "Aug 2022 – Present",
    description: [
      "Backend: Designed and optimized backend systems for FSU’s enterprise applications and campus-wide BAS, enabling efficient utilities management.",
      "Microservices: Migrated monoliths to event-driven microservices using Kafka for real-time BAS event streaming (HVAC, meters) on Kubernetes clusters.",
      "AI: Built models for energy forecasting, occupancy estimation, and predictive analytics for proactive maintenance and space optimization.",
      "Tech Stack: Java, Spring Boot, Kafka, gRPC, Kubernetes, AWS, Redis, PostgreSQL, Prometheus, Grafana, AI/ML."
    ]
  },
  {
    title: "Software Engineer",
    company: "Amdocs",
    period: "Jul 2021 – Jul 2022",
    description: [
      "Backend: Developed backend systems processing 2M+ daily transactions, automating critical telecom workflows and streamlining operations.",
      "AIOps: Built AWS data pipelines processing 10TB of streaming data daily. Designed ML models for root cause analysis and anomaly detection, reducing downtime by 20% in PoC.",
      "REST APIs: Integrated REST APIs to connect services, automate workflows, and enable seamless data exchange across platforms.",
      "Tech Stack: Java, Spring, Docker Swarm, RabbitMQ, ActiveMQ, Liquibase, ELK Stack, Jenkins, SQL, AWS, ML for AIOps."
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