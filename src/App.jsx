import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/Items/ItemListContainer'
import Cards from './components/Cards/CardList'
import ItemDetailContainer from './components/Details/ItemDetailContainer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Detalle from './pages/Detalle'
import { Route, Routes } from 'react-router-dom'




function App() {


  return (
    <div className='container'>

      <NavBar />

      <Routes>
        <Route path='/' element ={<Home/>}/> 
        <Route path='/Contact' element ={<Contact/>}/>
        <Route path='/About' element ={<About/>}/>
        <Route path='/detalle/:id' element ={<Detalle/>}/>

      </Routes>


      {/*<ItemDetailContainer />*/}

      


    </div>

  )
}

export default App
