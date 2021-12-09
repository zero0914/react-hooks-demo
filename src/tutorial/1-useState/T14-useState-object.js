import React, { useState } from 'react';

const T14_46_UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Peter',
    age: 25,
    message: 'random message'
  });

  const changeMessage = () => {
    setPerson({ ...person, message: 'Hello Nihao' });
  }

  return(
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>{person.message}</h4>
      <button className='btn' onClick={changeMessage}>Change Message</button>
    </>
  );
};
export default  T14_46_UseStateObject;
