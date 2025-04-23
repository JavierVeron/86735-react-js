import { useEffect, useState } from "react"

const Rendering = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 5000)
    }, [])

    const cargarContenido = () => {
        setLoading(false);
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    {loading ? <h2 className="fw-light text-danger">Cargando...</h2> : <h3 className="fw-bold text-success">Cargado!</h3>}
                    <h1 className="fw-bold text-success">{loading ? "Cargando..." : "Cargado!"}</h1>
                    <p><button className="btn btn-primary" onClick={cargarContenido}>Cargar</button></p>
                </div>
            </div>
        </div>
    )
}

export default Rendering