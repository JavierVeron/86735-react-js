const Rendering2 = ({mostrar}) => {
    // Tecnica #1
    /* if (mostrar) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col">
                        <h1 className="fw-bold">Curso de React JS</h1>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <h1 className="fw-bold">Curso de JavaScript</h1>
                </div>
            </div>
        </div>
    ) */

    // Técnica #2
    /* return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    {mostrar && <h1 className="fw-bold">Curso de React JS</h1>}
                    {!mostrar && <h1 className="fw-bold">Curso de JavaScript</h1>}
                </div>
            </div>
        </div>
    ) */

    // Técnica #3
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <h1 className="fw-bold">{mostrar ? "Curso de React JS" : "Curso de JavaScript"}</h1>
                </div>
            </div>
        </div>
    )
}

export default Rendering2