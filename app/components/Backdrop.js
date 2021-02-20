import React from 'react';

class Backdrop extends React.Component {
  render() {
    return (
      <div>
        <img id='nyc' class='background-img' src='./nyc-skyline.png' />
        <img id='redny' class='background-img' src='./red-skyline.png' />
        <img id='tokyo' class='background-img' src='./tokyo-skyline.png' />
      </div>
    );
  }
}

export default Backdrop;
