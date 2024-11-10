import React from "react";
import '../styles/ContactTemplate.css'

const ContactTemplate = ({ contacts }) => {
    console.log(contacts)
    return (
        <div className="contact-container">
            <div className="contact-cards">
                {contacts && contacts.length > 0 ? (
                    contacts.map((contact, index) => (
                        <button
                            key={index}
                            className="contact-card"
                            onClick={() => (window.location.href = contact.url)}
                        >
                            <div className="contact-card-content">
                                {contact.icon && (
                                    <img
                                        className="contact-icon"
                                        src={contact.icon}
                                        alt={`${contact.title} icon`}
                                    />
                                )}
                                {contact.title && (
                                    <a href={contact.url}>{contact.title}</a>
                                )}
                            </div>
                        </button>
                    ))
                ) : (
                    <p>No contacts available</p>
                )}
            </div>
        </div>
    );
};

export default ContactTemplate;
