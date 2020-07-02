import React, {useState} from 'react';

import './ContactButton.css';

const ContactButton = ({ onClick }) => {
	const [disabled, setDisabled] = useState(true);

	return (
		<button 
			className="contact-button" 
			onClick={disabled ? null : onClick} 
			onAnimationEnd={() => { setDisabled(false); }}
		>
			CONTACT ME
		</button>
	);
}

export default ContactButton;