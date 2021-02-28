import React from 'react';
import {Link} from 'react-router-dom';

class Nav extends React.Component{
  constructor(){
    super()
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt){
    let nodeList = Array.from(document.getElementById('nav-bar').children);
    nodeList.map((node, index) => {
      if(index === 0){
        node.style.color = 'white'
      } else {
        node.style.color = 'gray'
      }
    });
    document.getElementById(`${evt.target.id}`).style.color = '#00CCFF';
  }

  render(){
    return (
      <div id="nav-bar">
        <Link to="/" id="nav-logo" onClick={this.handleClick}>Vincent Pang</Link>
        <Link to="/" id="nav-home" onClick={this.handleClick}>Home</Link>
        <Link to="/about" id="nav-about" onClick={this.handleClick}>About Me</Link>
        <Link to="/experience" id="nav-experience" onClick={this.handleClick}>Experience</Link>
        <Link to="/education" id="nav-education" onClick={this.handleClick}>Education</Link>
        <Link to="/projects" id="nav-projects" onClick={this.handleClick}>Projects</Link>
        {/* <Link to="/interest" id="nav-interest" >Interest</Link> */}
        <Link to="/contact" id="nav-contact" onClick={this.handleClick}>Contact</Link>
      </div>
    )
  }
}

export default Nav;
