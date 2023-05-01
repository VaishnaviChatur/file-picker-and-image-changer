import React from 'react'
import { useState } from 'react';
import { useEffect, useRef } from 'react';
import './imgefile.css'
export default function Imagefile() {
    const [change,setChange] =useState(" ")
    const imgRef= useRef(null)
    function changeImage() {

      setChange('./tajmahal.jpg')
       
         };
    useEffect(()=>{
        setChange('./hand.jpg')
        
    
    },[]);

     
  return (
    <div className='chg'>
     
       <div >
      <img className='ig' ref={imgRef} src={change}></img>
      <br />
      <button className='btn' onClick={changeImage}>change Image</button>
    
     
    </div>
    </div>
  )
}
