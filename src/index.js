import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import './styles/fonts.css';
import './index.css';

import Logo from './components/Logo';
import ContactButton from './components/ContactButton';
import ControlButtons from './components/ControlButtons';

import MainPage from './pages/MainPage';
import CarrerPage from './pages/CarrerPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';

const render = {
	intro: props => <MainPage {...props} />,
	carrer: props => <CarrerPage {...props} />,
	portfolio: props => <PortfolioPage {...props} />,
	contact: props => <ContactPage {...props} />,
};

const App = () => {
	const [actualState, setActualState] = useState('intro');
	const [onTransition, setOnTransition] = useState(false);

	const pageProps = {
		disabled: onTransition,
	};

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

	const initTransition = useCallback((nextPage, callback, type) => {
		setOnTransition(type);	

		setTimeout(() => {
			setActualState(nextPage);
			setOnTransition(false);

			setTimeout(() => {
				callback();
			}, 3000);
		}, 3500);
	}, []);

	const onUp = resetAction => {
		initTransition(findKey(-1), resetAction, 'UP');
	};
	
	const onDown = resetAction => {
		initTransition(findKey(1), resetAction, 'DOWN');
	};

	const goToContactPage = () => {
		initTransition('contact', () => {}, actualState === 'intro' ? 'UP' : 'DOWN');
	}

	const getTransitionClass = () => {
		if(onTransition) {
			return onTransition === 'UP' ? 'up' : 'down';
		}
		return '';
	};

	console.debug({ actualState });

	return (
		<div 
			id="mainContainer" 
			className={`main-container ${
				onTransition ? 'on-transition' : ''
			} ${
				actualState
			} ${
				getTransitionClass()
			}`}
		>			
			<Logo />
			<ContactButton 
				onClick={goToContactPage} 
				onTransition={onTransition}
				dontShow={actualState === 'contact'}
			/>			
			<ControlButtons 
				onTransition={onTransition}
				onUp={actualState === 'intro' ? null : onUp}
				onDown={actualState === 'contact' ? null : onDown}	
			/>
			{render[actualState] ? render[actualState](pageProps) : null}
		</div>
	);
};
 
ReactDOM.render(<App/>, document.getElementById('container'));