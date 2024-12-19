import "../styles/Projects.css";

const Projects = () => {
    // Sample data for the projects
    const projects = [
        {
            id: 1,
            image: "Image1",
            title: "Project 1",
            description: "This is the first project.",
            buttons: ["button1", "button2"],
        },
        {
            id: 2,
            image: "Image2",
            title: "Project 2",
            description: "This is the second project.",
            buttons: ["button1", "button2"],
        },
        {
            id: 3,
            image: "Image3",
            title: "Project 3",
            description: "This is the third project.",
            buttons: ["button1", "button2"],
        },
    ];

    return (
        <div className="projects-container">
            <div className="projects">
                {projects.map((project) => (
                    <div key={project.id} className="project">
                        <a className="project-image">{project.image}</a>
                        <h2 className="project-title">{project.title}</h2>
                        <p className="project-description">{project.description}</p>
                        <div className="project-buttons">
                            {project.buttons.map((buttonText, index) => (
                                <button key={index} className="project-button">
                                    {buttonText}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
