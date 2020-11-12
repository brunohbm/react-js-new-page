import React, { useState, useEffect, useRef } from 'react';

import './ControlButtons.css';

const ControlButtons = ({ onUp, onDown, onTransition }) => {	
	const [disabled, setDisabled] = useState(true);	
	const [hasClick, setHasClick] = useState(false);	
	const [percentScroll, setPercentScroll] = useState(0.0);
	const [percentActive, setPercentActive] = useState(false);

	let onHover = useRef(null);
	let percentAmount = useRef(0);
	let isDisabled = useRef(false);
	let isScrollPositive = useRef(false);
	let changeTimeOut = useRef(() => {});
	let scrollTimeOut = useRef(() => {});
	let down = useRef(onDown);
	let up = useRef(onUp);

	useEffect(() => {
		down.current = onDown;
		up.current = onUp;
	}, [onDown, onUp])

	useEffect(() => { isDisabled.current = disabled; }, [disabled]);

	useEffect(() => { setDisabled(Boolean(onTransition)); }, [onTransition]);

	useEffect(() => { 
		scrollTimeOut.current = setTimeout(() => {
			if(!isDisabled.current && percentAmount.current < 160) {
				setPercentScroll(0.0);
				percentAmount.current = 0;
				onHover.current = null;
			}
		}, 1500);
	}, [percentScroll]);

	const onTransitionEnd = () => {
		if(onHover.current) {
			onHover.current(() => {
				setDisabled(false);
				setHasClick(false);
				setPercentScroll(0.0);
				setPercentActive(false);
				onHover.current = null;
				percentAmount.current = 0;
				isDisabled.current = false;
				isScrollPositive.current = false;
				changeTimeOut.current = () => {};
				scrollTimeOut.current = () => {};
			});
			setDisabled(true);			
		}
	}

	const resetScroll = (state) => {
		isScrollPositive.current = state;
		percentAmount.current = 0;
	}

	const increaseScroll = scrollFunction => {
		clearTimeout(scrollTimeOut.current);
		percentAmount.current += 7.3;
		setPercentScroll(percentAmount.current);	
		onHover.current = scrollFunction;
	}

	const onWheel = scroll => {
		if (isDisabled.current) return;

		if(scroll.deltaY > 0) {
			if(!down.current) return;

			if(!isScrollPositive.current) {				
				resetScroll(true);				
			}

			increaseScroll(down.current);
			return;
		}

		if(!up.current) return;
		if(isScrollPositive.current) {
			resetScroll(false);				
		}

		increaseScroll(up.current);
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
		clearTimeout(changeTimeOut.current);
		onHover.current = null;

		if(newOnHover) {
			changeTimeOut.current = setTimeout(() => {
				setPercentActive(true);
				onHover.current = newOnHover;
			}, percentActive ? 700 : 0);
		}	
		
		setPercentActive(false);		
	};

	const onClickUp = () => {
		if(!onUp || disabled) return;
		onHover.current = onUp;
		setHasClick(true);
		setDisabled(true);
	}

	const onClickDown = () => {
		if(!onDown || disabled) return;
		onHover.current = onDown;
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

	console.debug({ disabled });
	console.debug({ onUp: !onUp });

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
					onClick={onClickDown} 
					disabled={disabled || !onDown}
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