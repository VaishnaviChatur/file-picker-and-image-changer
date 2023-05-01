import React from 'react'
import './file.css'
import { useRef } from 'react';
export default function File() {
  const myRef=useRef(null)
  function clickChange (){
    myRef.current.click();
  }
  return (
    <div className='chg'>
        <input className='file' ref={myRef} type='file'></input>
        <br />
      <button className='btn' onClick={clickChange}>Pick the file</button>
    
    </div>
  )
}
