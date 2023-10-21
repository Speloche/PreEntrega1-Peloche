import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Counter = ({ onAdd, text = "Agregar al carrito", q = 1 }) => {
    const [count, setCount] = useState(q);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const addToCart = () => {
        onAdd(count); // Call the onAdd function to add the item to the cart

        // Show a success toast when the item is added to the cart
        toast.success('Producto agregado al carrito', {
            position: 'top-right',
            autoClose: 2000, // Adjust the auto-close duration
        });
    };

    return (
        <div>
            <button className='botonCounter btn btn-success m-2 mb-md-2 btn-round' onClick={decrement}> - </button>
            <span className="numeroCounter"> {count} </span>
            <button className='botonCounter btn btn-success m-2 mb-md-2 btn-round' onClick={increment}> + </button>
            <button className='btn btn-success fs-6 fw-medium font-monospace' onClick={addToCart}>{text}</button>
        </div>
    );
};

export default Counter;