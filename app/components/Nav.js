import React from 'react';
import {Link} from 'react-router-dom';

class Nav extends React.Component{

  render(){
    return (
      <div id="nav-bar">
        <Link to="/" id="nav-logo" >Vincent Pang</Link>
        <Link to="/" id="nav-home" >Home</Link>
        <Link to="/about" id="nav-about" >About Me</Link>
        <Link to="/experience" id="nav-experience" >Experience</Link>
        <Link to="/education" id="nav-education" >Education</Link>
        <Link to="/projects" id="nav-projects" >Projects</Link>
        {/* <Link to="/interest" id="nav-interest" >Interest</Link> */}
        <Link to="/contact" id="nav-contact" >Contact</Link>
      </div>
    )
  }
}

export default Nav;
