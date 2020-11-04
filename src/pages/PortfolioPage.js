import React, { useState, useEffect } from 'react';

import './PortfolioPage.css';
import arrow from '../../assets/images/right-arrow.svg';

const projects = [
    {
        title: 'TURN CARD',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.',
        images: [
            "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
            "https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg",
            "https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0AnQUza0zwKklcP9bASAX5JRS_m08RouqWA&usqp=CAU",
            "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F191120053137-03-milky-way-images-australia.jpg"
        ],
        technologies: [
            {
                name: 'React JS',
                image: 'https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/react-512.png',
            },
            {
                name: 'React JS',
                image: 'https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/react-512.png',
            },
            {
                name: 'React JS',
                image: 'https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/react-512.png',
            }
        ]
    },
    {
        title: 'TURN CARD',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.',
        images: [
            "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
            "https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg",
            "https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0AnQUza0zwKklcP9bASAX5JRS_m08RouqWA&usqp=CAU",
            "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F191120053137-03-milky-way-images-australia.jpg"
        ], 
        technologies: [
            {
                name: 'React JS',
                image: 'https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/react-512.png',
            },
            {
                name: 'React JS',
                image: 'https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/react-512.png',
            },
            {
                name: 'React JS',
                image: 'https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/react-512.png',
            }
        ]
    },
    {
        title: 'TURN CARD',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.',
        images: [
            "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
            "https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg",
            "https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0AnQUza0zwKklcP9bASAX5JRS_m08RouqWA&usqp=CAU",
            "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F191120053137-03-milky-way-images-australia.jpg"
        ],        
    },
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