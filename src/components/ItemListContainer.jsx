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
import Error404 from "./Error404";

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
            setLoading(false);

            if (snapShot.size > 0) {
                setItems(snapShot.docs.map(item => ({id:item.id, ...item.data()})));
            }
        })
    }, [id])

    if (loading) {
        return (
            <Loading />
        )
    }

    if (items.length == 0) {
        return (
            <Error404 mensaje={"No hay Productos para esta Categoría!"} />
        )
    }

    return (
        <>
            {!id ? <><McDonalds />
            <Banners />
            <Servicio />
            <PedirPorApp />
            <Registrate /></> : ""}
            <ItemList items={items} />
        </>
    )
}

export default ItemListContainer