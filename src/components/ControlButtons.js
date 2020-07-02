import React, { useState, useEffect } from 'react';

import './ControlButtons.css';

let changeTimeOut = () => {};
let onHover = null;

const ControlButtons = ({ onUp, onDown,  }) => {	
	const [percentActive, setPercentActive] = useState(false);
	const [disabled, setDisabled] = useState(true);
	const handleScroll = () => {
		const position = window.pageYOffset;
		console.warn("position", position);
	};

	const onTransitionEnd = transition => {
		if(onHover) {
			onHover();
		}
	}
	
	useEffect(() => {
		const transition = document.querySelector('.control-percent');
		transition.addEventListener('transitionend', onTransitionEnd);

		window.addEventListener('scroll', handleScroll, { passive: true });
	
		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('transitionend', handleScroll);
		};
	}, []);

	const checkTimeOut = newOnHover => {
		if (disabled) return;	
		clearTimeout(changeTimeOut);
		onHover = null;

		if(newOnHover) {
			changeTimeOut = setTimeout(() => {
				setPercentActive(true);
				onHover = newOnHover;
			}, percentActive ? 700 : 0);
		}	
		
		setPercentActive(false);		
	};

	return (
		<>
			<div className="control-buttons" onAnimationEnd={() => { setDisabled(false); }}>
				<button 
					className="up" 
					onClick={disabled ? null : onUp} 
					onMouseEnter={() => { checkTimeOut(onUp); }}
					onMouseLeave={() => { checkTimeOut(); }}
				>
					<span>
						^
					</span>
				</button>
				<button 
					className="down" 
					onClick={disabled ? null : onDown} 
					onMouseEnter={() => { checkTimeOut(onDown); }}
					onMouseLeave={() => { checkTimeOut(); }}
				>
					<span>
						^
					</span>
				</button>
			</div>
			<div className={`control-percent ${percentActive ? 'active' : ''}`}>
				<svg>
					<circle cx="25" cy="25" r="25" />
				</svg>			
			</div>
		</>
	);
}

export default ControlButtons;