import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {
    const [count, setCount] = useState(1)

    const increment = () =>{
        setCount(count +1)
    }
    const decrement = () =>{
        if(count > 1 ){
        setCount(count - 1)
        }
    }

    return (
        <div>
            <button className='botonCounter btn btn-success m-2 mb-md-0 btn-round' onClick={decrement}> - </button>
            <span className= "numeroCounter" > { count } </span>
            <button className='botonCounter btn btn-success m-2 mb-md-0 btn-round' onClick={increment}> + </button>

        </div>
    )
}

export default Counter
