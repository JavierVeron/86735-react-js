const EjemploPromesas = () => {
    const productos = [
        {id:1, name:"Coca Cola sabor original 2,25 lts", description:"2do al 30% Max 48 Unidades Iguales", precio:3485, stock:10, linea:"cocacola"},
        {id:2, name:"Coca Cola Zero 2,25 lts", description:"2do al 30% Max 48 Unidades Iguales", precio:3485, stock:8, linea:"cocacola"},
        {id:3, name:"Pepsi 1,5 lts", description:"2do al 30% Max 48 Unidades Iguales", precio:1600, stock:5, linea:"pepsi"},
        {id:4, name:"Pepsi Black 1,5 lts", description:"2do al 30% Max 48 Unidades Iguales", precio:1600, stock:4, linea:"pepsi"}
    ]

    const bebidas = (linea) => {
        return new Promise((resolver, rechazar) => {
            setTimeout(() => {
                const filtro = linea ? productos.filter(item => item.linea == linea) : productos;
                resolver(filtro);
            }, 3000);
        })
    }

    bebidas().then(resultado => {
        console.log(resultado);
    })
    
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <h1>Ejemplo Promesas</h1>
                </div>
            </div>
        </div>
    )
}

export default EjemploPromesas