import { useContext } from "react"
import { CartContext } from "./context/CartContext"

const Cart = () => {
    const {cart} = useContext(CartContext);

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className="table">
                        {
                            cart.map(item => (
                                <tr>
                                    <td><img src={item.image} alt={item.title} width={96} /></td>
                                    <td>{item.title}</td>
                                    <td>${item.price}</td>
                                    <td>x{item.quantity}</td>
                                    <td>${item.price * item.quantity}</td>
                                </tr>
                            ))
                        }
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart