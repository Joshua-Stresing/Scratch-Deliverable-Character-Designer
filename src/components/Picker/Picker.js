import React from 'react';
import './Picker.css';
//example display

export default function Picker({
  
  head,
  setHead,
  middle,
  setMiddle,
  bottom,
  setBottom,

}) {
  return ( 
    <div className= "picker">

      <label>
          Head
        <select value={head} onChange={(e) => setHead(e.target.value)} className="head-dropdown">
          <option value="bird">Bird</option>
          <option value="duck">Duck</option>
          <option value="dog">Dog</option>
          <option value="horse">Horse</option>
        </select>
      </label>

      <label>
          Middle
        <select value={middle} onChange={(e) => setMiddle(e.target.value)}className="middle-dropdown">
          <option value="blue">Blue</option>
          <option value="dress">Fancy</option>
          <option value="pink">Pink</option>
          <option value="red">Red</option>
        </select>
      </label>

      <label>
          Bottom
        <select value={bottom} onChange={(e) => setBottom(e.target.value)} className="bottom-dropdown">
          <option value="leg">Single Leg</option>
          <option value="white">White Pants</option>
          <option value="blue">Blue Jeans</option>
        </select>
      </label>      
      
    </div>);
}
