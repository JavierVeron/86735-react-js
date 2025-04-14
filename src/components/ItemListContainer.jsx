import productos from "../assets/productos.json"
import { useEffect, useState } from "react"
import ItemList from "./ItemList";
import McDonalds from "./McDonalds";
import Banners from "../Clase3/Banners";
import Servicio from "../Clase3/Servicio";
import PedirPorApp from "../Clase3/PedirPorApp";
import Registrate from "../Clase3/Registrate";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
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
        })
    }, [id])

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