import React, {useState} from 'react';

import './ContactButton.css';

const ContactButton = ({ onClick, onTransition }) => {
	const [disabled, setDisabled] = useState(true);

	return (
		<button 
			className="contact-button" 
			disabled={onTransition || disabled}
			onClick={disabled ? null : onClick} 
			onAnimationEnd={() => { setDisabled(false); }}
		>
			CONTACT ME
		</button>
	);
}

export default ContactButton;