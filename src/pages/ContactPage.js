import React from 'react';
import './ContactPage.css';

import instagramSvg from '../assets/instagram.svg';
import linkedinSvg from '../assets/linkedin.svg';
import githubSvg from '../assets/github.svg';

const ContactPage = () => (
	<div className="contact-page">
        <div className="left-bar" />
        <div className="info-section">
        Hello, how can I help you? My name is Bruno Henrique I'm a developer and I do some design works too. If you need anything or you have some questions,  please contact me. I'm sure that we can help each other. 
        </div>
        <div className="contact-section">
            <div className="title">
                CONTACT ME
            </div>
            <div className="info">
                <div>
                    <span>
                        EMAIL:
                    </span>
                    {' brunohbm23@gmail.com'}
                </div>
                <div>
                    <span>
                        PHONE:
                    </span>
                        {' (55) 44 9 9746-1823'}
                </div>
            </div>
            <div className="social-media">
                <a href="https://www.instagram.com/brunohbm23/" target="_blank">
                    <img border="0" alt="Instagram" src={instagramSvg} width="100" height="100" />
                </a>
                <a href="https://www.linkedin.com/in/brunohbm/" target="_blank">
                    <img border="0" alt="Linkedin" src={linkedinSvg} width="100" height="100" />
                </a>
                <a href="https://github.com/brunohbm" target="_blank">
                    <img border="0" alt="Github" src={githubSvg} width="100" height="100" />
                </a>
            </div>
        </div>
	</div>
);

export default ContactPage;