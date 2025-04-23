import { useContext } from "react"
import { CartContext } from "./context/CartContext"
import { Link } from "react-router-dom";

const Cart = () => {
    const {cart, removeItem, clear, totalProductos, sumaProductos, decrementarItem, aumentarItem} = useContext(CartContext);

    if (totalProductos() == 0) {
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

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td className="text-end" colSpan={6}><button className="btn btn-warning btn-sm" onClick={clear}>Vaciar Carrito</button></td>
                            </tr>
                            {
                                cart.map(item => (
                                    <tr>
                                        <td className="align-middle"><img src={item.image} alt={item.title} width={96} /></td>
                                        <td className="align-middle">{item.title}</td>
                                        <td className="align-middle text-center">${item.price}</td>
                                        <td className="align-middle text-center">x{item.quantity}</td>
                                        <td className="align-middle text-center">
                                            <button className="btn btn-warning btn-sm" onClick={() => {decrementarItem(item.id)}}><i class="bi bi-dash"></i></button> ${item.price * item.quantity} <button className="btn btn-warning btn-sm" onClick={() => {aumentarItem(item.id)}}><i class="bi bi-plus"></i></button>
                                        </td>
                                        <td className="align-middle text-end"><button className="btn btn-warning btn-sm" onClick={() => {removeItem(item.id)}}><i className="bi bi-trash"></i></button></td>
                                    </tr>
                                ))
                            }
                            <tr>
                                <td className="text-center" colSpan={4}>Total a Pagar</td>
                                <td className="text-center">${sumaProductos()}</td>
                                <td>&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart