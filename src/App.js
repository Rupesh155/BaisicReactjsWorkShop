import React, { useRef,useEffect } from 'react'
import './App.css'
const App = () => {

  let canvas=useRef()
  useEffect(() => {                             
    const context = canvas.current.getContext('2d'); 
let cellSize = 50;
let boardWidth = 1400;
let boardHeight = 700;

let snakeCells = [[0, 0]];

let direction = 'right';

let gameOver = false;

let foodCells = generateRandomCells();

let score = 0;

let intervalId = setInterval(function() {
  update();
  draw();
}, 100);

document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowDown')
    direction = 'down';
  else if (event.key === 'ArrowUp')
    direction = 'up';
  else if (event.key === 'ArrowLeft')
    direction = 'left';
  else
    direction = 'right';
})

// draw the snake
function draw() {

  if (gameOver === true) {
    clearInterval(intervalId);
   context.fillStyle = 'red';
   context.font = '50px sans-serif';
   context.fillText('Game Over!!', 200, 200);
    return;
  }

  // clear canvas
 context.clearRect(0, 0, boardWidth, boardHeight);
  
  // draw snake
  for (let cell of snakeCells) {
   context.fillStyle = 'brown';
   context.fillRect(cell[0], cell[1], cellSize, cellSize);
   context.strokeStyle = 'golden';
   context.strokeRect(cell[0], cell[1], cellSize, cellSize);
  }

  // draw food
 context.fillStyle = 'green';
 context.fillRect(foodCells[0], foodCells[1], cellSize, cellSize);

  // draw score
 context.font = '20px sans-serif';
 context.fillText(`Score: ${score}`, 20, 20);
}

// update snake cells
function update() {
  let headX = snakeCells[snakeCells.length - 1][0];
  let headY = snakeCells[snakeCells.length - 1][1];

  let newHeadX;
  let newHeadY;

  if (direction === 'right') {
    newHeadX = headX + cellSize;
    newHeadY = headY;

    if (newHeadX === boardWidth) {
      gameOver = true;
    }
  } 
  else if (direction === 'up') {
    newHeadX = headX;
    newHeadY = headY - cellSize;

    if (newHeadY < 0) {
      gameOver = true;
    }
  }
  else if (direction === 'down') {
    newHeadX = headX;
    newHeadY = headY + cellSize;

    if (newHeadY === boardHeight) {
      gameOver = true;
    }
  }
  else {
    newHeadX = headX - cellSize;
    newHeadY = headY
    
    if (newHeadX < 0) {
      gameOver = true;
    }
  }

  snakeCells.push([newHeadX, newHeadY]);

  if (newHeadX === foodCells[0] && newHeadY === foodCells[1]) {
    foodCells = generateRandomCells();
    score += 1;
  } else {
    snakeCells.shift();
  }
}

function generateRandomCells() {
  return [
    Math.round((Math.random()*(boardWidth - cellSize))/cellSize)*cellSize,
    Math.round((Math.random()*(boardHeight - cellSize))/cellSize)*cellSize
  ]
}
  },[]);

  return (
    <div>
      <canvas  ref={canvas} height='700' width='1400'></canvas>
    </div>
  )
}

export default App



// import React, { useState } from 'react'
// import './App.css'

// const App = () => {
//         let [count,SetCount]=  useState()
//         setInterval(()=>{
//           // console.log('hello');
//           let date=   new Date().toLocaleTimeString()
//           console.log(date,"rrrr");
//           SetCount(date)


//         })
 
//   return (
//     <div  className='parent'>App
//            {/* <p> {count } </p> */}
//            <h3> {count}</h3>
 
//     </div>
//   )
// }
// export default App


// import React, { useEffect, useState } from 'react'
// import './App.css'
// import Home from './Home'
// const App = () => {


//   let appData='ye data app ke ander hai'
//   let [count,SetCount]=useState(0)
//      let [city,SetCity]=    useState('city')
//      let [newCity,SetNewCity]=    useState('new')





//      function api(){
//       fetch('https://jsonplaceholder.typicode.com/todos').then((res)=>{
//         // console.log(res,"resss");
//         return res.json()

//       }).then((data)=>{
//         console.log(data);

//       }).catch((err)=>{
//         console.log();

//       })
//      }
   



//   useEffect(()=>{
//     console.log('hello');
//     api()
//   },[city])

//      function fun1(){
//       SetCount(count+1)
//      }
//   return (
//     <div  className='parent'>App


//    <h3> {count}</h3>
//        <button  onClick={fun1}> click</button>
//        <button    onClick={()=>{SetCity('shimla')}} > shimla</button>
//        <button  onClick={()=>{
//         SetNewCity('jabalpur')
//        }}>jabalpur</button>


//        <p> {city}</p>
//        <p> {newCity}</p>

//      <Home  a={appData}/>
          
//     </div>
//   )
// }



// export default App


// import React from 'react'
// import NavBar from './NavBar'
// import {Routes, Route}  from 'react-router-dom'
// import Home from './Home'
// import ContactUs from './ContactUs'
// import AboutUs from './AboutUs'

// const App = () => {
//   return (
//     <div>
//       <NavBar/>
//      <Routes>

//       <Route   path='/'  element={<Home/>}/>
//       <Route   path='/contact'  element={<ContactUs/>}/>
//       <Route   path='/about'  element={<AboutUs/>}/>




//      </Routes>
//     </div>
//   )
// }

// export default App