import React, { useState } from 'react'
import CartContext from './CartContext'

const CartContextProvider = ({ children }) => {

    const [cart, setCart ] = useState([]);
    console.log("CONTEXT",cart)


    const addItem = (item, q) => {

        setCart ([
            ...cart,
            {
                item, q 
            }
        ])
    }

    const removeItem = (id) => {
        const newCart = cart.filter ((el) => el.item.id !== id);
        setCart (newCart);
    }

    const clear = () => {
        setCart ([])

    }

    const values ={
        cart,
        addItem,
        removeItem,
        clear
    }


    return (

        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
