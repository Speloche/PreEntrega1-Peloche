import React, { useState } from 'react'
import './Counter.css'

const Counter = ({onAdd}) => {
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
            <button className='botonCounter btn btn-success m-2 mb-md-2 btn-round' onClick={decrement}> - </button>
            <span className= "numeroCounter" > { count } </span>
            <button className='botonCounter btn btn-success m-2 mb-md-2 btn-round' onClick={increment}> + </button>
            <button className=' btn btn-success fs-6 fw-medium font-monospace ' onClick={()=> onAdd(count)} > Agregar al Carrito</button>

        </div>
    )
}

export default Counter
