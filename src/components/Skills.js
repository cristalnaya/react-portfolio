import React from 'react'
import SkillsList from './SkillsList';


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
      <div id="skills">
      <h2 className="skill-header" style={skillHeaderStyle}>Some of my Skills</h2>
        <div className='skills-wrapper'>
          {iconsArray}
        </div>
      </div>
     )
  }

export default Skills;