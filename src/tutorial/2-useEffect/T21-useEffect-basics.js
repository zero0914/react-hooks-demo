import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const T21_46_UseEffectBasics = () => {
  const [value, setValue] = useState(0);

useEffect( () => {
  console.log('call effect ' + value);
  if (value > 0){
    document.title = `New(${value})`
  }
}, []);

  return(
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value+1)}>Plus</button>
    </>
  );
};

export default T21_46_UseEffectBasics;
