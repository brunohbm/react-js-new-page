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

const render = {
	intro: props => <MainPage {...props} />,
	carrer: props => <CarrerPage {...props} />,
	portfolio: props => <PortfolioPage {...props} />,
};

const App = () => {
	const [actualState, setActualState] = useState('portfolio');
	const [onTransition, setOnTransition] = useState(false);

	const pageProps = {
		disabled: onTransition,
	};
	
	const goToContactPage = () => {

	}

	const findKey = useCallback(amount => {
		console.debug({ amount });
		console.debug({ actualState });
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
		console.debug({ nextPage });

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

	const getTransitionClass = () => {
		if(onTransition) {
			return onTransition === 'UP' ? 'up' : 'down';
		}
		return '';
	};

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