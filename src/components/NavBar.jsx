import { NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"
import Logo from "./Logo"

const NavBar = () => {
    return (
        <div className="container-fluid headerBackground p-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-1">
                        <Logo />
                    </div>
                    <div className="col-md-10">
                        <ul className="nav">
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to={"/productos"}>Productos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to={"/category/hamburguesas"}>Hamburguesas</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to={"/category/pollo"}>Pollo</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to={"/category/papas"}>Papas Fritas</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to={"/category/bebidas"}>Bebidas</NavLink>
                            </li>
                        </ul>
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