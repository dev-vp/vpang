import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Nav, NavMobile, NavMini, Content, Backdrop} from './components/index'
import '../public/stylesheet.css'
import '../public/stylesheet-mobile.css'

class Main extends React.Component{
  render(){
    return (
      <Router>
        <Nav />
        <NavMini />
        <Content />
        <Backdrop />
      </Router>
    )
  }
}

export default Main;
