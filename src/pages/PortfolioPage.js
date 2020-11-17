import React, { useState, useEffect } from 'react';

import './PortfolioPage.css';
import arrow from '../../assets/images/right-arrow.svg';
import reactIcon from '../assets/icons/react.png';
import antdIcon from '../assets/icons/antd.png';

const projects = [
    {
        title: 'LUCIDO CAST',
        description: 'This project was a design project made for a podcast, the Lucido Cast. The idea of this podcast is to talk about things that we usually do not talk about. So I used some illustrations and colors that follow the main idea.',
        images: [
            'https://i.ibb.co/g3ZKztJ/Web-1920-24.png',
            'https://i.ibb.co/C0CyZ1W/Web-1920-18.png',
            'https://i.ibb.co/z7LrKSD/Web-1920-15.png',
            'https://i.ibb.co/Rgvg8Ft/Web-1920-7.png',
            'https://i.ibb.co/sFv6yKy/Web-1920-6.png',
            'https://i.ibb.co/cr5ZJLt/Web-1920-3.png'
        ],
    },
    {
        title: 'TURN CARD',
        description: 'The Turn Card is a web project to help people to study more easily. The main idea is to create a bunch of cards and these cards will have a time period, and when this period has ended you need to study the card again.',
        images: [
            'https://i.ibb.co/XCK7R79/Mask-Group-4.png',
            'https://i.ibb.co/r36dvZB/Mask-Group-3.png',
            'https://i.ibb.co/d0j5Mn2/Mask-Group-5.png',            
            'https://i.ibb.co/KxwwtCR/Mask-Group-1.png',
            'https://i.ibb.co/FBGPVsc/Mask-Group-6.png',            
            'https://i.ibb.co/XkrK65j/Mask-Group-2.png'
        ], 
        technologies: [
            {
                name: 'React JS',
                image: reactIcon,
            },
            {
                name: 'Ant Design',
                image: antdIcon,
            }
        ]
    }
];

const PortfolioPage = () => {
    const [actualProject, setActualProject] = useState(0);
    const [firstTime, setFirstTime] = useState(true);

    useEffect(() => {
        if(actualProject > 0 && firstTime) {
            setFirstTime(false);
        }
    }, [actualProject]);

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

    const getAnimationDelay = (project, index) => ({
        animationDelay: `${((project.images.length - 1) - index) * 7}s`,        
    })

    return (
        <div className={`portfolio-page ${firstTime ? 'first-time' : ''}`}>
            <div className="portfolio-title">
                PORTFOLIO
            </div>
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
                            key={project.title}
                            className={`project ${getProjectClass(index, actualProject)}`} 
                            onClick={() => { setActualProject(index); }}
                        >
                            <div className="title">
                                {project.title}
                            </div>
                            {
                                project.images.map((image, index) => (
                                    <img
                                        src={image}
                                        style={getAnimationDelay(project, index)}
                                    />
                                ))
                            }      
                            <div className="info">
                                <div className="descripion">
                                    {project.description}
                                </div>
                                {
                                    project.technologies?.length ? (
                                        <div className="technologies">
                                            <div className="tecnologie-title">
                                                TECHNOLOGIES
                                            </div>
                                            <div className="items">
                                                {project.technologies.map(tecnologie => {
                                                    return (
                                                        <div className="item">
                                                            <img
                                                                src={tecnologie.image}
                                                                className="item-image"
                                                            />
                                                            <div className="item-name">
                                                                {tecnologie.name}
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    ) : null
                                }                                
                                <div className="expand-button">
                                    <img src={arrow} className="arrow" />
                                </div>
                            </div>                      
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default PortfolioPage;