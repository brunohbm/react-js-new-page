import React, {useState} from 'react';

import './ContactButton.css';

const ContactButton = ({ onClick, onTransition, dontShow }) => {
	const [disabled, setDisabled] = useState(true);

	return (
		<button 
			onAnimationEnd={() => { setDisabled(false); }}
			disabled={onTransition || disabled || dontShow}
			onClick={(disabled || dontShow) ? null : onClick} 
			className={`contact-button ${dontShow ? 'disabled' : ''}`} 
		>
			CONTACT ME
		</button>
	);
}

export default ContactButton;