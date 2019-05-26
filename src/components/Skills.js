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
      <div id="skills" className="text-white text-center flex-center h-auto pt-5 pb-5">
      <h2 className="skill-header h1-responsive display-4" style={skillHeaderStyle}>Some of my Skills</h2>
        <div className='skills-wrapper'>
          {iconsArray}
        </div>
      </div>
     )
  }

export default Skills;