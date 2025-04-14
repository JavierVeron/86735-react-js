import { NavLink } from "react-router-dom"

const Productos = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-2 offset-md-2 text-center">
                    <NavLink to={"/category/hamburguesas"} className="text-decoration-none text-dark">
                        <img src="https://cache-mcd-middleware.mcdonaldscupones.com/media/image/product$kKXdw3Ku/200/200/original?country=ar" alt="Hamburguesas" className="img-fluid" />
                        <p>Hamburguesas</p>
                    </NavLink>
                </div>
                <div className="col-md-2 text-center">
                    <NavLink to={"/category/pollo"} className="text-decoration-none text-dark">
                        <img src="https://cache-mcd-middleware.mcdonaldscupones.com/media/image/product$k5XhSNp5/200/200/original?country=ar" alt="Sandiwches de Pollo" className="img-fluid"/>
                        <p>Sandiwches de Pollo</p>
                    </NavLink>
                </div>
                <div className="col-md-2 text-center">
                    <NavLink to={"/category/papas"} className="text-decoration-none text-dark">
                        <img src="https://cache-mcd-middleware.mcdonaldscupones.com/media/image/product$kKX4MZKT/200/200/original?country=ar" alt="Papas y Complementos" className="img-fluid" />
                        <p>Papas y Complementos</p>
                    </NavLink>
                </div>
                <div className="col-md-2 text-center">
                    <NavLink to={"/category/bebidas"} className="text-decoration-none text-dark">
                        <img src="https://cache-mcd-middleware.mcdonaldscupones.com/media/image/product$kcX2292z/200/200/original?country=ar" alt="Bebidas" className="img-fluid" />
                        <p>Bebidas</p>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Productos