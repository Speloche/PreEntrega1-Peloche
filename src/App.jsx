import React from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import CartContextProvider from './context/cartContext/CartContextProvider'
import RoutesComponent from './routes/RoutesComponent'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {


  return (
    <div className='container'>

      <CartContextProvider>
        <NavBar />
        <RoutesComponent />
      </CartContextProvider>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>

  )
}

export default App
