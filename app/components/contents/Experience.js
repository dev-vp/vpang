import React from 'react';

class Experience extends React.Component{
  render(){
    return (
      <div id="experience-container">
        <h1 className="tiffany">Experience</h1>
        <div id="deutsche" className="company">
          <div className="employed-year">
            <h3 className="tiffany">2016 - 2020</h3>
          </div>
          <div className="company-details">
            <h3>Deutsche Bank</h3>
            <h4>Financial Crimes Operation - Risk Management</h4>
            <p className="gray-italics">Wall Street, NY</p>
            <p id="deutsche-details">TBD</p>
          </div>
        </div>
      </div>
    )
  }
};

export default Experience;
