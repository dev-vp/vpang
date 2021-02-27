import React from 'react';

class About extends React.Component{
  render(){
    return (
    <div id="about-container">
      <h1 className="tiffany">About Me.</h1>
      <img id="profile-img" src="./profile-img.jpg" />
      <p>
        Prior to becoming a <span>Software Engineer</span>, I worked as a Risk and Compliance Officer, and spent a large portion of my time preemptively mitigating risk, coordinating regulatory examinations, and <span>analyzing data</span> for any applicable risk landscape related to the bank’s operation. However, the crux of my career change primarily stemmed from my growing interest and natural aptitude for <span>technology</span>. Since becoming a full-time engineer, it much clearer now that I happen to find much of my satisfaction from <span>solving challenging problems</span> and <span>designing software.</span>
      </p>
      <svg>
        <g>
          <rect x="0" y="0" width="70%" height="38" fill="#0ABAB5">
            <animate attributeName="width" from="0" to="70%" dur="1s" fill="freeze" />
          </rect>
          <text x="8" y="28" fontFamily="Comfortaa" fontSize=".9em" fill="black">English</text>
        </g>
        <g>
          <rect x="0" y="60" width="45%" height="38" fill="#0ABAB5">
            <animate attributeName="width" from="0" to="45%" dur="1.5s" fill="freeze" />
          </rect>
          <text x="8" y={`${28+38+20}`} fontFamily="Comfortaa" fontSize=".9em" fill="black">Chinese (中文)</text>
        </g>
        <g>
          <rect x="0" y="120" width="30%" height="38" fill="#0ABAB5">
            <animate attributeName="width" from="0" to="30%" dur="2s" fill="freeze" />
          </rect>
          <text x="8" y={`${28+(38+20)*2}`} fontFamily="Comfortaa" fontSize=".9em" fill="black">Japanese (日本語)</text>
        </g>
    </svg>
    </div>
    )
  }
};

export default About;
