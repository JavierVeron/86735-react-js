import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import Familia from "./components/Familia";
import Productos from "./components/Productos";
import ItemDetailContainer from "./components/ItemDetailContainer";
//import ComponenteA from "./Clase11/ComponenteA";
import { createContext, useContext, useState } from "react";
import ThemeContextProvider from "./components/context/ThemeContext";
import CartContextProvider from "./components/context/CartContext";
import Cart from "./components/Cart";

//const ThemeContext = createContext(true);

/* const ComponenteB = () => {
  const {isDarkMode} = useContext(ThemeContext);
  //console.log(isDarkMode);

  return (
    <>
      <p className="p-1">Modo Oscuro? <b>{isDarkMode ? "Sí" : "No"}</b></p>
    </>
  )
} */

/* const ComponenteA = () => {
  const {curso, setCurso} = useContext(ThemeContext);

  return <>
    <p className="p-1">Curso: <b>{curso}</b></p>
    <p className="p-1"><button className="btn btn-primary" onClick={() => {setCurso("React JS")}}>Modificar Curso</button></p>
    </>
} */

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [curso, setCurso] = useState("Desarrollo Web");

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

          {/* <ThemeContext.Provider value={{isDarkMode, curso, setCurso}}>
            <ComponenteA />
            <ComponenteB />
          </ThemeContext.Provider> */}

          {/* <ThemeContext.Consumer>
            {(isDarkMode) => (
              <p className="p-1">Modo Oscuro? <b>{isDarkMode ? "Sí" : "No"}</b></p>
            )}
          </ThemeContext.Consumer> */}
        </ThemeContextProvider>
      </CartContextProvider>
    </>
  )
}

export default App
