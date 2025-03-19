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
                                <a className="nav-link text-white" href="#">Productos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">En familia</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Receta del Futuro</a>
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