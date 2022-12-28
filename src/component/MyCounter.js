import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import {Stack} from "react-bootstrap";

function MyCounter(props) {
    const [count, setCount] = useState(props.initial);
    function Incrument(){
        if(count<props.max) {
            setCount(count + 1);
        }
    }
    function Decrument(){
        if(count>props.min) {
            setCount(count - 1);
        }
    }
    function Reset() {
        setCount(props.initial)
    }
    return (<Stack direction={"horizontal"} gap={5}>
        <span>Поточний рахунок {count}</span>

        <Button onClick={Incrument}>+</Button>
        <Button variant={"primary"} onClick={Decrument}>-</Button>
        <Button variant={"primary"} onClick={Reset}>RESET</Button>
    </Stack>)
}
export default MyCounter;
MyCounter.defaultProps={initial:10,min:-30,max:100};
