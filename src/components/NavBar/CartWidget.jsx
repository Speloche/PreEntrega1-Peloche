import React from 'react'
import {HiShoppingCart} from "react-icons/hi"

const CartWidget = () => {
    return (
        <div className='d-flex'>
            <a className="nav-link fs-5" href="#">Carrito
            <HiShoppingCart style={{ fontSize: '2.2rem' }} /></a>
            <span className=" top-0 start-100 translate-middle badge rounded-pill bg-danger" 
            style={{ fontSize: '1rem', padding: '0.6rem' }}> 0 </span>

        </div>
    )
}

export default CartWidget
