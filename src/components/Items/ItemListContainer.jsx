import React from 'react'
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import ItemList from './ItemList';
import useFetch from '../../Hooks/useFetch';

const ItemListContainer = () => {
    const [items] = useFetch("https://fakestoreapi.com/products")

    return (
        <Container>
            <Row>
                {
                    items !== null &&
                    <ItemList items={items} />
                }
            </Row>
        </Container>
    )
}

export default ItemListContainer

