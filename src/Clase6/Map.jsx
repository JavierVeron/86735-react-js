const Map = () => {
    const productos = [
        {id:1, name:"Coca Cola sabor original 2,25 lts", description:"2do al 30% Max 48 Unidades Iguales", price:3485, stock:10, linea:"cocacola"},
        {id:2, name:"Coca Cola Zero 2,25 lts", description:"2do al 30% Max 48 Unidades Iguales", price:3485, stock:8, linea:"cocacola"},
        {id:3, name:"Pepsi 1,5 lts", description:"2do al 30% Max 48 Unidades Iguales", price:1600, stock:5, linea:"pepsi"},
        {id:4, name:"Pepsi Black 1,5 lts", description:"2do al 30% Max 48 Unidades Iguales", price:1600, stock:4, linea:"pepsi"}
    ]

    const nuevosProductos = productos.map(item => ({id:item.id, nombre:item.name.toUpperCase(), precio:item.price}));
    //const nuevosProductos = productos.map(item => item.name.toUpperCase());
    //console.log(nuevosProductos);    

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <h1>Map</h1>
                    <ul>
                        {
                            nuevosProductos.map(item => (
                                <li key={item.id}>{item.nombre} ${item.precio}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Map