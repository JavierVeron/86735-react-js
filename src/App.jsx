import Banners from './Clase3/Banners';
import PedirPorApp from './Clase3/PedirPorApp';
import Registrate from './Clase3/Registrate';
import Servicio from './Clase3/Servicio';
import Header from './components/Header';
import McDonalds from './components/McDonalds';

function App() {
  return (
    <>
      <Header />
      <McDonalds />
      <Banners />
      <Servicio />
      <PedirPorApp />
      <Registrate />
    </>
  )
}

export default App
