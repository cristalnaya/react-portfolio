import React from 'react'
import SkillsList from './SkillsList';
import { MDBContainer } from 'mdbreact';


const Skills = ({ icons }) => {
  const iconsArray = icons.map((icon, i) => {
      return <SkillsList 
      key={i} 
      icon={icon} 
      />
  });
  return(
      <MDBContainer fluid id="skills" className="text-center flex-center flex-column text-white mx-auto pb-sm-1 pt-sm-1">
        <h3 className="text-center skill-header">Some of my Skills</h3>
          <div className='skills-wrapper flex-row flex-center flex-wrap w-responsive'>
            {iconsArray}
          </div>
      </MDBContainer>
     )
  }

export default Skills;