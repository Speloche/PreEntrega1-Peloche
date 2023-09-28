import React, { useEffect } from 'react'
import CardList from '../Cards/CardList';
import { useParams } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';

const ItemCategory = ({ categories }) => {
    const { categoryid } = useParams();
    const [articulos] = useFetch(`https://fakestoreapi.com/products/category/${categoryid}`);


    useEffect(() => {

    }, [categoryid]);

    return (
        <div className='d-flex justify-content-center align-items-center'>

            <div className="container">
                <div className='row '>
                {articulos !== null && articulos.map((articulo) => (
                        <div key={articulo.id} className='col-md-4 mb-4'>
                            <CardList item={articulo} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ItemCategory
