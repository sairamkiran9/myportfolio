import React from "react";
import '../styles/AboutTemplate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AboutTemplate = ({ data }) => {
    return (
        <div className="about-container">
            <div className="about-cards">
                {data.map((item, index) => (
                    <div className="about-card" key={index}>
                        <div className={`about-card-title ${item.class}`}>
                            { item.icon && <FontAwesomeIcon className='about-icon' icon={item.icon} size='lg' style={{color: "#9f6b53",}} />}
                            <h3>{item.title}</h3>
                        </div>
                        <p className="about-card-subtitle">{item.subtitle}</p>
                        { item.dates && 
                        <div className="about-card-flex">
                            <p className="about-card-location">{item.location}</p>
                            <p className="about-card-dates">{item.dates}</p>
                        </div>
                        }
                        <p className="about-card-summary">{item.summary}</p>
                        {item.content && (
                            <div className="about-card-content">{item.content}</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutTemplate;
