import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import Familia from "./components/Familia";
import Productos from "./components/Productos";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Eventos from "./Clase10/Eventos";
import ItemDetail from "./Clase10/Intercambiabilidad";
import Abstraccion1 from "./Clase10/Abstraccion1";
import Abstraccion2 from "./Clase10/Abstraccion2";

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={'/'} element={<ItemListContainer />} />
          <Route path={'/productos'} element={<Productos />} />
          <Route path={'/familia'} element={<Familia />} />
          <Route path={'/category/:id'} element={<ItemListContainer />} />
          <Route path={'/item/:id'} element={<ItemDetailContainer />} />
        </Routes>
        <Footer />
      </BrowserRouter> */}
      {/* <Eventos /> */}
      {/* <ItemDetail item={{id:1, nombre:"Coca Cola", precio:2000, quantity:5, stock:10}} inputType="input" /> */}
      {/* <Abstraccion1 /> */}
      <Abstraccion2 />
    </>
  )
}

export default App
