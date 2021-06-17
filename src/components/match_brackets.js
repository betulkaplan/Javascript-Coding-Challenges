import React from 'react';

const Match_brackets = () => {
  const sample = '{(fgfg) } {} }';
  const match_check = (input) => {
    const opennings = '{([';
    const closings = '])}';
    const match_arr = [];
    for (let i = 0; i < input.length; i++) {
      if (opennings.includes(input[i])) {
        match_arr.push(input[i]);
      }
      if (closings.includes(input[i])) {
        if (
          (match_arr[match_arr.length - 1] === '{' && input[i] === '}') ||
          (match_arr[match_arr.length - 1] === '[' && input[i] === ']') ||
          (match_arr[match_arr.length - 1] === '(' && input[i] === ')')
        ) {
          match_arr.pop();
        } else {
          console.log('eşleşme sırası atlanmış');
          return false;
        }
      }
    }
    if (match_arr.length === 0) {
      console.log('Her şey eşlemiş');
      return true;
    } else {
      console.log('açık kalan parantez var');
      return false;
    }
  };
  return (
    <div>
      <button stype="button" onClick={() => match_check(sample)}>
        Test
      </button>
    </div>
  );
};

export default Match_brackets;
