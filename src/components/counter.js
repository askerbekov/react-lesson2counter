import React, {useEffect, useState} from "react";
import Button from "./button";

const Counter = () => {
    const [count , setCount] = useState(0)

    const handleIncrease = () => {
        setCount(count + 1)
    }
    const handleDecrease = () => {
        setCount(count - 1)
    }
    useEffect(() => {
        console.log(count)
    },[count])

    return (
        <div>
            <h3>{[count]}</h3>
            <Button title={'increase'} myOnClick={handleIncrease}/>
            <Button title={'decrease'} myOnClick={handleDecrease}/>
        </div>
    )

}

export default Counter