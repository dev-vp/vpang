import React from 'react';
import {Link} from 'react-router-dom';

class NavMini extends React.Component{
  constructor(){
    super()
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(){
    document.getElementById('menu-drawer').style.left === '-128px' ?
    document.getElementById('menu-drawer').style.left = '0px' :
    document.getElementById('menu-drawer').style.left = '-128px'
  }

  render(){
    return (
      <div id="nav-mini">
        <button id="menu-button" type="button" onClick={this.handleOnClick} >Menu</button>
        <div id="menu-drawer">
          <Link to="/" id="nav-logo" >Vincent Pang</Link>
          <Link to="/about" id="nav-about" >About Me</Link>
          <Link to="/experience" id="nav-experience" >Experience</Link>
          <Link to="/education" id="nav-education" >Education</Link>
          <Link to="/projects" id="nav-projects" >Projects</Link>
          {/* <Link to="/interest" id="nav-interest" >Interest</Link> */}
          <Link to="/contact" id="nav-contact" >Contact</Link>
        </div>
      </div>
    )
  }
}

export default NavMini;
