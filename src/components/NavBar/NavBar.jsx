import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary rounded-bottom-4">

            <div className="container-fluid">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
                    <ul className="navbar-nav fs-5">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About </Link>
                        </li>
                    </ul>

                    <Link className="navbar-brand " to="/">
                        <img src="src/assets/img/logo-chico-2.png" alt="Logo" width="100" height="100" className="d-inline-block " />
                        <span className=" align-text-center p-2 fs-4 text-success-emphasis ">Tenis para Todos</span>
                    </Link>

                    <CartWidget />

                </div>
            </div>
        </nav>
    )
}

export default NavBar
