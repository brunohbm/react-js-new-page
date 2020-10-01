import React, { useState } from 'react';

import './PortfolioPage.css';

const projects = [
    {
        title: 'TURN CARD',
        images: [
            "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
            "https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg",
            "https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0AnQUza0zwKklcP9bASAX5JRS_m08RouqWA&usqp=CAU",
            "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F191120053137-03-milky-way-images-australia.jpg"
        ],        
    },
    {
        title: 'TURN CARD',
        images: [
            "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
            "https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg",
            "https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0AnQUza0zwKklcP9bASAX5JRS_m08RouqWA&usqp=CAU",
            "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F191120053137-03-milky-way-images-australia.jpg"
        ], 
    },
    {
        title: 'TURN CARD',
        images: [
            "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
            "https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg",
            "https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0AnQUza0zwKklcP9bASAX5JRS_m08RouqWA&usqp=CAU",
            "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F191120053137-03-milky-way-images-australia.jpg"
        ], 
    },
    {
        title: 'TURN CARD',
        images: [
            "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
            "https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg",
            "https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0AnQUza0zwKklcP9bASAX5JRS_m08RouqWA&usqp=CAU",
            "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F191120053137-03-milky-way-images-australia.jpg"
        ],
    },
    {
        title: 'TURN CARD',
        images: [
            "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
            "https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg",
            "https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0AnQUza0zwKklcP9bASAX5JRS_m08RouqWA&usqp=CAU",
            "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F191120053137-03-milky-way-images-australia.jpg"
        ],
    },
    {
        title: 'TURN CARD',
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
                            {
                                project.images.map((image, index) => (
                                    <img
                                        src={image}
                                        style={getAnimationDelay(project, index)}
                                    />
                                ))
                            }                            
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default PortfolioPage;