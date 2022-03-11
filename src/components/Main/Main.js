import React, {useState} from 'react';
import './Main.css';
import background from '../../background.png';


export default function Main() {

  //set up the const i want
  const [head, setHead] = useState('bird');
  const [middle, setMiddle] = useState('blue');
  const [bottom, setBottom] = useState('leg');

  //Counter?
  const [headCount, setHeadCount] = useState(0);
  const [middleCount, setMiddleCount] = useState(0);
  const [bottomCount, setBottomCount] = useState(0);

//and catchphrase?
  const [catchphrase, setCatchPhrase] = useState('');

  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      <div>
        <Toon{...{head, middle, bottom}}
      </div>
      <div>

      </div>

    </main>
  );
}
