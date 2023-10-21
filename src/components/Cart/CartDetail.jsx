import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../../context/cartContext/CartContext'
import styles from './style.module.css'
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useNavigate } from 'react-router-dom'
import FormComponent from '../Form/FormComponent'
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const CartDetail = () => {
    // const [buyer, setBuyer] = useState({
    //     name: "",
    //     email: ""
    // })
    // const [errors, setErrors] = useState({
    //     name: "",
    //     email: ""
    // })
    const [orderId, setOrderId] = useState("")
    const { cart, removeItem, clear } = useContext(CartContext)
    const [isCartEmpty, setIsCartEmpty] = useState(false);

    
    useEffect(() => {
        // Check if the cart is empty
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
                // User confirmed the removal, so remove the item
                removeItem(id);

                // Show a success message
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
            buyer: {
                id: 1,
                name: "Santiago Peloche",
                mail: "sape27@gmail.com",
            },
            items: cart,
            date: new Date(),
            total: precioTotal,
        };

        console.log(purchase);

        const db = getFirestore();
        const orderCollection = collection(db, "orders");

        addDoc(orderCollection, purchase)
            .then((res) => navigate(`/checkout/${res.id}`))
            .catch((err) => console.log(err));

        clear();
    };

    const handleChange = (e) => {
        const { target } = e;
        setBuyer({
            ...buyer,
            [target.name]: target.value
        })
    }

    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     const errorLocal = {};

    //     if (!buyer.name) {
    //         errorLocal.name = "El nombre es obligatorio";
    //     }

    //     if (!buyer.email) {
    //         errorLocal.email = "El email es obligatorio";
    //     }

    //     if (Object.keys(errorLocal).length === 0) {
    //         addToCart();
    //     } else {
    //         setErrors(errorLocal);
    //     }
    // };

    return (

        <div>


            {/* <FormComponent
                formData={buyer}
                inputChange={handleChange}
                onSubmit={onSubmit}
                errors={errors}
                >
            </FormComponent> */}

{
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
            }




            {
                cart.length > 0 &&
                <button className='btn btn-primary' onClick={addToCart}>Create order</button>
            }
            {
                orderId && <span>Order created: {orderId}</span>
            }
        </div>
    )
}

export default CartDetail
