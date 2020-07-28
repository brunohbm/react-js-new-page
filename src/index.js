import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import './styles/fonts.css';
import './index.css';

import Logo from './components/Logo';
import ContactButton from './components/ContactButton';
import ControlButtons from './components/ControlButtons';

import MainPage from './pages/MainPage';
import PortfolioPage from './pages/PortfolioPage';

const App = () => {
	const render = {
		intro: props => <MainPage {...props} />,
		portfolio: props => <PortfolioPage {...props} />,
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
		setOnTransition(true);		

		setTimeout(() => {
			setActualState(nextPage);

			setTimeout(() => {
				callback();
				setOnTransition(false);
			}, 3000);
		}, 3500);
	}, []);

	const onUp = useCallback(resetAction => {
		initTransition(-1, resetAction);
	}, []);

	const onDown = useCallback(resetAction => {
		initTransition(1, resetAction);
	}, []);

	return (
		<div id="mainContainer" className={`main-container ${onTransition ? 'on-transition' : ''} ${actualState}`}>			
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