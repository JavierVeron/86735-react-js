import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import Familia from "./components/Familia";
import Productos from "./components/Productos";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ThemeContextProvider from "./components/context/ThemeContext";
import CartContextProvider from "./components/context/CartContext";
import Cart from "./components/Cart";
import Rendering2 from "./Clase12/Rendering2";
import Loading from "./components/Loading";
import Rendering3 from "./Clase12/Rendering3";
import Memo from "./Clase12/Memo";

function App() {
  /* const producto = {"id":8, "title":"Coca Cola Grande", "description":"Burbujas contra el calor, contra la sed, contra el aburrimiento. Si tus comidas llevan gaseosa, están listas para enfrentar lo que sea, elegila en tamaño regular, mediano o grande.", "price":9000, "image":"https://cache-mcd-middleware.mcdonaldscupones.com/media/image/product$kcXf3XY0/200/200/original?country=ar", "category":"bebidas", "stock":10, fechaModificacion:"24-04-2025"} */

  return (
    <>
      <CartContextProvider>
        <ThemeContextProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path={'/'} element={<ItemListContainer />} />
              <Route path={'/productos'} element={<Productos />} />
              <Route path={'/familia'} element={<Familia />} />
              <Route path={'/category/:id'} element={<ItemListContainer />} />
              <Route path={'/item/:id'} element={<ItemDetailContainer />} />
              <Route path={'/cart'} element={<Cart />} />
            </Routes>
            <Footer />
          </BrowserRouter>

          {/* <Rendering3 modoDark={true} clase={""}  /> */}
          {/* <Memo item={producto} /> */}
        </ThemeContextProvider>
      </CartContextProvider>
    </>
  )
}

export default App
