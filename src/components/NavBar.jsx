import { NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"
import Logo from "./Logo"
import { useContext } from "react"
import { ThemeContext } from "./context/ThemeContext"

const NavBar = () => {
    const {isDarkMode, setIsDarkMode} = useContext(ThemeContext);    

    return (
        <div className="container-fluid headerBackground p-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-1">
                        <Logo />
                    </div>
                    <div className="col-md-10 d-flex align-items-center">
                        <ul className="nav">
                            <li className="nav-item">
                                <NavLink className={`nav-link ${isDarkMode ? "text-dark" : "text-white"}`} to={"/productos"}>Productos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={`nav-link ${isDarkMode ? "text-dark" : "text-white"}`} to={"/category/hamburguesas"}>Hamburguesas</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={`nav-link ${isDarkMode ? "text-dark" : "text-white"}`} to={"/category/pollo"}>Pollo</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={`nav-link ${isDarkMode ? "text-dark" : "text-white"}`} to={"/category/papas"}>Papas Fritas</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={`nav-link ${isDarkMode ? "text-dark" : "text-white"}`} to={"/category/bebidas"}>Bebidas</NavLink>
                            </li>
                        </ul>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" onChange={() => {setIsDarkMode(isDarkMode ? false : true)}} checked={isDarkMode ? "checked" : ""} />
                            <label className={`form-check-label ${isDarkMode ? "text-dark" : "text-white"}`}>Modo Oscuro</label>
                        </div>
                    </div>
                    <div className="col-md-1 text-end">
                        <CartWidget />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar