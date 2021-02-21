import React from 'react';
import {Route, Switch} from 'react-router-dom'
import {Home, About, Experience, Education} from './contents/index'

class Content extends React.Component{

  render(){
    return (
      <div id="content-container">
        <Switch>
          <Route path="/experience" component={Experience} />
          <Route path="/education" component={Education} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    )
  }
};

export default Content;
