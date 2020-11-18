import React from 'react';
import './MainPage.css';
import hand from '../../assets/images/hand.png';

const MainPage = () => (
	<div className="main-page">
		<h1 className="first-text-part">HOW CAN I</h1>
		<h1 className="second-text-part">HOW CAN I</h1>
		<h1 className="third-text-part">HELP YOU ?</h1>
		<h1 className="fourth-text-part">HELP YOU ?</h1>
		<img className="down-hand" src={hand} alt="Down Hand" />
		<img className="up-hand" src={hand} alt="Up Hand" />
	</div>
);

export default MainPage;