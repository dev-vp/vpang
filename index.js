import React from 'react';
import ReactDOM from 'react-dom';
import Main from './app/main'

ReactDOM.render(<Main />, document.getElementById('app'));

// setInterval(()=>{
//   let target = document.getElementById('background-img');
//   if(target.src.includes('nyc')){target.src = './red-skyline.png'}
//   else if (target.src.includes('red')){target.src = './tokyo-skyline.png'}
//   else if(target.src.includes('tokyo')){target.src = './nyc-skyline.png'}
// }, 5000)
