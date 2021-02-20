import React from 'react';

class Home extends React.Component{
  constructor(){
    super()
    this.onHoverBG = this.onHoverBG.bind(this.onHoverBG)
  }

  onHoverBG(e){
    if(e.target.id === 'new-york'){
      document.getElementById('background-img').src = './nyc-skyline.png'
    }
    if(e.target.id === 'japan'){
      document.getElementById('background-img').src = './tokyo-skyline.png'
    }
  }

  render(){
    return (
      <div id='home'>
        <h1>I am a</h1>
        <h1 className="tiffany" >Software Engineer / Web Developer.</h1>
        <div id='home-2'>
          <h2>Born and raised in <span id="new-york" className="deepsky" onMouseOver={this.onHoverBG}>New York</span>, and currently residing in <span id="japan" className="red" onMouseOver={this.onHoverBG}>Japan</span>.</h2>
          <h2></h2>
        </div>
      </div>
    )
  }
};

export default Home;
