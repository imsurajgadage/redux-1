import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement, increment } from './redux/ducks/counter';


const Counter = () => { 
    
    const dispatch = useDispatch();

    const handleIncrement = () =>{
        dispatch(increment())
    }
    const handleDecrement = () =>{
        dispatch(decrement())
    }
    return (
        <div>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}

export default Counter
