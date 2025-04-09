const Caja = (props) => {
    return (
        <>
            <p className="fw-light">{props.modalidad}</p>
            <h2>{props.titulo}</h2>
            <div className="my-5 p-5 bg-light">
                {props.children}
            </div>
        </>
    )
}

const Boton = ({texto}) => {
    return (
        <button className="btn btn-warning">{texto}</button>
    )
} 

const Children = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <h1>Children Prop</h1>
                    <Caja modalidad={"CoderCamp IA"} titulo={"Curso de IA"}>
                        <p>Aprendé lo último en IA  y tecnología con clases online en vivo</p>
                        <p className="bg-dark p-5"><Boton texto={"Inscribirme ahora"}></Boton></p>
                        <p style={{backgroundColor:"#333333", padding:"5px"}}><Boton texto={"Inscribirme ya!"}></Boton></p>
                    </Caja>
                </div>
            </div>
        </div>
    )
}

export default Children