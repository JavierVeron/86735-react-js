import { useContext, useEffect, useState } from "react"
import { CartContext } from "./context/CartContext";
import SinProductos from "./SinProductos";
import { addDoc, collection, doc, getDoc, getFirestore, updateDoc, writeBatch } from "firebase/firestore";
import { Link } from "react-router-dom";

const Checkout = () => {
    const {cart, clear, totalProductos, sumaProductos} = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");
    const [disabled, setDisabled] = useState(true);

    const vaciarForm = () => {
        setNombre("");
        setEmail("");
        setTelefono("");
        clear();
    }

    useEffect(() => {
        if ((nombre != "") && (telefono != "") && (email != "")) {
            setDisabled(false);
        }
    }, [nombre, email, telefono])

    const generarOrden = () => {
        const buyer = {name:nombre, phone:telefono, email:email};
        const items = cart.map(item => ({id:item.id, title:item.title, price:item.price, quantity:item.quantity}));
        const fecha = new Date();
        const fechaActual = `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;
        const order = {buyer, items, date:fechaActual, total:sumaProductos()};
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");

        // Insertar un nuevo Documento en Order y actualizar los stocks en Items
        addDoc(ordersCollection, order).then(snapShot => {
            setOrderId(snapShot.id);
            vaciarForm();
        })

        for (const item of items) {
            const docRef = doc(db, "items", item.id);
            getDoc(docRef).then(snapShot => {
                let document = {...snapShot.data()};
                updateDoc(docRef, {stock:(document.stock - item.quantity)});
            })
        }
    }

    if (orderId) {
        return (
            <div className="container my-5">
                <div className="row my-5">
                    <div className="col text-center">
                        {orderId && <div className="alert alert-warning text-center" role="alert">
                            <h1 className="fw-bold">Gracias por tu Compra!</h1>
                            <h3 className="my-3">Tu Número de Compra es: <span className="fw-bold">{orderId}</span></h3>
                            <Link to={"/"} className="btn btn-warning fw-bold my-3">Ir a la Página Principal</Link>
                        </div>}
                    </div>
                </div>
            </div>
        )
    }

    if (totalProductos() == 0) {
        return (
            <SinProductos />
        )
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input type="text" className="form-control" value={nombre} onInput={(e) => {setNombre(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="text" className="form-control" value={email} onInput={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Teléfono</label>
                            <input type="text" className="form-control" value={telefono} onInput={(e) => {setTelefono(e.target.value)}} />
                        </div>
                        <button type="button" className="btn btn-warning btn-sm fw-bold" onClick={generarOrden} disabled={disabled ? "disabled" : ""}>Generar Orden</button>
                    </form>
                </div>
                <div className="col-md-6">
                    <table className="table">
                        <tbody>
                            {
                                cart.map(item => (
                                    <tr key={item.id}>
                                        <td className="align-middle"><img src={item.image} alt={item.title} width={96} /></td>
                                        <td className="align-middle">{item.title}</td>
                                        <td className="align-middle text-center">${item.price}</td>
                                        <td className="align-middle text-center">x{item.quantity}</td>
                                        <td className="align-middle text-center">${item.price * item.quantity}</td>
                                    </tr>
                                ))
                            }
                            <tr>
                                <td className="text-center" colSpan={4}>Total a Pagar</td>
                                <td className="text-center fw-bold">${sumaProductos()}</td>
                                <td>&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Checkout