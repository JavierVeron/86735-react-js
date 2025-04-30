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
import Checkout from "./components/Checkout";

function App() {
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
              <Route path={'/checkout'} element={<Checkout />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </ThemeContextProvider>
      </CartContextProvider>
    </>
  )
}

export default App
