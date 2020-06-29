import React from 'react';

import './ContactButton.css';

const ContactButton = ({ onClick }) => (
	<button className="contact-button" onClick={onClick}>
		CONTACT ME
	</button>
);

export default ContactButton;