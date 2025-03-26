const CompChildren = ({imagen, children}) => {
    return (
        <div className="container my-5 ">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <img src={imagen} className="img-fluid" alt={"Imagen"} />
                        <div className="card-body">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompChildren