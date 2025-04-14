import { useParams } from "react-router-dom";
import Item from "./Item";
import Productos from "./Productos";

const ItemList = ({items}) => {
    const {id} = useParams();    

    return (
        <>
            {id ? <Productos /> : ""}
            <div className="container my-5">
                <div className="row">
                    {
                        items.map(item => (
                            <Item key={item.id} item={item} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default ItemList