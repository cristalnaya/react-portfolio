import React from 'react';
import ProjectImage from './ProjectImage';

const gridStyle = {
    display: 'flex',
    height: '100%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
}

const LatestWork = ({ images }) => {
    const imageArray = images.map((image, i) => {
        return <ProjectImage 
        key={i} 
        image={image} 
        />
    });
    return(
        <div id="latest-work">
        <h2 className="work-header">Latest Work</h2>
        <div className='grid-container'
            style={gridStyle}>
           {imageArray}
        </div>
        </div>

        )
    }

export default LatestWork;