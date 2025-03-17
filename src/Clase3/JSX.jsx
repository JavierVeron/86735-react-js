const JSX = () => {
    // JSX
    let texto = "Hola a Todos!!!!!!"
    let precio = 2000;
    // let edad = 19
    let sexo = "m"

    const estilo = {
        color: "white",
        backgroundColor: "black",
        padding:"20px",
        marginBbottom:"20px"
    }

    const saludar = () => {
        alert("Hola Mundo!")
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    {/* <p>{edad > 18 ? "Sos mayor de edad" : "Sos menor de edad"}</p> */}
                    <p className="display-4">{texto.toUpperCase()} <span className="display-3">${precio * 3}</span></p>
                    <p style={estilo}>Estamos cursando Javacript</p>
                    <p style={{color:"yellow", backgroundColor:"#000000", fontWeight:"bold", padding:"20px"}}>Estamos cursando Javacript</p>
                    <p className="estiloRosa">Estamos cursando Javacript</p>
                    <p className="estiloRosa">Estamos cursando Javacript</p>
                    <hr />
                    <p className="p-3 mb-2 bg-primary-subtle text-primary-emphasis">Estamos cursando Javacript</p>
                    <p className={`p-3 mb-2 ${(sexo == "m") ? "bg-info-subtle" : "bg-danger-subtle"} text-primary-emphasis`}>Estamos cursando Javacript</p>
                    <p><button className="btn btn-primary" onClick={saludar}>Hacer Click</button></p>

                </div>
            </div>
        </div>
    )
}

export default JSX