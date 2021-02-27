import React from 'react';
import CESV11 from './projects/CESV11';
import QAPi from './projects/QAPi';
import Notables from './projects/Notables';

class Project extends React.Component{
  render(){
    return (
      <div id="projects-container">
        <CESV11 />
        <QAPi />
        <Notables />
      </div>
    )
  }
};

export default Project;
