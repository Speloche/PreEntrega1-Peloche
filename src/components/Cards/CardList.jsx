import React from 'react'
import './CardList.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const CardList = ({item}) => {
    return (
        <Card className='card d-flex justify-content-center align-items-center rounded-4 shadow p-3 mt-4 bg-body-tertiary rounded' style={{ width: '290px', height:'400px'}}>
            <Card.Img variant="top" className='pt-1 rounded' style={{ width: '140px', height:'160px'}} src={item.image} />
            <Card.Body className=' d-flex flex-column justify-content-between align-items-center' style={{ borderBottom: '1px solid #09430b', }}>
                <Card.Title> {item.title}</Card.Title>
                <span className='precio fs-4 fw-semibold' >$ {item.price}</span>
            </Card.Body>
            <Link to= {`/detalle/${item.id}`} >
            <Button variant="success fw-medium font-monospace mt-3" >Ver detalles </Button>
            </Link>
            
        </Card>
    )
}

export default CardList