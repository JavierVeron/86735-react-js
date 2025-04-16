import { useEffect, useState } from "react"

const Texto = () => {
    const redimesionar = () => {
        console.log("Redimensionaste la ventana del navegador!");
    }

    // Agregando Eventos
    window.addEventListener("resize", redimesionar);

    useEffect(() => {
        return () => {
            console.log("Se desmontó (o quitó) el Componente Texto!");
            // Quitando Eventos
            window.removeEventListener("resize", redimesionar);
        }
    }, [])

    return (
        <h2 className="fw-light">Curso de React JS</h2>
    )
}

const Eventos = () => {
    const [visible, setVisible] = useState(true);
    const [texto, setTexto] = useState("");

    /* const saludar = () => {
        alert("Hola a Todos!")
    } */

    /* window.addEventListener("click", () => {
        console.log("Hiciste un click en la ventana del navegador!");
    }); */

    /* const ocultarComponente = () => {
        setVisible(false);
    } */

    /* const capturarEvento = (e) => {
        e.preventDefault(); // Detener un Evento
        e.stopPropagation(); // Detiene la propagación de Eventos
        console.log(e.nativeEvent);
    } */

    const capturarTecla = (e) => {        
        let letraIngresada = e.nativeEvent.data;
        console.log(letraIngresada);
        const vocales = ["a", "e", "i", "o", "u"];

        if (!vocales.some(item => item == letraIngresada.toLowerCase())) {
            setTexto(texto + letraIngresada);
        }
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <h1>Eventos</h1>
                    {/* <button className="btn btn-primary" onClick={() => {alert("Hola a Todos!!!!")}}>Hacer Click</button> */}
                    {/* {visible ? <Texto /> : ""}
                    <button className="btn btn-primary" onClick={ocultarComponente}>Ocultar Componente</button> */}
                    {/* <form>
                        <button type="submit" className="btn btn-primary" onClick={capturarEvento}>Capturar Evento</button>
                    </form>
                    <input type="text" className="form-control my-3" onInput={(e) => {capturarEvento(e)}} /> */}
                    <h3>Desafío</h3>
                    <input type="text" className="form-control my-3" value={texto} onChange={(e) => {capturarTecla(e)}} />
                </div>
            </div>
        </div>
    )
}

export default Eventos