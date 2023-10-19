import React, { useContext } from 'react'
import ItemDetail from './ItemDetail'
import useFetch from '../../Hooks/useFetch'
import CartContext from '../../context/cartContext/CartContext'


const ItemDetailContainer = ( { id }) => {
    const [item] = useFetch(`https://fakestoreapi.com/products/${id}`)

    const {addItem} = useContext (CartContext)
    
    const onAdd = (q) => {
        addItem (item, q)
        
    }


    return (
        <>
            {
                item !== null &&
                <ItemDetail item={item} onAdd= {onAdd} />

            }
        </>
    )
}

export default ItemDetailContainer