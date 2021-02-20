import React from 'react';

class Backdrop extends React.Component {
  render() {
    return (
      <div id="background-img-container">
        <img id='nyc' className='background-img' src='./nyc-skyline.png' />
        <img id='redny' className='background-img' src='./red-skyline.png' />
        <img id='tokyo' className='background-img' src='./tokyo-skyline.png' />
      </div>
    );
  }
}

export default Backdrop;
