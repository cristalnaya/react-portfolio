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
      <MDBContainer fluid id="skills" className="text-white text-center flex-center h-auto pt-5 pb-5">
        <h2 className="skill-header h3-responsive display-4 " style={skillHeaderStyle}>Some of my Skills</h2>
          <div className='skills-wrapper'>
            {iconsArray}
          </div>
      </MDBContainer>
     )
  }

export default Skills;