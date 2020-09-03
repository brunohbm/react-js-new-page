import React, { useState } from 'react';

import './PortfolioPage.css';

const projects = [

];

const PortfolioPage = () => {
    const [actualProject, setActualProject] = useState(0);

    return (
        <div className="portfolio-page">
            <div className="total-project-wrapper">
                <div className="total-project-values">
                    {`${actualProject + 1}/${projects.length}`}
                </div>
                <div className="total-project-label">
                    Projects
                </div>
            </div>
        </div>
    )
};

export default PortfolioPage;