import React from 'react';

const imgSkillStyle = {
  transition: 'all 1.5s',
  padding: '0 20px 20px',
}

const SkillsList = ({ icon }) => {
   
  return(
      <div style={imgSkillStyle}>
        <img className="skill-type"
            src={icon.imgSrc}
            alt={icon.alt}
            title={icon.title}
        />
      </div>
      )
  }

export default SkillsList;
