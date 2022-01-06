import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

// const rootUrl = 'http://localhost:5000';

const T43_46_crown2_create = () => {
  const [id,setId] = useState('');
  const [name, setName] = useState('');
  const [cat_id, setCat_id] = useState('');
  const [price, setPrice] = useState('');
  const [remote_url, setRemote_url] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if(!id || !name || !cat_id || !price || !remote_url) return;

    const user = {id, name, cat_id, price, remote_url}

    try{
      const url = `/crown2_xx/create`;
      await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
      });
      setId('');
      setName('');
      setCat_id('');
      setPrice('');
      setRemote_url('');
    }catch(err){
      console.log(err);
    }
  }
  
  return <>
    <article  style={ {marginTop: "30px"}}>
      <form className="form" onSubmit={handleSubmit}>
      <div className='form-control'>
          <label htmlFor = 'id'>Id : </label>
          <input type ='text' name = 'id' value ={id} onChange={(e) => {setId(e.target.value)}}/>
        </div>
        <div className="form-control">
          <label htmlFor ='name'>Name : </label>
          <input type='text'  name= 'name' value = {name} onChange={(e) => {setName(e.target.value)}}/>
        </div>
        <div className='form-control'>
          <label htmlFor = 'cat_id'>Cat_id : </label>
          <input type ='text' name = 'cat_id' value ={cat_id} onChange={(e) => {setCat_id(e.target.value)}}/>
        </div>
        <div className='form-control'>
          <label htmlFor = 'price'>Price : </label>
          <input type ='text' name = 'price' value ={price} onChange={(e) => {setPrice(e.target.value)}}/>
        </div>
        <div className='form-control'>
          <label htmlFor = 'remote_url'>Remote_url : </label>
          <input type ='text' name = 'remote_url' value ={remote_url} onChange={(e) => {setRemote_url(e.target.value)}}/>
        </div>
        <button type = 'submit'>Add Person</button>
      </form>
    </article>
  </>;
};

export default T43_46_crown2_create;
