import React from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home'
import Categorias from './pages/Categorias'
import About from './pages/About'
import Detalle from './pages/Detalle'
import { Route, Routes } from 'react-router-dom'
import CartContextProvider from './context/cartContext/CartContextProvider'
import Cart from './pages/Cart'



function App() {


  return (
    <div className='container'>

      <CartContextProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/category/:categoryid' element={<Categorias />} />
          <Route path='/detalle/:id' element={<Detalle />} />
          <Route path='/Cart' element={<Cart />} />
        </Routes>
      </CartContextProvider>

    </div>

  )
}

export default App
