import React from 'react';
import './PortfolioPage.css';

var date = new Date();
var year = date.getFullYear();

const Col = ({ title, description, period }) => (
    <div className="col">
        <div className="title">
            {title}
        </div>
        <div className="period">
            {title}
        </div>
        <div className="description">
            {description}
        </div>
    </div>
)

const PortfolioPage = () => (
	<div className="portfolio-page">
		<Col
            title="College"
            period="2015 - 2017"
            description="Test"
        />
        <Col
            title="Freelancer"
            period="2017 - 2018"
            description="Test"
        />
        <Col
            title="Appmoove"
            period="2018 - 2020"
            description="Test"
        />
        <Col
            title="Smarppy"
            period={`2020 - ${year}`}
            description="Test"
        />
	</div>
);

export default PortfolioPage;