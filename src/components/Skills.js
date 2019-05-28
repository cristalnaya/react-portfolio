import React from 'react'
import SkillsList from './SkillsList';
import { MDBContainer } from 'mdbreact';


const skillHeaderStyle = {
    padding: '1em 0'
}

const Skills = ({ icons }) => {
  const iconsArray = icons.map((icon, i) => {
      return <SkillsList 
      key={i} 
      icon={icon} 
      />
  });
  return(
      <MDBContainer fluid id="skills" className="text-center flex-center flex-column text-white mx-auto pb-sm-1 pt-sm-1">
        <h2 className="skill-header h3-responsive display-4 " style={skillHeaderStyle}>Some of my Skills</h2>
          <div className='skills-wrapper flex-row flex-center flex-wrap w-responsive'>
            {iconsArray}
          </div>
      </MDBContainer>
     )
  }

export default Skills;