import {useState} from "react";
import "./Counter.css"

const Counter = (props) => {
    const [Count, setCount] = useState(0);

    const increase = () => {
        props.updateSum(1);
        setCount(Count + 1);
    }

    const decrease = () => {
        props.updateSum(-1);
        setCount(Count - 1);
    }

    return (
        <div className={"counter-wrapper"}>
            <button onClick={increase}>+</button>
            <span> {Count} </span>
            <button onClick={decrease}>-</button>
        </div>
    );
}

export default Counter;
