import productos from "../assets/productos.json"
import { useEffect, useState } from "react"
import ItemList from "./ItemList";
import McDonalds from "./McDonalds";
import Banners from "../Clase3/Banners";
import Servicio from "../Clase3/Servicio";
import PedirPorApp from "../Clase3/PedirPorApp";
import Registrate from "../Clase3/Registrate";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

const ItemListContainer = () => {
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);
    const {id} = useParams();

    const promesa = new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 3000)
    })

    useEffect(() => {
        promesa.then(resultado => {
            setItems(id ? resultado.filter(item => item.category == id) : resultado);
            setLoading(false);
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