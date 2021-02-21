import React from 'react';

class Education extends React.Component{
  render(){
    return (
      <div id="education-container">
        <h1 className="tiffany">Education</h1>
        <div id="fullstack" className="school">
          <div className="school-year">
            <h3 className="tiffany">2020 - 2021</h3>
          </div>
          <div className="school-details">
            <h3>Fullstack Academy - Software Engineering</h3>
            <h4>Certificate of Completion (533+ hours)</h4>
            <p className="gray-italics">New York, NY</p>
            <p id="fullstack-details">A 17-week (full-time) course, over a 5-month period with immersive coursework focused on JavaScript as the primary language of choice. The program itself covered data structures, algorithms, closures, prototypal inheritance, recursion, Object Oriented Programing, Test-Driven Development, team projects, and pair/peer programming.</p>
          </div>
        </div>
        <div id="fordham" className="school">
          <div className="school-year">
            <h3 className="tiffany">2016 - 2018</h3>
          </div>
          <div className="school-details">
            <h3>Fordham University - School of Law</h3>
            <h4>Masters Degree in Corporate Compliance</h4>
            <p className="gray-italics">New York, NY</p>
            <p id="fordham-details">A 2-year program covering fundamental legal topics such as, but not limited to, corporate law, legal writing, legislation, and regulation. Additionally, the compliance related coursework consisted of Risk Management, Anti-Money Laundering, and Global Corporate Compliance. </p>
          </div>
        </div>
        <div id="liu" className="school">
          <div className="school-year">
            <h3 className="tiffany">2008 - 2012</h3>
          </div>
          <div className="school-details">
            <h3>Long Island University - C.W. Post</h3>
            <h4>Bachelors Degree in Intl. Business Administration</h4>
            <p className="gray-italics">Brookville, NY</p>
            <p id="liu-details">A 4-year program majoring in Business Administration with a focus in international realtions.</p>
          </div>
        </div>
      </div>
    )
  }
};

export default Education;
