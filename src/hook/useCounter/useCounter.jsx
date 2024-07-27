import { useState } from 'react';

const useCounter = () => {

    // ===========  State Variables =============================
    const [number, setNumber] = useState(0);
    const [inputValue, setInputValue] = useState("");
    const [showText, setShowText] = useState(true);

    // ===========  Functions =============================
    // Count Down Function
    const handleCountDown = () => {
        setNumber(number - 1);
    }

    // Count Up Function
    const handleCountZero = () => {
        setNumber(0);
    }
    
    // Count Up Function
    const handleCountUp = () => {
        setNumber(number + 1);
    }

    const handleInputValue = (event) => {
        setInputValue(event.target.value);
    }

    return [number, setNumber, handleCountUp, handleCountDown, handleCountZero, handleInputValue, inputValue, showText, setShowText]
}

export default useCounter
