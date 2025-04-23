import { useContext } from "react"
import { CartContext } from "./context/CartContext"
import { Link } from "react-router-dom";

const CartWidget = () => {
    const {totalProductos} = useContext(CartContext);

    if (totalProductos() > 0) {
        return (
            <Link to={"/cart"} className="btn btn-warning position-relative">
                <i className="bi bi-cart"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{totalProductos()}</span>
            </Link> 
        )
    }
}

export default CartWidget