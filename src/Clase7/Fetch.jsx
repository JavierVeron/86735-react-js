import { useEffect, useState } from "react";

const Fetch = () => {
    //let usuarios = [];
    //const [usuarios, setUsuarios] = useState([]);
    const [productos, setProductos] = useState([]);

    /* useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(respuesta => respuesta.json())
        .then(resultado => {
            console.log(resultado);
            //usuarios = resultado;
            setUsuarios(resultado);
        })
        .catch(error => {
            console.log("Hay un error!");
            console.log(error);
        })
    }, []); */

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            setProductos(data);
        });
    }, [])

    return (
        <div className="container my-5">
            <div className="row">
                <h1>Fetch API</h1>
                {
                    productos.map(item => (
                        <div key={item.id} className="col-md-3 mb-4">
                            <div className="card border-0">
                                <img src={item.image} className="card-img-top" alt={item.title} />
                                <div className="card-body text-center">
                                    <h5 className="card-title fw-light">{item.title}</h5>
                                    <p className="card-text fw-bold">${item.price}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Fetch