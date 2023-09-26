import React, { useEffect } from 'react'
import Counter from '../Counter/Counter'
import './ItemDetail.css'

const ItemDetail = ({item}) => {


    return (
        <div className='card rounded mt-3' style={{ width: '450px', height:'605px'}}>
            <div className="d-flex flex-column align-items-center p-1 mt-2 bg-body-tertiary">
                <h5> {item.title}</h5>
            <img className= "m-2" style={{ width: '190px', height:'250px'}} src={item.image} alt="" />
            <p>
                {item.description}
            </p>
            <p  className=' fs-4 fw-semibold'>
                Precio: $ {item.price}
            </p>
            </div>
            <hr className="divider " />
            <div className="d-flex justify-content-around ">
            <Counter/>
            <button className=' btn btn-success fs-5 fw-medium font-monospace '> Comprar</button>
            </div>

        </div>
    )
}

export default ItemDetail
