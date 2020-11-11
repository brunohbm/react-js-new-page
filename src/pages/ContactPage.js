import React from 'react';
import './ContactPage.css';

import instagramSvg from '../assets/instagram.svg';
import linkedinSvg from '../assets/linkedin.svg';
import githubSvg from '../assets/github.svg';

const ContactPage = () => (
	<div className="contact-page">
        <div className="left-bar" />
        <div className="info-section">
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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