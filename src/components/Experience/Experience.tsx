import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

const experiences = [
  {
    title: "Software Engineer",
    company: "Florida State University",
    period: "May 2024 - Present",
    description: [
      "Led development of a React-based web applications for real-time monitoring",
      "Automated backend API integrations slashing manual work hours by 80%",
      "Implemented CI/CD Jenkins pipelines reducing deployment time by 50%",
      "Mentored junior developers and conducted code reviews."
    ]
  },
  {
    title: "Software Engineer Intern",
    company: "Florida State University",
    period: "Dec 2022 - May 2024",
    description: [
      "Developed and maintained multiple integration services of Assetworks and Siemens.",
      "Optimized PostgreSQL queries usign range based partitions, improving performance by 40%"
    ]
  },
  {
    title: "Software Developer",
    company: "Amdocs",
    period: "Jul 2021 - Aug 2022",
    description: [
      "Built responsive web pages using React, adopted custom hooks for better user experience",
      "Optimised enterprise level microservices and built an AIOps risk management tool",
      "Managed infrastructure ensuring high availability and performance by leveraging AWS"
    ]
  },
  {
    title: "Engineer Intern",
    company: "ISRO",
    period: "Mar 2021 - Jul 2021",
    description: [
      "Migrated and developed RESTful API services using Python Flask and Oracle19C",
      "Participated in daily stand-ups and sprint planning in an agile environment"
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