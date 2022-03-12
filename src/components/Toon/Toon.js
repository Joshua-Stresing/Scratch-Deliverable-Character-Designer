import React from 'react';
import './Toon.css';


export default function Toon({
  head,
  middle,
  bottom,
}) {
  return (

    <div>

      <div className='head-display' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/pics/${head}-head.png)` }}>
      </div>

      <div className='middle-display' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/pics/${middle}-middle.png)` }}>
      </div>

      <div className='bottom-display' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/pics/${bottom}-pants.png)` }}>
      </div>

    </div>
  );
}
