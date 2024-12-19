import React from "react";
import Profile from "./Profile";
import About from "./About";
import More from "./More";
import Projects from "./Projects";

const Content = () => {
    return (
        <body className="container-body">
            <Profile />
            <About />
            <Projects />
            <More />
        </body>
    );
}

export default Content;