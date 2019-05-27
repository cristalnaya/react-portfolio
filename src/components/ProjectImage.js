import React from 'react';
import { MDBMask, MDBView, MDBCol } from "mdbreact";


const ProjectImage = ({ image }) => {
    return(
        <MDBCol md="4" style={{paddingBottom: '25px'}}>
        <MDBView hover zoom>
            <img className="img-fluid"
                src={image.src}
                alt={image.alt}
                title={image.title}
                // style={{ width: '350px', height: '350px'}}
            />
        <a href={image.projectUrl} target="_blank" rel="noopener noreferrer">
        <MDBMask className="flex-center">
            <p 
            className="white-text text-capitalize"
            style={{
                backgroundColor: 'rgba(0,0,0,0.7)',
                padding: '5px',
                textAlign: 'center'
                }}
                >
                {image.title}
            </p>
            </MDBMask>
        </a>
        </MDBView>
        </MDBCol>
        )
    }

export default ProjectImage;