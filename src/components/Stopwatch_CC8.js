import React, { useState, useEffect } from 'react';

import './styles.css';

function Stopwatch_CC8() {
  let [time, setTime] = useState([0, 0, 0]);
  const [counting, setCounting] = useState(false);

  useEffect(() => {
    if (counting) {
      const id = window.setInterval(() => {
        setTime((time) => {
          let ms = time[0] + 1;
          let s = time[1];
          let m = time[2];
          if (ms === 10) {
            ms = 0;
            s = s + 1;
          }
          if (s === 60) {
            s = 0;
            m = m + 1;
          }
          return [ms, s, m];
        });
      }, 100);
      return () => window.clearInterval(id);
    }
    return undefined;
  }, [counting]);

  return (
    <div>
      <br />
      <h1 id="header">STOPWATCH</h1>
      <h1 id="stopwatch">
        {time[2] < 10 ? '0' + time[2] : time[2]}:
        {time[1] < 10 ? '0' + time[1] : time[1]}:
        {time[0] < 10 ? '0' + time[0] : time[0]}
      </h1>
      <div id="icons">
        <div
          id="icon1"
          onClick={() => {
            setCounting((counting) => !counting);
          }}
        >
          <div id="play"></div>
          <div id="pause"></div>
        </div>
        <div
          id="icon2"
          onClick={() => {
            setCounting(false);
            setTime([0, 0, 0]);
          }}
        >
          <div id="stop"></div>
        </div>
      </div>
    </div>
  );
}

export default Stopwatch_CC8;
