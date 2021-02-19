import React from 'react';
import {Link} from 'react-router-dom';

class Nav extends React.Component{

  render(){
    return (
      <Link to="/" id="logo" >Vincent Pang</Link>
    )
  }
}

export default Nav;
