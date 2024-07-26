import React, { useState } from 'react';
import './episode3.css';
import Navbar from '../../components/navbar/Navbar';

const Episode2 = () => {

    // ===========  State Variables =============================
    const [number, setNumber] = useState(0);

    const [inputValue, setInputValue] = useState("");

    const [showText, setShowText] = useState(true);
    const [textColor, setTextColor] = useState('black');




    // ===========  Functions =============================
    // Count Down Function
    const handleCountDown = () => {
        setNumber(number - 1);
    }
    // Count Up Function
    const handleCountUp = () => {
        setNumber(number + 1);
    }

    const handleInputValue = (event) => {
        setInputValue(event.target.value);
    }
    // ========================================


    return (
        <div>
            <Navbar />

            <div className='episode3 container'>
                <h1>Episode 3</h1>

                <div>
                    <h3>Click to Count</h3>
                    <div className='countContainer'>
                        <button className='countBtn' onClick={handleCountDown}>Count Down</button>

                        <p className='pBtn'>{number}</p>

                        <button className='countBtn' onClick={handleCountUp}>Count Up</button>
                    </div>
                </div>

                <div className='inputDiv'>
                    <h3>Input Value Displayed</h3>
                    <input type="text" onChange={handleInputValue} placeholder='Enter Value' />
                    <p><b>Output:</b> {inputValue}</p>
                </div>

                <div>
                    <div className='btnContainer'>
                        <button
                            className='btnClass'
                            onClick={() => {
                                setShowText(!showText)
                            }}>Show/Hide</button>

                        <button
                            className='btnClass'
                            onClick={() => {
                                setTextColor(textColor === 'black' ? 'red' : 'black');
                            }}>Change Color</button>
                    </div>

                    {showText && <h4
                        style={{ color: textColor }}
                    >Some text to test things.</h4>}

                </div>
            </div>
        </div>

    )
}

export default Episode2
