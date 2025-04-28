import { useEffect, useState } from "react"
import { doc, getDoc, getFirestore } from "firebase/firestore"
import ItemCount from "../components/ItemCount";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

const FirebaseDoc = () => {
    const [loading, setLoading] = useState(true);
    const [visible, setVisible] = useState(true);
    const [item, setItem] = useState({});

    useEffect(() => {
        const db = getFirestore();
        const productoRef = doc(db, "items", "YA6q6JTXoGJgOnxXIdLY");
        getDoc(productoRef)
        .then(snapShot => {
            if (snapShot.exists()) {
                //console.log(snapShot.id);
                //console.log(snapShot.data());
                let product = {id:snapShot.id, ...snapShot.data()};
                //console.log(product);
                setItem(product);
                setLoading(false);
            } else {
                console.log("El Documento NO EXISTE!");
            }
        })
    }, [])

    const onAdd = (quantity) => {
        console.log("Agregaste " + quantity + " Producto(s) al Carrito!");        
        addItem(item, quantity);
        setVisible(false);
    }

    if (loading) {
        return (
            <Loading />
        )
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-5 offset-md-1 text-end">
                    <img src={item.imagen} alt={item.nombre} className="img-fluid" />
                </div>
                <div className="col-md-5 d-flex align-items-center">
                    <div>
                        <h1 className="fw-bold">{item.nombre}</h1>
                        <p className="fw-bold">${item.precio}</p>
                        {visible ? <ItemCount stock={10} onAdd={onAdd} /> : <Link to={"/cart"} className="btn btn-warning fw-bold">Terminar Mi Compra</Link>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirebaseDoc