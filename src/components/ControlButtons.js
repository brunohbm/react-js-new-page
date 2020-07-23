import React, { useState, useEffect } from 'react';

import './ControlButtons.css';

let onHover = null;
let percentAmount = 0;
let isDisabled = false;
let isScrollPositive = false;
let changeTimeOut = () => {};
let scrollTimeOut = () => {};

const ControlButtons = ({ onUp, onDown, onTransition }) => {	
	const [disabled, setDisabled] = useState(true);	
	const [hasClick, setHasClick] = useState(false);	
	const [percentScroll, setPercentScroll] = useState(0.0);
	const [percentActive, setPercentActive] = useState(false);

	useEffect(() => { isDisabled = disabled; }, [disabled]);

	useEffect(() => { setDisabled(onTransition || disabled); }, [onTransition]);

	useEffect(() => { 
		scrollTimeOut = setTimeout(() => {
			if(!isDisabled && percentAmount < 160) {
				setPercentScroll(0.0);
				percentAmount = 0;
				onHover = null;
			}
		}, 1500);
	}, [percentScroll]);

	const onTransitionEnd = () => {
		if(onHover) {
			onHover(() => {
				setDisabled(false);
				setHasClick(false);
				setPercentScroll(0.0);
				setPercentActive(false);
				onHover = null;
				percentAmount = 0;
				isDisabled = false;
				isScrollPositive = false;
				changeTimeOut = () => {};
				scrollTimeOut = () => {};
			});
			setDisabled(true);			
		}
	}

	const resetScroll = (state) => {
		isScrollPositive = state;
		percentAmount = 0;
	}

	const increaseScroll = scrollFunction => {
		clearTimeout(scrollTimeOut);
		percentAmount += 7.3;
		setPercentScroll(percentAmount);	
		onHover = scrollFunction;
	}

	const onWheel = scroll => {
		if (isDisabled) return;

		if(scroll.deltaY > 0) {
			if(!onDown) return;

			if(!isScrollPositive) {				
				resetScroll(true);				
			}

			increaseScroll(onDown);
			return;
		}

		if(!onUp) return;
		if(isScrollPositive) {
			resetScroll(false);				
		}

		increaseScroll(onUp);
	}
	
	useEffect(() => {
		const transition = document.querySelector('.control-percent');
		const controlButton = document.querySelector('.main-container');
		
		transition.addEventListener('transitionend', onTransitionEnd);
		controlButton.addEventListener("wheel", onWheel);

		return () => {
			window.removeEventListener('wheel', onWheel);
			window.removeEventListener('transitionend', onTransitionEnd);
		};
	}, []);

	const checkTimeOut = newOnHover => {
		if (disabled || hasClick) return;
		if (percentScroll) {
			setPercentScroll(0);
		}
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

	const onClickUp = () => {
		if(!onUp || disabled) return;
		onHover = onUp;
		setHasClick(true);
		setDisabled(true);
	}

	const onClickDown = () => {
		if(!onDown || disabled) return;
		onHover = onDown;
		setHasClick(true);
		setDisabled(true);
	}

	const getCircleStyle = () => {
		const style = {};

		if (hasClick){
			style.strokeDashoffset = 280;
			return style;
		}

		if(!percentActive) {
			style.strokeDashoffset = (440 - percentScroll);
		}

		return style;
	}	

	return (
		<>
			<div className="control-buttons" onAnimationEnd={() => { setDisabled(false); }}>
				<button 
					className="up" 
					disabled={disabled || !onUp}
					onClick={onClickUp} 
					onMouseEnter={() => { checkTimeOut(onUp); }}
					onMouseLeave={() => { checkTimeOut(); }}
				>
					<span>
						^
					</span>
				</button>
				<button 
					className="down" 
					disabled={disabled || !onDown}
					onClick={onClickDown} 
					onMouseEnter={() => { checkTimeOut(onDown); }}
					onMouseLeave={() => { checkTimeOut(); }}
				>
					<span>
						^
					</span>
				</button>
			</div>
			<div				
				className={`control-percent ${percentActive ? 'active' : ''}`}
			>
				<svg>
					<circle 
						cx="25" 
						cy="25" 
						r="25" 
						style={getCircleStyle()} 
					/>
				</svg>			
			</div>
		</>
	);
}

export default ControlButtons;