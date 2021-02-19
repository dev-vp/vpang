import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Nav} from './components/index'
import '../public/stylesheet.css'

class Main extends React.Component{
  render(){
    return (
      <Router>
        <Nav />
      </Router>
    )
  }
}

export default Main;
