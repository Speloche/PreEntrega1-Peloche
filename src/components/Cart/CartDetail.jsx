import React, { useContext } from 'react'
import CartContext from '../../context/cartContext/CartContext'

const CartDetail = () => {

    const {cart,removeItem} = useContext (CartContext)
    console.log(cart)

    return (

        <div >
            Cart
            {
                cart.map ( el => (
                    <div key= {el.id}>
                        <p> Products : {el.item.title} </p>
                        <p> Cant: {el.q} </p>
                        <button onClick={() => removeItem(el.item.id)}> X </button>
                    </div>
                ))
            }
        
        </div>
    )
}

export default CartDetail
