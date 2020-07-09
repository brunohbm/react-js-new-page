import React from 'react';
import './MainPage.css';
import hand from '../../assets/images/hand.png';

const MainPage = () => (
	<div className="main-page">
		<h1 className="first-text-part">HOW CAN I</h1>
		<h1 className="second-text-part">HOW CAN I</h1>
		<h1 className="third-text-part">HELP YOU ?</h1>
		<h1 className="fouth-text-part">HELP YOU ?</h1>
		<h1 className="fifth-text-part">I</h1>
		<h1 className="fifth-text-part">I</h1>
		<img className="down-hand" src={hand} alt="No image" />
		<img className="up-hand" src={hand} alt="No image" />
	</div>
);

export default MainPage;