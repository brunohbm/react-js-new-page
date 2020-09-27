import React, { useState } from 'react';

import './PortfolioPage.css';

const projects = [
    {
        title: 'TURN CARD',
        image: "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",        
    },
    {
        title: 'TURN CARD',
        image: "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",        
    },
    {
        title: 'TURN CARD',
        image: "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",        
    },
    {
        title: 'TURN CARD',
        image: "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",        
    },
    {
        title: 'TURN CARD',
        image: "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",        
    },
    {
        title: 'TURN CARD',
        image: "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",        
    },
];

const PortfolioPage = () => {
    const [actualProject, setActualProject] = useState(0);

    const getProjectClass = (index, centeredIndex) => {
        if(centeredIndex === index) {
            return 'active'
        }

        if(centeredIndex > index) {
            if((centeredIndex - 1) > index) {
                return 'left-0';
            }

            return 'left-1';
        }

        if((centeredIndex + 1) < index) {
                return 'right-0';
        }

        return 'right-1';
    }    

    return (
        <div className="portfolio-page">
            <div className="total-project-wrapper">
                <div className="total-project-values">
                    {`${actualProject + 1}/${projects.length}`}
                </div>
                <div className="total-project-label">
                    PROJECTS
                </div>
            </div>
            <div className="projects-carousel">
                {
                    projects.map((project, index) => (
                        <div 
                            className={`project ${getProjectClass(index, actualProject)}`} 
                            onClick={() => { setActualProject(index); }}
                        >
                            <img
                                src={project.image}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default PortfolioPage;