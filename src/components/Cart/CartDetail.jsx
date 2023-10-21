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
        email: ""
    })
    const [errors, setErrors] = useState({
        name: "",
        email: ""
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
                    state: { orderId: res.id, items: purchase.items, total: purchase.total },
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
      //  []
        if (Object.keys(errorLocal).length === 0) {
            // No hay errores, puedes realizar la acción deseada, como agregar al carrito
            addToCart();
        } else {
            // Hay errores, establece el estado de errores para mostrarlos al usuario
            setErrors(errorLocal);
        }
    }

    return (

        <div>
            <div>
                <label htmlFor=" name ">Ingrese su nombre </label>
                <input className= {errors.name ? "error" : ""} onChange={handleChange} type="text" name="name" id="name" value={buyer.name} />
                {errors.name && <span> {errors.name}</span>}

                <label htmlFor=" email ">Ingrese su email </label>
                <input className= {errors.email ? "error" : ""} onChange={handleChange} type="text" name="email" id="email" value={buyer.email} />
                {errors.email && <span> {errors.email}</span>}
            </div>

            {isCartEmpty ? (
                <CartVacio />
            ) : (
                cart.map((el) => (
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
                ))
            )}

            {
                cart.length > 0 &&
                <div>

                    <button className='btn btn-success fs-6 fw-medium font-monospace ' onClick={onSubmit}>Finalizar Compra </button>

                </div>
            }
            {
                orderId && <span>Order created: {orderId}</span>
            }
        </div>
    )
}

export default CartDetail
