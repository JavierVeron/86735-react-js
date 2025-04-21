import productos from "../assets/productos.json"
import { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const {id} = useParams();
    const [visible, setVisible] = useState(true);
    const {addItem} = useContext(CartContext);

    const promesa = new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 3000)
    })

    useEffect(() => {
        promesa.then(resultado => {
            setItem(resultado.find(item => item.id == id));
        })
    }, [id])

    const onAdd = (quantity) => {
        console.log("Agregaste " + quantity + " Producto(s) al Carrito!");        
        addItem(item, quantity);
        setVisible(false);
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
                        {visible ? <ItemCount stock={item.stock} onAdd={onAdd} /> : <Link to={"/cart"} className="btn btn-warning fw-bold">Terminar Mi Compra</Link>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetailContainer