// If it starts with a 'use{smh}' it means its a hook.
import { useState } from "react";

// initialVal = false: an arg passed to the hook but given a default value of 'false'
const useToggle = (initialVal = false) => {
    const [state, setState] = useState(initialVal);

    // Function
    const toggle = () => {
        setState((prev) => !prev)
    }

    // The logic being returned can be assigned new names where ever used unlike if you use curly braces then you have to destructure to alter names
    return [state, toggle]

    // OR
    // return {state, toggle}
    // Destructuring is a feature in JavaScript that allows you to unpack values from arrays or properties from objects into distinct variables.
    // const {state: isVisible, toggle: switch} = useToggle(initialVal);
}

export default useToggle
