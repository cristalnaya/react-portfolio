import React from 'react';
import ProjectImage from './ProjectImage';
import { MDBContainer, MDBRow } from "mdbreact";


const LatestWork = ({ images }) => {
    const imageArray = images.map((image, i) => {
        return <ProjectImage 
        key={i} 
        image={image} 
        />
    });
    return(
        <div id="latest-work" className="text-white">
           <MDBContainer fluid className="projects-container w-responsive text-center mx-auto flex-center flex-column h-auto" style={{color: '#fff'}}>
              <h3 className="work-header text-center pb-sm-3 pt-sm-3">Latest Work</h3>
                <MDBRow>
                   {imageArray}
               </MDBRow>
            </MDBContainer>
        </div>
        )
    }

export default LatestWork;