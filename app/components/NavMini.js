import React from 'react';
import {Link} from 'react-router-dom';

class NavMini extends React.Component{
  constructor(){
    super()
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleLinkClick = this.handleLinkClick.bind(this);
  }

  handleOnClick(){
    document.getElementById('menu-drawer').style.left === '-128px' ?
    document.getElementById('menu-drawer').style.left = '0px' :
    document.getElementById('menu-drawer').style.left = '-128px'
  }

  handleLinkClick(evt){
    let nodeList = Array.from(document.getElementById('menu-drawer').children);
    nodeList.map((node) => {
        node.style.color = 'white';
    });
    document.getElementById(`${evt.target.id}`).style.color = '#00CCFF';
    document.getElementById('menu-drawer').style.left = '-128px';
  }

  render(){
    return (
      <div id="nav-mini">
        <button id="menu-button" type="button" onClick={this.handleOnClick} ><img src="./menu-button-mobile.png" /></button>
        <div id="menu-drawer" style={{left: '-128px'}}>
          <Link to="/" id="mini-nav-home" onClick={this.handleLinkClick}>Home</Link>
          <Link to="/about" id="mini-nav-about" onClick={this.handleLinkClick}>About Me</Link>
          <Link to="/experience" id="mini-nav-experience" onClick={this.handleLinkClick}>Experience</Link>
          <Link to="/education" id="mini-nav-education" onClick={this.handleLinkClick}>Education</Link>
          <Link to="/projects" id="mini-nav-projects" onClick={this.handleLinkClick}>Projects</Link>
          {/* <Link to="/interest" id="mini-nav-interest" onClick={this.handleLinkClick}>Interest</Link> */}
          <Link to="/contact" id="mini-nav-contact" onClick={this.handleLinkClick}>Contact</Link>
        </div>
      </div>
    )
  }
}

export default NavMini;
