import React from 'react'
import Counter from '../Counter/Counter'
import './ItemDetail.css'

const ItemDetail = ({item,onAdd}) => {


    return (
        <div className='card rounded mt-3 justify-content-center align-items-center' style={{ width: '550px', height:'700px', margin: 'auto'}}>
            <div className="d-flex flex-column align-items-center p-1 mt-2 bg-body-tertiary">
                <h5> {item.title}</h5>
            <img className= "m-2" style={{ width: '250px', height:'290px'}} src={item.image} alt="" />
            <p>
                {item.description}
            </p>
            <p  className=' fs-4 fw-semibold'>
                Precio: $ {item.price}
            </p>
            </div>
            <hr className="divider " />
            <div className="d-flex d-flex justify-content-evenly align-items-center">
            <Counter onAdd = {onAdd}/>
            </div>

        </div>
    )
}

export default ItemDetail
