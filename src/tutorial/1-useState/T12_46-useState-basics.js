import React, { useState } from 'react';

const T12_46_UseStateBasics = () => {
  //let title = `random title`
  
  const [text, setText] = useState('random title');

  const handleClick = () => {
    if (text === 'random title'){
      setText('Hello Nihao')
    }else{
      setText('random title')
    }
  }

  return(
    <React.Fragment>
      <h2>{text}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  )
};

export default T12_46_UseStateBasics;
