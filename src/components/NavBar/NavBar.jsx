import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget'
import useFetch from '../../Hooks/useFetch';


const NavBar = () => {
    const [categories, setCategories] = useState([]);
    const [categorias] = useFetch('https://fakestoreapi.com/products/categories');

    useEffect(() => {
        if (categorias) {
            setCategories(categorias);
        }
    }, [categorias]);


    return (
        <Navbar collapseOnSelect expand="lg" className="navbar bg-body-tertiary rounded-bottom-4 ">
    <Container className=" ">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
                <NavDropdown title="CATEGORIAS" id="collapsible-nav-dropdown" className='fs-5 '>
                    {categories.map((categoria, index) => (
                        <NavDropdown.Item key={index} href={`/category/${categoria}`}>
                            <span className='categoria fs-5'>{categoria}</span>
                        </NavDropdown.Item>
                    ))}
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        
        <Navbar.Brand href="/" className=" me-5">
            <img src="https://i.postimg.cc/dtcd3cNC/logo-chico-2.png" alt="Logo" width="100" height="100"  />
            <span className="fs-4 text-success-emphasis">Tenis para Todos</span>
        </Navbar.Brand>

        <CartWidget />
    </Container>
</Navbar>

    )
}

export default NavBar

