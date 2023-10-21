import React from 'react'
import './style.pages.css'
import { useLocation } from 'react-router-dom';

const Checkout = () => {

    const location = useLocation();
    const state = location.state || {};
    const { orderId, items, total } = state;


    return (
        <div className= "checkout" >
            <h2 className="titulo"> Orden de Compra </h2>
            <div className="infoOrder">
            <p> <span>Order ID:</span> {orderId}</p>
            <p>
            Art Comprados:
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.nombre}</li>
                ))}
            </ul>
        </p>
            <p>Total: ${total}</p>
            </div>
        </div>
    )
}

export default Checkout
