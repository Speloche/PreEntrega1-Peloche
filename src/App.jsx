import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Cards from './components/Cards/Cards'


function App() {


  return (
    <div className='container'>

      <NavBar />
      <ItemListContainer greeting="Bienvenidos a la Tienda de Tenis para Todos" />

      <div className='row mt-5'>

        <div className='col-3'>
        <Cards 
        title="Babolat Pure Aero" 
        description="Aero" 
        img="src/assets/img/pure-aero.jpeg"
        />
        </div>

        <div className='col-3'>
        <Cards 
        title="Babolat Pure Aero Rafa" 
        description=" Aero RAfa " 
        img="src/assets/img/pure-aero-rafa.jpeg"
        />
        </div>

        <div className='col-3'>
        <Cards 
        title="Babolat Pure Drive" 
        description="Babolat" 
        img="src/assets/img/pure-drive.jpeg"        
        />
        </div>

        <div className='col-3' >
        <Cards 
        title="Pelotas Wilson Roland Garros " 
        description="Para superficie de Polvo de Ladrillo" 
        img="src/assets/img/wilson-roland.jpeg"
        />
        </div>

      </div>

    </div>

  )
}

export default App
