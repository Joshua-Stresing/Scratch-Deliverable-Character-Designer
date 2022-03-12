import React from 'react';
import './Slogan.css';


export default function Slogan({
  
  slogan,
  setSlogan,
  sloganArray,
  setSloganArray,

}) {
  const logSlogan = () => {
    setSlogan('');
    setSloganArray((prevState) => [...prevState, slogan]);

  };

  return (
    <div>
      <label>
        Add a Slogan
        <input className='slogan-text' 
          value={slogan}
          type="text"
          onChange={(e) => setSlogan(e.target.value)}
        />

        <button className= "slogan-button" onClick={logSlogan}>
            Add
        </button>
      </label>

      <ul>
        {sloganArray.map((data) => (
          <li key={data}>{data}</li>
        ))}
      </ul>
    </div>
  );
}
