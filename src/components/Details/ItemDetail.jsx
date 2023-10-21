import React from 'react'
import Counter from '../Counter/Counter'
import './ItemDetail.css'

const ItemDetail = ({ item, onAdd }) => {


    return (
        <div className='card rounded mt-3 justify-content-center align-items-center'
            style={{ width: '450px', height: '650px', margin: 'auto' }}>

            <div className="d-flex flex-column align-items-center p-1 mt-2 bg-body-tertiary">

                <h2> {item.nombre}</h2>

                <img className="m-3" style={{ width: '200px', height: '250px' }} src={item.img} alt="" />

                <p className='text-center'>
                    {item.descripcion}
                </p>
 
                <p className=' fs-4 fw-semibold'>
                    Precio: $ {item.precio}
                </p>

            </div>
            <hr className="divider " />
            <div className="d-flex d-flex justify-content-evenly align-items-center">
                <Counter onAdd={onAdd} />
            </div>

        </div>
    )
}

export default ItemDetail
