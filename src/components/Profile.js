import React from 'react';

const Profile = () => {
    return (

        <div className="column-list">
            <div className="column">
                <p className="intro para1">I’m a dedicated software developer
                    specializing in designing, developing, and optimizing real-time applications using AI, Python,
                    PostgreSQL, and the ReactJS technology stack. With a strong focus on CI/CD practices and cloud
                    solutions, I leverage AWS to build robust, scalable cloud applications that meet
                    industry-specific needs. My experience spans full-stack development, cloud-native architectures,
                    and distributed systems, ensuring high performance and reliability.</p>
                <p className="intro para2">Driven by a passion for innovation, I excel in
                    simplifying complex challenges, thriving in fast-paced environments, and delivering efficient
                    solutions. With strong collaboration and problem-solving skills, I continuously learn and
                    integrate cutting-edge technologies to drive business success and transformation.</p>
            </div>
            <div className="column">
            <figure class="profile-fig">
    <a href="profile.png">
        <img class="image" src="profile.png" alt="Profile Image" />
    </a>
</figure>
            </div>
        </div>

    );
};

export default Profile;
