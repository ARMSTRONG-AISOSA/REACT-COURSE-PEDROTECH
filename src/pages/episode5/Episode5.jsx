import React from 'react'
import './episode5.css';
import { useState, useEffect } from 'react';

const Episode5 = () => {

  const [status, setStatus] = useState("Mounted");

  const [text, setText] = useState("")

  // React strict mode ounts it, unmountes its and mounts it once more to track potential memory leaks
  useEffect(() => {
    console.log(status);

    // This is a way to clean up logic that may cause leaks
    return (() => {
      console.log('component UnMounted')
    });
  }, [text]);

  // UseEffect Triggers first when the page is loaded
  // '}, [])': This make it trigger only once 
  // '}, [text])': This makes it trigger as the inputed text changes 

  return (
    <div className='container episode5'>
      <h1>Episode 5</h1>
      <h3>Component Status: {status}</h3>

      <input type="text"
        placeholder='Enter Text'
        className='inputTest'
        onChange={(e) => {
          setText(e.target.value);
        }}
      />

      <p> Input Value: {text} </p>
    </div>

  )
}

export default Episode5
