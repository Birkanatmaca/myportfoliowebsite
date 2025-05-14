import React from 'react';
import "./home.scss";
import profileImage from '../../assets/profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-content">
        
        <div className="home-container">
          <img src={profileImage} alt="Profile" className="profile-image" />
          <div className="title">
            <span className="welcome">WELCOME</span>
            <br />
            <span className="personal">My name is Birkan.</span>
            <br />
            <span className="personal">I am Jr. Fullstack Developer.</span>
            <div className="social-card">
              <div className="social-icons">
                <a href="https://github.com/birkanatmaca" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="icon" />
                  <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/birkanatmaca" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} className="icon" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Sosyal medya kartı */}
        

      </div>
    </div> 
  );
};

export default Home;
