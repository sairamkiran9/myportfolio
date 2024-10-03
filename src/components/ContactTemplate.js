import React from "react";
import '../styles/ContactTemplate.css'

const ContactTemplate = ({ contacts }) => {
    console.log(contacts)
    return (
        <div className="contact-container">
            <div className="contact-cards">
                {contacts && contacts.length > 0 ? (
                    contacts.map((contact, index) => (
                        <div className="contact-card" key={index}>
                            <div className="contact-card-title">
                                {contact.icon && (
                                    <img
                                        className="contact-icon"
                                        src={contact.icon}
                                        alt={`${contact.title} icon`}
                                    />
                                )}
                                <h3>{contact.title || "Contact"}</h3>
                            </div>
                            {contact.content &&
                                <p>
                                    <a href={contact.url}>{contact.content}</a>
                                </p>
                            }
                        </div>
                    ))
                ) : (
                    <p>No contacts available</p>
                )}
            </div>
        </div>
    );
};

export default ContactTemplate;
