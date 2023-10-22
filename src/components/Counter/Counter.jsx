import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Counter = ({ onAdd, text = "Agregar al carrito", stock, q = 1 }) => {
    const [count, setCount] = useState(q);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        } else {
            
            toast.error('No hay más stock disponible.', {
                position: 'top-right',
                autoClose: 1500,
            });
        }
    };

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const addToCart = () => {
        if (count <= stock) {
            onAdd(count);

            toast.success('Producto agregado al carrito', {
                position: 'top-right',
                autoClose: 1500,
            });
        } else {
            
            toast.error('No hay más stock disponible.', {
                position: 'top-right',
                autoClose: 1500,
            });
        }
    };

    return (
        <div>
            <button className='botonCounter btn btn-success m-2 mb-md-2 btn-round' onClick={decrement}> - </button>
            <span className="numeroCounter"> {count} </span>
            <button className='botonCounter btn btn-success m-2 mb-md-2 btn-round' onClick={increment}> + </button>
            <button className='btn btn-success fs-6 fw-medium shadow font-monospace' onClick={addToCart}>{text}</button>
        </div>
    );
};

export default Counter;