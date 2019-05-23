import React from 'react';

const imgStyle = {
    transition: 'all 1.5s',
    padding: '0 20px 20px',
}

const ProjectImage = ({ image }) => {
   
    // const images = require.context('./img', true);
    return(
        <div>
            <a href={image.projectUrl} target="_blank" rel="noopener noreferrer">
                <img className="project-img"
                    style={imgStyle} 
                    src={image.src}
                    alt={image.alt}
                    title={image.title}
                    width='350px'
                    height='350px'
                />
            </a>
        </div>
        )
    }

export default ProjectImage;