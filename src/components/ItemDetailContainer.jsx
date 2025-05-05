import { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext";
import Loading from "./Loading";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Error404 from "./Error404";

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState({});
    const {id} = useParams();
    const [visible, setVisible] = useState(true);
    const {addItem} = useContext(CartContext);

    useEffect(() => {        
        const db = getFirestore();
        const docRef = doc(db, "items", id);
        getDoc(docRef)
        .then(snapShot => {            
            setLoading(false);

            if (snapShot.exists()) {
                setItem({id:snapShot.id, ...snapShot.data()});
            }
        })
    }, [id])

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

    if (!item.title) {
        return (
            <Error404 mensaje="No existe el Producto ingresado!" />
        )
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-5 offset-md-1 text-end">
                    <img src={item.image} alt={item.title} />
                </div>
                <div className="col-md-5 d-flex align-items-center">
                    <div>
                        <h1 className="fw-bold">{item.title}</h1>
                        <p>{item.description}</p>
                        <p className="fw-bold">${item.price}</p>
                        {visible ? item.stock > 0 ? <ItemCount stock={item.stock} onAdd={onAdd} /> : <span className="badge text-bg-warning">Sin Stock</span> : <Link to={"/cart"} className="btn btn-warning fw-bold">Terminar Mi Compra</Link>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetailContainer