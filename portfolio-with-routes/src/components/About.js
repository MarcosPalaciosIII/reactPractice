import React from 'react';
import Education from './Education';
import Experience from './Experience';

const about = () => {
  return (
    <div>
      <div style={{width: "40%", float: "left"}}>
        <Education />
      </div>
      <div style={{width: "60%", float: "right"}}>
        <Experience />
      </div>
    </div>
  )
}

export default about;
