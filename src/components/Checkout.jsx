import { useContext, useState } from "react"
import { CartContext } from "./context/CartContext";
import SinProductos from "./SinProductos";
import { addDoc, collection, doc, getDoc, getFirestore, updateDoc, writeBatch } from "firebase/firestore";

const Checkout = () => {
    const {cart, clear, totalProductos, sumaProductos} = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");

    const vaciarForm = () => {
        setNombre("");
        setEmail("");
        setTelefono("");
        clear();
    }

    const generarOrden = () => {
        const buyer = {name:nombre, phone:telefono, email:email};
        const items = cart.map(item => ({id:item.id, title:item.title, price:item.price, quantity:item.quantity}));
        const fecha = new Date();
        const fechaActual = `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;
        const order = {buyer, items, date:fechaActual, total:sumaProductos()};
        //console.log(order);
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");

        // Insertar un Documento
        /* addDoc(ordersCollection, order).then(snapShot => {
            setOrderId(snapShot.id);
            vaciarForm();
        }) */

        // Modificar un Documento
        /* const docRef = doc(db, "orders", "lpAakNTtW6o5EoAcUYaJ");
        updateDoc(docRef, {stock:10}).then(snapShot => {
            console.log(snapShot);
        }) */

        // (incrementar/decrementar) un valor existente
        /* const docRef = doc(db, "orders", "lpAakNTtW6o5EoAcUYaJ");
        let document;
        getDoc(docRef).then(snapShot => {
            document = {...snapShot.data()}
            updateDoc(docRef, {stock:(document.stock - 1)}).then(snapShot => {
                console.log(snapShot);
            })
        }) */

        // Actualizar documentos en lote
        /* const batch = writeBatch(db);
        const docRef1 = doc(db, "orders", "4JjsRRds5eb2ZsYzzZV4");
        const docRef2 = doc(db, "orders", "aLm9ty5lAp0H4amUJgsy");
        const docRef3 = doc(db, "orders", "l829RRJJKBHfsLSKdN99");
        batch.update(docRef1, {fecha:"30-04-2025 09:27"});
        batch.update(docRef2, {fecha:"30-04-2025 09:27"});
        batch.set(docRef3, {fecha:"30-04-2025 09:27"});
        batch.commit();
        console.log("Proceso terminado!"); */

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
                        {orderId && <div class="alert alert-warning text-center" role="alert">
                            <h1>Gracias por tu Compra!</h1>
                            <h3>Tu Número de Compra es: <span className="fw-bold">{orderId}</span></h3>
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
                        <div class="mb-3">
                            <label class="form-label">Nombre</label>
                            <input type="text" class="form-control" value={nombre} onInput={(e) => {setNombre(e.target.value)}} />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Email</label>
                            <input type="text" class="form-control" value={email} onInput={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Teléfono</label>
                            <input type="text" class="form-control" value={telefono} onInput={(e) => {setTelefono(e.target.value)}} />
                        </div>
                        <button type="button" class="btn btn-warning btn-sm fw-bold" onClick={generarOrden}>Generar Orden</button>
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