import React from 'react';
import './ContactPage.css';

const ContactPage = () => (
	<div className="contact-page">
        <div className="left-bar" />
        <div className="info-section">
            info section
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
                    brunohbm23@gmail.com
                </div>
                <div>
                    <span>
                        PHONE:
                    </span>
                        (55) 44 9 9746-1823
                </div>
            </div>
            <div className="social-media">
                <a href="https://www.w3schools.com" target="_blank">
                    <img border="0" alt="W3Schools" src="logo_w3s.gif" width="100" height="100" />
                </a>
                <a href="https://www.w3schools.com" target="_blank">
                    <img border="0" alt="W3Schools" src="logo_w3s.gif" width="100" height="100" />
                </a>
                <a href="https://www.w3schools.com" target="_blank">
                    <img border="0" alt="W3Schools" src="logo_w3s.gif" width="100" height="100" />
                </a>
            </div>
        </div>
	</div>
);

export default ContactPage;