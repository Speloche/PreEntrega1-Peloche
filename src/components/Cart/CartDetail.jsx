import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../../context/cartContext/CartContext'
import styles from './style.module.css'
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import CartVacio from '../Cards/CartVacio'


const CartDetail = () => {
    const [buyer, setBuyer] = useState({
        name: "",
        email: "",
        tel: ""
    })
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        tel: ""
    })

    const [orderId,] = useState("")
    const { cart, removeItem, clear } = useContext(CartContext)
    const [isCartEmpty, setIsCartEmpty] = useState(false);


    useEffect(() => {

        setIsCartEmpty(cart.length === 0);
    }, [cart]);

    const handleRemoveItem = (id, nombre) => {
        Swal.fire({
            title: `Eliminar ${nombre} del carrito`,
            text: '¿Estás seguro de que deseas eliminar este producto?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar',

        }).then((result) => {
            if (result.isConfirmed) {

                removeItem(id);

                Swal.fire('Eliminado', `Producto "${nombre}" eliminado del carrito`, 'success');
            }
        });
    };

    const navigate = useNavigate()

    const addToCart = () => {
        const precioTotal = cart.reduce((total, item) => {
            return total + item.precio * item.quantity;
        }, 0);

        const purchase = {
            buyer,
            items: cart,
            date: new Date(),
            total: precioTotal,
        };

        console.log(purchase);


        const db = getFirestore();
        const orderCollection = collection(db, "orders");

        addDoc(orderCollection, purchase)
            .then((res) => {
                navigate(`/checkout/${res.id}`, {
                    state: { orderId: res.id, items: purchase.items, total: purchase.total,buyer: buyer },
                });
            })
            .catch((err) => console.log(err));
        clear();
    };

    const handleChange = (e) => {
        const { target } = e;
        setBuyer({
            ...buyer,
            [target.name] : target.value
        })
    }
    
    const onSubmit = (e) => {
        // VALIDACION DE DATOS;
        e.preventDefault()
        const errorLocal = {};
        if(!buyer.name) {
            errorLocal.name = "El nombre es obligatorio"
        };
        if(!buyer.email) {
            errorLocal.email = "El email es obligatorio"
        };
        if(!buyer.tel) {
            errorLocal.tel = "El Telefono es obligatorio"
        };

        if (Object.keys(errorLocal).length === 0) {
            
            addToCart();
        } else {
            
            setErrors(errorLocal);
        }
    }

    return (
        <div>
            {isCartEmpty ? (
                <CartVacio />
            ) : (
                <div>
                    
                    <div className="d-flex flex-column  mt-4 align-items-center">
                        <label htmlFor="name" className="fs-5">Ingrese su nombre</label>
                        <input
                            className={errors.name ? "error" : ""}
                            onChange={handleChange}
                            type="text"
                            name="name"
                            id="name"
                            value={buyer.name}
                            style={{ width: "400px" , borderRadius: "10px" }}
                        />
                        {errors.name && <strong className="text-danger"> {errors.name}</strong>}
    
                        <label htmlFor="celular" className="fs-5" >Ingrese su Telefono</label>
                        <input
                            className={errors.tel ? "error" : ""}
                            onChange={handleChange}
                            type="number"
                            name="tel"
                            id="tel"
                            value={buyer.tel}
                            style={{ width: "400px" , borderRadius: "10px" }}
                        />
                        {errors.tel && <strong className="text-danger"> {errors.tel}</strong>}
    
                        <label htmlFor="email" className="fs-5">Ingrese su email</label>
                        <input
                            className={errors.email ? "error" : ""}
                            onChange={handleChange}
                            type="text"
                            name="email"
                            id="email"
                            value={buyer.email}
                            style={{ width: "400px" , borderRadius: "10px" }}
                        />
                        {errors.email && <strong className="text-danger"> {errors.email}</strong>}
                    </div>
    
                    {cart.map((el) => (
                        <div className={styles.container} key={el.id}>
                            {el && (
                                <div className={styles.cardBody}>
                                    <p>Articulo: {el.nombre}</p>
                                    <p>Cantidad: {el.quantity}</p>
                                </div>
                            )}
                            <img src={el.img} className={styles.image} />
                            <p className={styles.cardPrice}>Precio: $ {el.precio}</p>
                            <button onClick={() => handleRemoveItem(el.id, el.nombre)} className={styles.cartButton}>
                                X
                            </button>
                        </div>
                    ))}
                    <div>
                        <button className="btn btn-success fs-6 fw-medium font-monospace" onClick={onSubmit}>
                            Finalizar Compra
                        </button>
                    </div>
                </div>
            )}
            {orderId && <span>Order created: {orderId}</span>}
        </div>
    );
}

export default CartDetail
