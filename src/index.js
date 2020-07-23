import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import './styles/fonts.css';
import './index.css';

import Logo from './components/Logo';
import ContactButton from './components/ContactButton';
import ControlButtons from './components/ControlButtons';

import MainPage from './pages/MainPage';

const App = () => {
	const render = {
		intro: props => <MainPage {...props} />,
		// newPage: props => <MainPage {...props} />,
	};
	const [actualState, setActualState] = useState('intro');
	const [onTransition, setOnTransition] = useState(false);

	const pageProps = {
		disabled: onTransition,
	};
	
	const goToContactPage = () => {

	}

	const findKey = useCallback(amount => {
		const keys = Object.keys(render);
		var nextPage = '';
		keys.forEach((key, position) => {
			if(key === actualState) {
				nextPage = keys[position + amount];
			}
		});

		return nextPage;
	}, [actualState]);

	const initTransition = useCallback((amount, callback) => {
		const nextPage = findKey(amount);
		const transition = document.querySelector('.main-container');
		setOnTransition(true);
		
		transition.addEventListener('transitionend', transition => {			
			console.warn('transition', transition.target);
			console.warn('nextPage', nextPage);	
			if (!((transition.target || {}).id === 'mainContainer')) return;		
			setActualState(nextPage);
			setTimeout(() => {
				callback();
				setOnTransition(false);
				window.removeEventListener('transitionend', onFinishTransition);
			}, 700);
		});		
	}, []);

	const onUp = useCallback(resetAction => {
		initTransition(1, resetAction);
	}, []);

	const onDown = useCallback(resetAction => {
		initTransition(-1, resetAction);
	}, []);

	return (
		<div key="mainContainer" className={`main-container ${onTransition ? 'on-transition' : ''} ${actualState}`}>			
			<Logo />
			<ContactButton 
				onClick={goToContactPage} 
				onTransition={onTransition}
			/>
			<ControlButtons 
				onUp={onUp}
				onDown={onDown}	
				onTransition={onTransition}
			/>
			{render[actualState] ? render[actualState](pageProps) : null}
		</div>
	);
};
 
ReactDOM.render(<App/>, document.getElementById('container'));