import React from 'react'
import './style.pages.css'
import { useLocation } from 'react-router-dom';

const Checkout = () => {

    const location = useLocation();
    const state = location.state || {};
    const { orderId, items, total, buyer } = state;


    return (
        <div className="checkout" >
            <h2 className="titulo"> Orden de Compra </h2>
            <div className="infoOrder">
                <p> <span>Order ID:</span> {orderId}</p>
                <p><span>Nombre:</span> {buyer && buyer.name}</p>
                <p><span>Email:</span> {buyer && buyer.email}</p>
                <p><span>Tel:</span> {buyer && buyer.tel}</p>
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

            <div className='m-5 text-center '>
                <p> <strong> Gracias por su Compra </strong></p>
                <p> <strong>En las proximas 24 hrs nos estaremos comunicando para coordinar la visita. </strong> </p>
            </div>
        </div>
    )
}

export default Checkout
