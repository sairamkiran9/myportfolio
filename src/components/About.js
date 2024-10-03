import React, { useState } from "react";
import '../styles/More.css';
import AboutTemplate from "./AboutTemplate";

const About = () => {
    const skills = [
        {
            title: "Full Stack Development",
            summary: "As a Full-Stack Backend Developer, I leverage my expertise in both front-end and back-end technologies to build scalable, real-time web applications with focus on user satisfaction.",
            icon: "https://www.notion.so/icons/laptop_computer_yellow.svg",
            class: "skill",
            content: "On the front-end, I specialize in HTML, CSS, and JavaScript, using the ReactJS framework to create dynamic, responsive, and interactive user interfaces. For the back-end, I am proficient in Python frameworks like Django and Flask, as well as NodeJS, enabling me to develop robust APIs and handle server-side logic, including real-time data streaming. My approach emphasizes seamless integration between client and server, ensuring optimal performance and user experience. I am dedicated to delivering full-stack solutions that align with business objectives, providing comprehensive functionality and a smooth, engaging user journey.",
        },
        {
            title: "API Development",
            summary: "As a proficient Backend API Developer, I specialize in crafting scalable, high-performance APIs by focusing on delivering secure, well-documented, and maintainable services.",
            icon: "https://www.notion.so/icons/command-line_yellow.svg",
            class: "skill",
            content: "By using Python (Flask, FastAPI), Django Rest Framework, and Java Spring Boot. My approach integrates best practices in RESTful design, ensuring intuitive and efficient endpoints. I am proficient in implementing advanced security protocols, including OAuth, Role-Based Access Control (RBAC), and JSON Web Tokens (JWT), to safeguard data integrity and user privacy. I leverage asynchronous processing to boost performance, especially in microservices architectures, ensuring optimal scalability and reliability. Additionally, I utilize tools such as Postman and Swagger (OpenAPI) for comprehensive API documentation and testing, streamlining integration processes. I am committed to crafting solutions that drive digital transformation and deliver exceptional business value, continuously learning to integrate cutting-edge technologies that enhance functionality and user experience.",
        },
        {
            title: "Database Management",
            summary: "As a Backend Engineer, I specialize in designing, optimizing, and managing both relational and NoSQL databases to handle large-scale structured and unstructured data efficiently.",
            icon: "https://www.notion.so/icons/barcode_yellow.svg",
            class: "skill",
            content: "My approach to database development ensures the systems are highly scalable, secure, and maintainable, with continuous monitoring and optimization to meet business needs and support rapid growth. In PostgreSQL and OracleDB, I focus on query optimization through indexing and query profiling, fine-tuning complex queries, and improving database views for faster data retrieval. I leverage range-based partitioning to distribute large datasets across multiple partitions, which enhances performance by reducing I/O operations on massive tables. In MongoDB, I utilize sharding to horizontally scale databases and ensure high availability, while also optimizing indexes to manage schema-less data more efficiently. ",
        },
        {
            title: "DevOps Cloud",
            summary: "As a Backend Engineer with cloud DevOps expertise, I specialize in automating and optimizing cloud-native solutions to achieve seamless CI/CD deployments with high availability and handle heavy load.",
            icon: "https://www.notion.so/icons/cloud_yellow.svg",
            class: "skill",
            content: "My expertise lies in leveraging AWS and modern DevOps tools to enhance development workflows and ensure reliable application performance. I design and implement robust CI/CD pipelines using Jenkins, focusing on code coverage, linting, and image signing solutions to address vulnerabilities. My experience includes optimizing throughput for cloud-native applications while ensuring observability through tools like Prometheus. By utilizing Docker for containerization and integrating version control systems, I foster collaboration and streamline deployment processes, resulting in efficient, scalable solutions that align with business objectives.",
        },
        {
            title: "Data Engineering",
            summary: "As a Backend Engineer, I excel in managing heavy-load data processing pipelines efficiently to ensure optimal performance and reliability. My focus is on facilitating seamless data flow and support BI initiatives.",
            icon: "https://www.notion.so/icons/chart_yellow.svg",
            class: "skill",
            content: "I specialize in data modeling and analysis, utilizing ETL processes with PySpark on AWS Glue for robust data transformation. My experience includes streaming data using AWS Kinesis, enabling real-time analytics and insights. I also automate ETL workflows with Apache Airflow on-premises and AWS Step Functions, ensuring streamlined data integration and processing. This comprehensive approach allows me to deliver high-quality data solutions that empower organizations to make data-driven decisions.",
        },
        {
            title: "GenAI - LLMs, ML & NLP",
            summary: "In the fast-evolving machine learning landscape, I focus on staying updated with emerging technologies to excel across domains and maintain a competitive edge, emphasizing mainly on model maintainance (LLMOps/MLOps).",
            icon: "https://www.notion.so/icons/robot_yellow.svg",
            class: "skill",
            content: "I have experience in fine-tuning large language models (LLMs) for various applications, including embedding generation and text-to-image synthesis. Additionally, I have experience with AIOps forecasting, utilizing system resource data to predict performance issues proactively. My proof of concept (POC) using Long Short-Term Memory (LSTM) networks on utility management data demonstrates my ability to leverage deep learning for time-series forecasting, contributing to smarter decision-making and resource optimization.",
        },
        {
            title: "Project Management",
            summary: "Agile methodology, Using project management tools (JIRA, Confluence), MVP and deliverables planning, Cross-functional team coordination.",
            icon: "https://www.notion.so/icons/activity_rectangle_yellow.svg",
            class: "skill",
            content: ".",
        },
        {
            title: "Communication",
            summary: "Presenting to stakeholders and leadership, Writing clear and concise documentation. Mentoring interns and collaborating with developers.",
            icon: "https://www.notion.so/icons/megaphone_yellow.svg",
            class: "skill",
            content: ".",
        },
    ];

    const experience = [
        {
            title: "Software Engineer",
            subtitle: "Florida State University",
            dates: "May 2024 - Present",
            location: "Tallahasse, FL",
            summary: "",
            icon: "",
            content: "",
        },
        {
            title: "Software Engineer Intern",
            subtitle: "Florida State University",
            dates: "Dec 2022 - May 2024",
            location: "Tallahasse, FL",
            summary: "",
            icon: "",
            content: "",
        },
        {
            title: "Software Developer",
            subtitle: "Amdocs",
            dates: "Jul 2021 - Jul 2022",
            location: "Pune, India",
            summary: "",
            icon: "",
            content: "",
        },
        {
            title: "Freelance Engineer",
            subtitle: "Indian Space Research Organisation",
            dates: "Mar 2020 - Jun 2021",
            location: "Sriharikota, India",
            summary: "",
            icon: "",
            content: "",
        }
    ];

    const education = [
        {
            title: "Master of Science",
            subtitle: "Florida State University",
            dates: "2022 - 2024",
            location: "Tallahasse, FL",
            summary: "",
            icon: "",
            content: "",
        },
        {
            title: "Bachelor of Technology",
            subtitle: "National Institute of Technology, Calicut",
            dates: "2017 - 2021",
            location: "Kerala, India",
            summary: "",
            icon: "",
            content: "",
        },
    ];

    // State to track which content is displayed
    const [showContacts, setShowContacts] = useState(1);

    return (
        <div>
            <h2 className="more-title">Me in a nutshell 👇</h2>
            <div className="button-group">
                <button
                    className={`toggle-button ${showContacts === 1 ? 'active' : ''}`}
                    onClick={() => setShowContacts(1)}
                >
                    <img className="button-icon" src="https://www.notion.so/icons/window_brown.svg" alt="Contact Icon" />
                    Skills
                </button>
                <button
                    className={`toggle-button ${showContacts === 2 ? 'active' : ''}`}
                    onClick={() => setShowContacts(2)}
                >
                    <img className="button-icon" src="https://www.notion.so/icons/briefcase_brown.svg" alt="Interests Icon" />
                    Experience
                </button>
                <button
                    className={`toggle-button ${showContacts === 3 ? 'active' : ''}`}
                    onClick={() => setShowContacts(3)}
                >
                    <img className="button-icon" src="https://www.notion.so/icons/book-closed_brown.svg" alt="Interests Icon" />
                    Education
                </button>
            </div>
            <hr />
            <div className="cards-group">
                {/* Conditionally render based on the state */}
                {showContacts === 1 ? (
                    <AboutTemplate data={skills} />
                ) : showContacts === 2 ? (
                    <AboutTemplate data={experience} />
                ) : (
                    <AboutTemplate data={education} />
                )}
            </div>
        </div>
    );
};

export default About;
