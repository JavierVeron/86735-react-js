import React from "react";

// Componente Normal
/* const Memo = ({item}) => {
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
                    </div>
                </div>
            </div>
        </div>
    )
} */

// Componente con Memo
const Memo = React.memo(({item}) => {
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
                    </div>
                </div>
            </div>
        </div>
    )
}, (oldProp, newProp) => oldProp.item.fechaModificacion == newProp.item.fechaModificacion);


export default Memo