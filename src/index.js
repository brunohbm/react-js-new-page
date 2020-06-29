import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles/fonts.css';
import './index.css';

import Logo from './components/Logo';
import ContactButton from './components/ContactButton';

import MainPage from './pages/MainPage';

const App = () => {
	const render = {
		intro: props => <MainPage {...props} />,
	};
	const [actualState, setActualState] = useState('intro');
	const [disabledActions, setDisabledActions] = useState(true);

	const pageProps = {
		disabled: disabledActions,
	};
	
	const goToContactPage = () => {

	}

	return (
		<div className={`main-container ${actualState}`}>
			<Logo />
			<ContactButton onClick={goToContactPage} />
			{/* {render[actualState] ? render[actualState](pageProps) : null} */}
		</div>
	);
};
 
ReactDOM.render(<App/>, document.getElementById('container'));