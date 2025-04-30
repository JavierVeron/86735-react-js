import { useEffect, useState } from "react"
import ItemList from "./ItemList";
import McDonalds from "./McDonalds";
import Banners from "../Clase3/Banners";
import Servicio from "../Clase3/Servicio";
import PedirPorApp from "../Clase3/PedirPorApp";
import Registrate from "../Clase3/Registrate";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const ItemListContainer = () => {
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");        
        const q = id ? query(itemsCollection, (where("category", "==", id))) : itemsCollection;
        getDocs(q)
        .then(snapShot => {
            if (snapShot.size > 0) {
                setItems(snapShot.docs.map(item => ({id:item.id, ...item.data()})));
                setLoading(false);
            } else {
                console.log("No hay Documentos!");
            }
        })
    }, [id])

    return (
        <>
            {!id ? <><McDonalds />
            <Banners />
            <Servicio />
            <PedirPorApp />
            <Registrate /></> : ""}
            {loading ? <Loading /> : <ItemList items={items} />}
        </>
    )
}

export default ItemListContainer