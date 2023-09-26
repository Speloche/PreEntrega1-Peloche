import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetailContainer from '../components/Details/ItemDetailContainer'

const Detalle = () => {
    const{id}  = useParams()
    return (
        <div>
            <ItemDetailContainer id={id}/>
        </div>
    )
}

export default Detalle
