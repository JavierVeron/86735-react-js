// Opción #1 => Recibiendo un objeto, acceder a las propiedades de ese objeto
/* const Props = (props) => {
    console.log(props);

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>{props.academia}</h1>
                    <h3>{props.curso}</h3>
                    <p>Duración: {props.duracion} meses</p>
                </div>
            </div>
        </div>
    )
} */

import ParentComponent from "./ParentComponent"

// Opción #2 => Desestructurar un objeto
const Props = ({academia, curso, duracion, alumno}) => {
    // Desestructuring o Desestructurar un Objeto
    //let bebida = {id:1, nombre:"Coca Cola"};
    //let {nombre} = bebida;
    //console.log(nombre);

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <h1>Propiedades (Props)</h1>
                    <h1>{academia}</h1>
                    <h3>{curso}</h3>
                    <p>Duración: {duracion} meses</p>
                    <ParentComponent texto={alumno} />
                </div>
            </div>
        </div>
    )
}

export default Props