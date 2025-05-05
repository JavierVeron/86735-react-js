import { Link } from "react-router-dom"

const Error404 = ({mensaje}) => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-4 offset-md-2 text-end">
                    <img src="https://www.mcdonalds.com.ar/images/error/error.jpg" alt="Error" className="img-fluid" />
                </div>
                <div className="col-md-4 d-flex align-items-center">
                    <div>
                        <h1 className="fw-bold">Ooops...<br />Algo ha salido mal</h1>
                        <p>{mensaje ? mensaje : "Parece que la página que buscas no existe"}</p>
                        <Link to={"/"} className="btn btn-warning fw-bold">Volver</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error404