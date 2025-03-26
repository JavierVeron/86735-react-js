import { useEffect } from "react";

const CompUseEffect2 = () => {
    console.log("Montaje del Componente #2");

    useEffect(() => {
        console.log("2- Actualización del Componente #2");

        return () => {
            console.log("3- Desmontaje del Componente #2");
        }
    })

    return (
        <h2>Componente UseEffect #2</h2>
    )
}

export default CompUseEffect2