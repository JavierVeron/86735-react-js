import { useState } from "react";

export const useCounter = (initial=1, min, max) => {
    if ((initial < min) || (initial > max)) {
        initial = min;
    }
    
    const [count, setCount] = useState(initial);

    const decrement = () => {
        if (count > min) {
            setCount(count - 1);
        }
    }

    const increment = () => {
        if (count < max) {
            setCount(count + 1);
        }
    }

    const reset = () => {
        setCount(initial);
    }

    return {count, decrement, increment, reset}
}