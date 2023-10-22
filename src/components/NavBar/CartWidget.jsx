import React, { useContext } from 'react';
import { HiShoppingCart } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import CartContext from '../../context/cartContext/CartContext';

const CartWidget = () => {
    const { cart } = useContext(CartContext);

    
    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className="d-flex">
            <Link className="nav-link active fs-5" to="/cart">
                Carrito
                <HiShoppingCart style={{ fontSize: '2.2rem' }} />
            </Link>
            <span className="top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '1rem', padding: '0.6rem' }}>
                {totalQuantity}
            </span>
        </div>
    );
};

export default CartWidget;
