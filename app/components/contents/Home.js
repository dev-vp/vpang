import React from 'react';

class Home extends React.Component{
  render(){
    return (
      <div id='home'>
        <h1>I am a</h1>
        <h1 className="tiffany" >Software Engineer /</h1>
        <h1 className="tiffany" >Web Developer.</h1>
        <div id='home-2'>
          <h2>Born and raised in <span id="new-york" className="deepsky">New York</span>,</h2>
          <h2>and</h2>
          <h2>currently residing in <span id="japan" className="red">Japan</span>.</h2>
        </div>
      </div>
    )
  }
};

export default Home;
