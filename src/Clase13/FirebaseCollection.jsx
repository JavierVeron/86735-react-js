import { useEffect, useState } from "react"
import { addDoc, collection, getDocs, getFirestore, limit, query, where } from "firebase/firestore"
import Loading from "../components/Loading";
import productos from "../assets/productos.json"

const FirebaseCollection = () => {
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState({});

    // Accediendo a una Collection completa
    /* useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        getDocs(itemsCollection)
        .then(snapShot => {
            if (snapShot.size > 0) {
                let products = snapShot.docs.map(item => ({id:item.id, ...item.data()}));
                setItems(products);
                setLoading(false);
            } else {
                console.log("No hay Documentos!");
            }
        })
    }, []) */

    // Accediendo a una Collection mediante filtros
    /* useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const q = query(itemsCollection, (where("categoria", "==", "gaseosas"), where("precio", "<", 4000)));
        getDocs(q)
        .then(snapShot => {
            if (snapShot.size > 0) {
                let products = snapShot.docs.map(item => ({id:item.id, ...item.data()}));
                setItems(products);
                setLoading(false);
            } else {
                console.log("No hay Documentos!");
            }
        })
    }, []) */

    // Accediendo a una Collection mediante filtros y poniendo límites
    /* useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const q = query(itemsCollection, (where("precio", ">", 3000), limit(2)));
        getDocs(q)
        .then(snapShot => {
            if (snapShot.size > 0) {
                let products = snapShot.docs.map(item => ({id:item.id, ...item.data()}));
                setItems(products);
                setLoading(false);
            } else {
                console.log("No hay Documentos!");
            }
        })
    }, []) */

    // Carga de Productos en nuestra colección de FireStore
    /* useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");

        for (const producto of productos) {
            addDoc(itemsCollection, producto);            
        }

        console.log("Proceso Terminado!");
    }, []) */

    if (loading) {
        return (
            <Loading />
        )
    }

    return (
        <div className="container my-5">
            <div className="row">
                {
                    items.map(item => (
                        <div key={item.id} className="col-md-4 mb-4">
                            <div className="card border-0 shadow p-3 mb-5 bg-body-tertiary rounded">
                                <img src={item.imagen} className="card-img-top" alt={item.nombre} />
                                <div className="card-body text-center bg-white">
                                    <p className="card-text">{item.nombre}</p>
                                    <p className="card-text">${item.precio}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FirebaseCollection