import Banners from './Clase3/Banners';
import PedirPorApp from './Clase3/PedirPorApp';
import Registrate from './Clase3/Registrate';
import Servicio from './Clase3/Servicio';
import ItemListContainer from './components/ItemListContainer';
import McDonalds from './components/McDonalds';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <McDonalds />
      <Banners />
      <Servicio />
      <PedirPorApp />
      <Registrate />
      <ItemListContainer mensaje={"No se encontraron Productos!"} />
    </>
  )
}

export default App
