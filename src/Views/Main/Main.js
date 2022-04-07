import React, { useState } from 'react';
import './Main.css';
import logo192 from './logo192.png';
import Toon from '../../components/Toon/Toon.js';
import Picker from '../../components/Picker/Picker.js';
import Slogan from '../../components/Slogan/Slogan.js';


export default function Main() {

  //set up the const i want
  const [head, setHead] = useState('bird');
  const [middle, setMiddle] = useState('blue');
  const [bottom, setBottom] = useState('leg');

//   //Counter?
//   const [headCount, setHeadCount] = useState(0);
//   const [middleCount, setMiddleCount] = useState(0);
//   const [bottomCount, setBottomCount] = useState(0);

//and catchphrase?
  const [slogan, setSlogan] = useState('');
  const [sloganArray, setSloganArray] = useState(['Slogans']);

  return (
    <main style={{ backgroundImage: `url(${logo192})` }}>

      <div>
        <Toon {...{ head, middle, bottom }}/>
      </div>

      <div>
        <Picker {...{ head, middle, bottom, setHead, setMiddle, setBottom }}/>
      </div>

      <div>
        <Slogan {...{ slogan, setSlogan, sloganArray, setSloganArray }}/>
      </div>

    </main>
  );
}
