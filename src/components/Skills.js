import React from 'react'
import SkillsList from './SkillsList';

const skillsStyle ={
  display: 'flex',
  height: '60%',
  flexWrap: 'wrap',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
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
      <h2 className="skill-header">Skills</h2>
        <div className='' style={skillsStyle}>
          {iconsArray}
        </div>
      </div>
     )
  }

export default Skills;