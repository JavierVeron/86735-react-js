import { Link } from "react-router-dom"

const SinProductos = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    <h1>No se encontraron Productos en el Carrito!</h1>
                    <Link to={"/"} className="btn btn-warning fw-bold my-2">Ir a la Página Principal</Link>
                </div>
            </div>
        </div>
    )
}

export default SinProductos