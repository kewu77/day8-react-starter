import CounterGroupGenerator from "./CounterGroupGenerator";
import {useState} from "react";
import CounterGroup from "./CounterGroup";

const MultipleCounter = () => {
    let [size, setSize] = useState(0);

    const updateSize = (size) => {
        setSize(size);
    }
    return (
        <div>
            <CounterGroupGenerator updateSize={updateSize}/>
            <CounterGroup size={size}></CounterGroup>
        </div>
    );
}

export default MultipleCounter;
