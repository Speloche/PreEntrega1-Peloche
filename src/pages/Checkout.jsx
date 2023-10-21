import { updateDoc, doc, getFirestore } from 'firebase/firestore'
import React from 'react'
import { useParams } from 'react-router-dom'

const Checkout = () => {
    const {orderId} = useParams()
    

    return (
        <div>

            Gracias por su Compra.
        <p>Su numero de compra es {orderId}</p>

        <button onClick={updateOrder}> Actualizar orden </button>

        </div>
    )
}

export default Checkout
