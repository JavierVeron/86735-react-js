import { useEffect, useState } from "react"
import CompUseEffect2 from "./CompUseEffect2";

const CompUseEffect = () => {
    const [contador1, setContador1] = useState(1);
    const [contador2, setContador2] = useState(1);
    const [visible, setVisible] = useState(true);

    // Opción #1 => Sin dependencias (solo se va a ejecutar la primera vez que se monte el componente)
    /* useEffect(() => {
        console.log("2- Actualización del Componente");
    }, []) */

    // Opción #2 => Con alguna dependencia (solo se va a ejecutar cuando detecte algún cambio en el estado que pasemos como dependencia)
    /* useEffect(() => {
        console.log("2- Actualización del Componente (Contador #1)");
    }, [contador1])

    useEffect(() => {
        console.log("2- Actualización del Componente (Contador #2)");
    }, [contador2]) */

    /* useEffect(() => {
        console.log("2- Actualización del Componente (Contador #1 o #2)");
    }, [contador1, contador2]) */

    // Opción 3 => Sin dependecias (está atento a cualquier cambio de todos los estados/props de mi app)
    useEffect(() => {
        console.log("2- Actualización del Componente!");
    })

    const aumentarContador1 = () => {
        setContador1(contador1 + 1);
    }

    const aumentarContador2 = () => {
        setContador2(contador2 + 1);
    }

    const desmontarComponente2 = () => {
        setVisible(false);
    }

    console.log("1- Montaje del Componente");
    
    return (
        <div className="container my-5">
            <div className="row my-3">
                <div className="col">
                    <h2>Contador #1: {contador1}</h2>
                    <button className="btn btn-primary" onClick={aumentarContador1}>Click en Contador #1</button>
                </div>
            </div>
            <div className="row my-3">
                <div className="col">
                    <h2>Contador #2: {contador2}</h2>
                    <button className="btn btn-primary" onClick={aumentarContador2}>Click en Contador #2</button>
                </div>
            </div>
            {visible ? <CompUseEffect2 /> : ""}
            <button className="btn btn-primary" onClick={desmontarComponente2}>Desmontar Componente #2</button>
        </div>
    )
}

export default CompUseEffect