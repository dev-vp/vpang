import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Nav, Content} from './components/index'
import '../public/stylesheet.css'

class Main extends React.Component{
  render(){
    return (
      <Router>
        <Nav />
        <Content />
      </Router>
    )
  }
}

export default Main;
