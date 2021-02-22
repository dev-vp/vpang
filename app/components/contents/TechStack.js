import React from 'react';

class TechStack extends React.Component{
  render(){
    return (
      <div id="tech-experience">
        <div id="proficient-container">
          <h2>Proficient In:</h2>
          <ul>
            <li>JavaScript(ES6+)</li>
            <li>HTML / CSS</li>
            <li>React</li>
            <li>Redux</li>
            <li>Node</li>
            <li>Express</li>
            <li>Sequelize</li>
            <li>Git / GitHub</li>
          </ul>
        </div>
        <div id="knowledge-container">
          <h2>Knowledge In:</h2>
          <ul>
            <li>Socket.io</li>
            <li>D3.js</li>
            <li>Docker</li>
            <li>MySQL</li>
            <li>Jasemine</li>
            <li>Mocha</li>
            <li>Chai</li>
          </ul>
        </div>
      </div>
    )
  }
};

export default TechStack;
