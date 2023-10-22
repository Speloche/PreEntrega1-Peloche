import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget'


const NavBar = () => {
    const categories = ['Raquetas', 'Pelotas', 'OverGrips'];

    return (
        <Navbar collapseOnSelect expand="lg" className="navbar bg-body-tertiary rounded-bottom-4 ">
            <Container className=" ">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>

                        
                        {categories.map((category) => (
                            <Link key={category} to={`/category/${category.toLowerCase()}`} className="nav-link active fs-5">{category}</Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>

                <Navbar.Brand href="/" className=" me-5">
                    <img src="https://i.postimg.cc/dtcd3cNC/logo-chico-2.png" alt="Logo" width="100" height="100" />
                    <span className="fs-4 text-success-emphasis">Tenis para Todos</span>
                </Navbar.Brand>

                <CartWidget />
            </Container>
        </Navbar>

    )
}

export default NavBar

