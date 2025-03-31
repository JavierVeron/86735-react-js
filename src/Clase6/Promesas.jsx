import { useState } from "react";

const Promesas = () => {
    const [resultadoPromesaOk, setResultadoPromesaOk] = useState("");
    const [resultadoPromesaError, setResultadoPromesaError] = useState("");

    // La Promesa queda pendiente...
    /* const promesa = new Promise((resolve, reject) => {
        console.log("Ejecutando promesa...");
    }) */

    // Promesa que se completa
    /* const promesa = new Promise((resolve, reject) => {
        console.log("Ejecutando promesa...");

        resolve("Nos vemos el sábado 21hs!");
    }) */

    // Promesa que se rechaza
    const promesa = new Promise((resolve, reject) => {
        console.log("Ejecutando promesa...");
        const numeroAletorio = Math.round(Math.random());

        if (numeroAletorio) {
            resolve("Nos vemos el sábado 21hs!");
        } else {
            reject("No, no puedo vernos este sábado!");
        }
    })

    /* promesa.then((resultado) => {
        console.log(resultado);
        setResultadoPromesaOk(resultado);
    }, error => {
        console.log(error);
    }) */
    promesa.then((resultado) => {
        //console.log(resultado);
        setResultadoPromesaOk(resultado);
        setResultadoPromesaError("");
    })
    .catch((resultado) => {
        //console.log(resultado);
        setResultadoPromesaOk("");
        setResultadoPromesaError(resultado);
    })
    .finally(() => {
        console.log("Proceso terminado!");
    })
    
    
    
    
    
    
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <h1>Promesas</h1>
                    <div>{resultadoPromesaOk ? <div className="alert alert-success" role="alert">{resultadoPromesaOk}</div> : ""}</div>
                    <div>{resultadoPromesaError ? <div className="alert alert-danger" role="alert">{resultadoPromesaError}</div> : ""}</div>
                </div>
            </div>
        </div>
    )
}

export default Promesas