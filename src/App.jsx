import Banners from './Clase3/Banners';
import PedirPorApp from './Clase3/PedirPorApp';
import Registrate from './Clase3/Registrate';
import Servicio from './Clase3/Servicio';
import Fetch from './Clase7/Fetch';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import McDonalds from './components/McDonalds';
import NavBar from './components/NavBar';
/* import PokemonAPI from './Clase7/PokemonAPI'; */

function App() {
  return (
    <>
      <NavBar />
      <McDonalds />
      <Banners />
      <Servicio />
      <PedirPorApp />
      <Registrate />
      <ItemListContainer />
      <ItemDetailContainer />

      {/* <PokemonAPI /> */}
    </>
  )
}

export default App
