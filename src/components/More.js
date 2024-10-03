import React, { useState } from "react";
import ContactTemplate from "./ContactTemplate";
import '../styles/More.css';  

const More = () => {
    const contacts = [
        {
            title: "Email",
            url: "mailto:kiranmuppana36@gmail.com",
            icon: "https://www.notion.so/icons/mail_yellow.svg",
            content: "kiranmuppana36@gmail.com",
        },
        {
            title: "LinkedIn",
            url: "https://www.linkedin.com/in/kiran-muppana/",
            icon: "https://www.notion.so/icons/user_yellow.svg",
            content: "https://www.linkedin.com/in/kiran-muppana/",
        },
    ];

    const interests = [
        {
            title: "Cooking",
            url: "",
            icon: "https://www.notion.so/icons/apron_yellow.svg",
            content: "I enjoy experimenting with different recipes.",
        },
        {
            title: "Dancing",
            url: "",
            icon: "https://www.notion.so/icons/people_yellow.svg",
            content: "Dancing helps me stay active and creative.",
        },
    ];

    // State to track which content is displayed
    const [showContacts, setShowContacts] = useState(true);

    return (
        <div>
            <h2 className="more-title">Let’s get in touch</h2>
            <div className="button-group">
                <button
                    className={`toggle-button ${showContacts ? 'active' : ''}`}
                    onClick={() => setShowContacts(true)}
                >
                    <img className="button-icon" src="https://www.notion.so/icons/user_circle_brown.svg" alt="Contact Icon" />
                    Contact
                </button>
                <button
                    className={`toggle-button ${!showContacts ? 'active' : ''}`}
                    onClick={() => setShowContacts(false)}
                >
                    <img className="button-icon" src="https://www.notion.so/icons/heart_brown.svg" alt="Interests Icon" />
                    Interests
                </button>
            </div>
            <hr />
            <div className="cards-group">
                {/* Conditionally render based on the state */}
                {showContacts ? (
                    <ContactTemplate contacts={contacts} />
                ) : (
                    <ContactTemplate contacts={interests} />
                )}
            </div>
        </div>
    );
};

export default More;
