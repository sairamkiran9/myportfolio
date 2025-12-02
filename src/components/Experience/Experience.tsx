import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

const experiences = [
  {
    title: "Software Engineer",
    company: "Florida State University",
    period: "Aug 2022 – Present",
    description: [
      "Live Monitoring Dashboards: Developed real-time event streaming (HVAC, meters) and automatic workorder generation platform.",
      "Energy Forecasting: Built models for energy forecasting, occupancy estimation, and predictive analytics for proactive maintenance and space optimization.",
      "Implemented automations such as PPCL code generator, monthly utility consumption reports for efficient utilities management.",
      "Tech Stack: Java, Python, Kafka, Kubernetes, AWS, Redis, PostgreSQL, Large Language Models, Agentic RAG."
    ]
  },
  {
    title: "Software Engineer",
    company: "Amdocs",
    period: "Jul 2021 – Jul 2022",
    description: [
      "Backend: Developed backend systems processing 2M+ daily transactions, automating critical telecom workflows and streamlining operations.",
      "AIOps: Designed ML models for root cause analysis and anomaly detection, reducing downtime by 20% in PoC.",
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