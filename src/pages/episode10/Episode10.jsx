import React from 'react';
import './episode10.css';
import Navbar from '../../components/navbar/Navbar';
import useToggle from '../../hook/useToggle/useToggle';
import useCounter from '../../hook/useCounter/useCounter';

const Episode10 = () => {

  // Custom Hook
  const [isVisible, toggle] = useToggle();
  const [isVisible2, toggle2] = useToggle();

  const [number, setNumber, handleCountUp, handleCountDown, handleCountZero, handleInputValue, inputValue, showText, setShowText] = useCounter();



  return (
    <div>
      <Navbar />
      <div className='container episode10'>
        <div>
          <h1>Episode 10:</h1>
          <h3>Custom Hooks in React</h3>
        </div>

        <div className='testToggle'>
          <button
            className='toggleBtn'
            onClick={toggle}
          >
            {isVisible ? "Hide" : "Show"}
          </button>

          <h3>Test Custom Component 1</h3>

          {isVisible && <div>
            <h1>Hidden Text</h1>
          </div>}
        </div>

        <div className='testToggle'>
          <button
            className='toggleBtn'
            onClick={toggle2}
          >
            {isVisible2 ? "Hide" : "Show"}
          </button>

          <h3>Test Custom Component 2</h3>

          <p className={`toggleContent ${isVisible2 ? 'expanded' : ''}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo ut officiis facilis dicta voluptatem fugiat eos iure assumenda adipisci, sint deserunt dolor repellendus accusamus ratione, praesentium doloribus et provident soluta. Consectetur blanditiis soluta optio repudiandae, molestias rem voluptatem eveniet, quas asperiores nisi porro quo laudantium ab omnis accusantium accusamus aliquid?</p>
        </div>

        <div className='testCounter'>
          <h3>Click to Count</h3>
          <div className='countContainerEpi10'>

            <p className='pBtnEpi10'>{number}</p>

            <div className='countBtnDiv'>
              <button className='countBtnEpi10' onClick={handleCountDown}>Count Down</button>

              <button className='countBtnEpi10' onClick={handleCountZero}>Reset</button>

              <button className='countBtnEpi10' onClick={handleCountUp}>Count Up</button>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Episode10
