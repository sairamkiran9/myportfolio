import React from "react";
import Profile from "./Profile";
import About from "./About";
import More from "./More";

const Content = () => {
    return (
        <body className="container-body">
            <Profile />
            <About />
            <More />
        </body>
    );
}

export default Content;