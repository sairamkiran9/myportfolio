import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

const experiences = [
  {
    title: "Software Engineer",
    company: "Florida State University",
    period: "Dec 2022 - Present",
    description: [
      "Developed a monitoring platform integrating third-party services, cutting costs by $50K/year.",
      "Automated diagnostics & work orders, reducing manual intervention by 60% and downtime by 30%.",
      "Built AI-driven agents & forecasting, optimizing energy usage for campus sustainability.",
      "Designed CI/CD pipelines, cutting deployment time by 50% and improving system reliability."
    ]
  },
  {
    title: "Software Developer",
    company: "Amdocs",
    period: "Jul 2021 - Aug 2022",
    description: [
      "Developed a microservice with OPA Gatekeeper for secure image signing across AWS, GCP, and Azure.",
      "Integrated AIOps with ML, achieving 80%+ accuracy in anomaly forecasting and downtime detection.",
      "Optimized ReactJS and database performance, enhancing data retrieval and user interaction speed."
    ]
  },
  {
    title: "Engineer",
    company: "ISRO",
    period: "Mar 2020 - Jul 2021",
    description: [
      "Automated API testing and schema validation, detecting 95% of schema-related failures.",
      "Built Spark jobs for GDPR compliance, enhancing processing speed and cutting AWS costs."
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