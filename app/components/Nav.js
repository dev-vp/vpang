import React from 'react';
import {Link} from 'react-router-dom';

class Nav extends React.Component{

  render(){
    return (
      <div id="nav-bar">
        <Link to="/" id="nav-logo" >Vincent Pang</Link>
        <Link to="/" id="nav-about" >About Me</Link>
        <Link to="/" id="nav-experience" >Experience</Link>
        <Link to="/" id="nav-education" >Education</Link>
        <Link to="/" id="nav-projects" >Projects</Link>
        <Link to="/" id="nav-interest" >Interest</Link>
        <Link to="/" id="nav-contact" >Contact</Link>
      </div>
    )
  }
}

export default Nav;
