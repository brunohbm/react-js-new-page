import React from 'react';
import './MainPage.css';
import hand from '../../assets/images/hand.png';

const MainPage = () => (
	<div className="main-page">
		<h1 className="first-part">HOW CAN I</h1>
		<h1 className="second-part">HOW CAN I</h1>
		<h1 className="first-part">HELP YOU ?</h1>
		<h1 className="second-part">HELP YOU ?</h1>
		<img className="down-hand" src={hand} alt="No image" />
		<img className="up-hand" src={hand} alt="No image" />
	</div>
);

export default MainPage;