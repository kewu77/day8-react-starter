import {useState} from "react";

const CounterGroupGenerator = (props) => {
    let [size, setSize] = useState(0);

    const handleChange = (event) => {
        setSize(Math.max(0, Math.min(20, parseInt(event.target.value, 10) || 0)));
    }

    const handleSetSize = () => {

        props.updateSize(size);
    }

    return (
        <div>
            <span>size: </span>
            <input type={"number"} value={size} onChange={handleChange}/>
            <button onClick={handleSetSize}>reset</button>
        </div>
    );
}

export default CounterGroupGenerator;
