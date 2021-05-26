import React, { useRef, useState } from 'react';

function CC9() {
  const [result, setresult] = useState([]);
  const arrayToEval = useRef();
  const kVal = useRef();

  const calsulateResult = (array, k) => {
    const maxsArray = [];
    for (let i = 0; i < array.length - k + 1; i++) {
      maxsArray.push(Math.max(...array.slice(i, i + k)));
    }
    setresult(maxsArray);
  };
  return (
    <div className="cc9">
      <h1>CC9 Question</h1>
      <form action="">
        <input
          className="array"
          ref={arrayToEval}
          type="text"
          placeholder="insert array seperating by commas"
        />
        <input className="kVal" ref={kVal} type="text" placeholder="k value" />
        <button
          type="button"
          onClick={() => {
            if (arrayToEval.current.value === '' || kVal.current.value === '') {
              alert('You cannot leave the inputs blank');
            }
            const mapped = arrayToEval.current.value
              .split(',')
              .map((item) => parseInt(item));
            calsulateResult(mapped, parseInt(kVal.current.value));
          }}
        >
          Calculate
        </button>
      </form>
      <h3 className="result">The result is: [ {result.join(', ')} ]</h3>
    </div>
  );
}

export default CC9;
