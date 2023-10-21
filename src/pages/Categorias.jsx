import React from 'react';
import { useParams } from 'react-router-dom';
import ItemCategory from '../components/Items/ItemCategory';

const Categorias = () => {
    const { categoryid } = useParams(); 

    return (
        <div className='pt-5'>
            <ItemCategory category={categoryid} /> 
        </div>
    );
};

export default Categorias;
