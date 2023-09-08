import React from 'react'

const Cards = ({title, description, img}) => {
    return (
        <div className='card d-flex justify-content-center align-items-center rounded-4 shadow p-3 mb-5 bg-body-tertiary rounded' style={{ width: '250px', height:'350px'}} >
            <img src={img} alt={title} className='pt-1' style={{ width: '150px', height:'200px'}} />
            <div className="card-body d-flex flex-column justify-content-center align-items-center   ">
                <p className='card-title text-center'>{title}</p>
                <p className='card-text text-center'>{description}</p>
                <button type="button" className="btn btn-outline-success ">Comprar</button>
            </div>



        </div>
    )
}

export default Cards
