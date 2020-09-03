import React from 'react';
import './CarrerPage.css';

var date = new Date();
var year = date.getFullYear();

const Col = ({ title, description, period }) => (
    <div className="col">
        <div className="title">
            {title}
        </div>
        <div className="period">
            {period}
        </div>
        <div className="description">
            {description}
        </div>
    </div>
)

const PortfolioPage = () => (
	<div className="carrer-page">
		<Col
            title="College"
            period="2015 - 2017"
            description="I did a course at the college called Technology in Analysis and System Development, where I learned many technologies and principles."
        />
        <Col
            title="Freelancer"
            period="2017 - 2018"
            description="When I finished college I had the opportunity to work as a freelancer. Where I did websites and learned some new skills as a programmer."
        />
        <Col
            title="Appmoove"
            period="2018 - 2020"
            description="I was hired as a web developer and during this period I learned new technologies, such as react js. And I learned how to work on a group, set priorities and many other skills."
        />
        <Col
            title="Smarppy"
            period={`2020 - ${year}`}
            description="I'm currently a web developer and I work with many technologies, such as react js and ANTD to develop great systems with an amazing team <3"
        />
        <div className="carrer-text">
            Career
        </div>
        <div className="help-bar" />
        <div className="help-backgroud" />
	</div>
);

export default PortfolioPage;