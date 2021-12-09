import React from 'react';

const T11_46_ErrorExample = () => {
  let title = `random title`
  
  const handleClick = () => {
    title = `Hello Nihao`;
    console.log(title);
  }

  return(
    <React.Fragment>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  )
};

export default T11_46_ErrorExample;
