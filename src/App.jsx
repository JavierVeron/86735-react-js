import Banners from './Clase3/Banners';
import PedirPorApp from './Clase3/PedirPorApp';
import Registrate from './Clase3/Registrate';
import Servicio from './Clase3/Servicio';
import CompChildren from './Clase5/CompChildren';
import CompUseEffect from './Clase5/CompUseEffect';
import CompUseRef from './Clase5/CompUseRef';
import ItemListContainer from './components/ItemListContainer';
import McDonalds from './components/McDonalds';
import NavBar from './components/NavBar';

function App() {
  const bebida = {id:1, nombre:"Coca Cola", precio:2300}

  return (
    <>
      <NavBar />
      <McDonalds />
      <Banners />
      <Servicio />
      <PedirPorApp />
      <Registrate />
      <ItemListContainer mensaje={"No se encontraron Productos!"} />

      {/* <CompChildren imagen={"https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-bk-argentina/home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/Whopper-3.png"}>
        <h1>Whopper</h1>
        <h3>100% real no fake.</h3>
        <p>Ahora nuestra Whopper es sin conservantes, colorantes ni saborizantes artificiales. Con todo el sabor a la parrilla, jugosos tomates, lechuga recién cortada, mayonesa, pepinos y cebollas en rodajas, sobre un suave pan con semillitas de ajonjolí. Pedila así: Whopper y nada más que Whopper, pero con papas y gaseosa.</p>
      </CompChildren>
      <CompChildren imagen={"https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-bk-argentina/home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/Stacker-Doble-1.png"} >
        <h1>Stacker Doble</h1>
        <h3>El doble de manija</h3>
        <p>2 carnes a la parri, salsa stacker, pan, queso cheddar, panceta. Tranki pero potente.</p>
      </CompChildren> */}
      {/* <CompUseRef /> */}
      {/* <CompUseEffect /> */}
    </>
  )
}

export default App
