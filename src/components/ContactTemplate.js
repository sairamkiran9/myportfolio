import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
                                    <FontAwesomeIcon className='contact-icon' icon={contact.icon} size='lg' style={{color: "#9f6b53",}} />
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
