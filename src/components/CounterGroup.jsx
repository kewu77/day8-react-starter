import Counter from "./Counter";
import {useMemo, useState} from "react";

const CounterGroup = (props) => {
    const [sum, setSum] = useState(0);

    const updateSum = (number) => {
        setSum(sum + number);
    }

    const counters = useMemo(() => {
        setSum(0);
        return new Array(parseInt(props.size)).fill(Math.random())
    }, [props.size])

    return (

        <div>
            <span>Sum: {sum}</span>
            {counters.map((randomId, index) => {
                return <Counter key={randomId + index} updateSum={updateSum}/>
            })}
        </div>
    );
}

export default CounterGroup;
