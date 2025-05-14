import React from 'react'
import "./about.scss"
import profileImageReact from '../../assets/react.png';
import profileImageGo from '../../assets/go.png';
import profileImageSql from '../../assets/sql.png';
import profileImageAi from '../../assets/ai.png';

const About = () => {
  return (
    <div className="about-title">
        ABOUT
        <div className="about-card-container">
            <div className="about-card">
                <img src={profileImageReact} alt="Profile" className="profile-image" />
                <div className="about-card-title">Frontend</div>
                <div className='about-card-body'>I build modular and high-performance user interfaces using React.
                     I focus on user experience and actively use modern UI libraries and Tailwind CSS in my projects.
                </div>
            </div>
            <div className="about-card">
                <img src={profileImageGo} alt="Profile" className="profile-image" />
                <div className="about-card-title">Backend</div>
                <div className='about-card-body'>I develop fast and secure RESTful APIs with Go. 
                    I implement middleware structures, token-based authentication systems, and apply microservice principles in my backend development.
                </div>
            </div>
            <div className="about-card">
                <img src={profileImageSql} alt="Profile" className="profile-image" />
                <div className="about-card-title">Database</div>
                <div className='about-card-body'>I have hands-on experience with PostgreSQL and database design. 
                    I'm skilled at creating relational schemas, writing complex queries, and using ORMs efficiently.
                </div>
            </div>
            <div className="about-card">
                <img src={profileImageAi} alt="Profile" className="profile-image" />
                <div className="about-card-title">AI & Automation</div>
                <div className='about-card-body'>I integrate AI-powered recommendation systems and automation tools into my projects.
                     I use Python to build and connect intelligent services to the backend.
                </div>
            </div>
        </div>
    </div>

  )
}

export default About