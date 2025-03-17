import mcfiesta from "./assets/mcfiesta.png"

const Hamburguesas = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <div className="card border-0 text-center">
                        <img src={"https://cache-mcd-middleware.mcdonaldscupones.com/media/image/product$kqXzqebG/200/200/original?country=ar"} className="card-img-top" alt="Hamburguesa" />
                        <div className="card-body">
                            <p className="card-text">Hamburguesa</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card border-0 text-center">
                        <img src={"/images/hamburguesa-con-queso.png"} className="card-img-top" alt="Hamburguesa con Queso" />
                        <div className="card-body">
                            <p className="card-text">Hamburguesa con Queso</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card border-0 text-center">
                        <img src={mcfiesta} className="card-img-top" alt="McFiesta" />
                        <div className="card-body">
                            <p className="card-text">McFiesta</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Hamburguesas