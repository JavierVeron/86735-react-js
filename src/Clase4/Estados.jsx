import { useState } from "react"

const Estados = () => {
    let textoVar = "Hacé click aquí! (var)";
    const [textoBoton, setTextoBoton] = useState("Hacé click aquí! (state)");

    const modificarTextoVariable = () => {
        console.log("estoy acá #1");
        textoVar = "Gracias por hacer click! (var)";
        console.log(textoVar);
    }

    const modificarTextoEstado = () => {
        console.log("estoy acá #2");
        setTextoBoton("Gracias por hacer click! (state)");        
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <h1>Estados (States)</h1>
                    <button className="btn btn-primary mx-1" onClick={modificarTextoVariable}>{textoVar}</button>
                    <button className="btn btn-primary mx-1" onClick={modificarTextoEstado}>{textoBoton}</button>
                </div>
            </div>
        </div>
    )
}

export default Estados