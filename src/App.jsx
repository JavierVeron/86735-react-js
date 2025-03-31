import Banners from './Clase3/Banners';
import PedirPorApp from './Clase3/PedirPorApp';
import Registrate from './Clase3/Registrate';
import Servicio from './Clase3/Servicio';
import CompChildren from './Clase5/CompChildren';
import CompUseEffect from './Clase5/CompUseEffect';
import CompUseRef from './Clase5/CompUseRef';
import EjemploPromesas from './Clase6/EjemploPromesas';
import Map from './Clase6/Map';
import Promesas from './Clase6/Promesas';
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

      {/* <Promesas /> */}
      {/* <EjemploPromesas /> */}
      {/* <Map /> */}
    </>
  )
}

export default App
