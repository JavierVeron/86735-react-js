const Titulo = ({texto}) => {
    return (
        <h1 className="display-5">{texto}</h1>
    )
}

const Item = ({valor}) => {
    return (
        <li className="list-group-item">{valor}</li>
    )
}

const Item2 = ({valor}) => {
    return (
        <li>{valor}</li>
    )
}

const CompPresentacion = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <Titulo texto="Componentes de Presentación" />
                    <ul className="list-group">
                        <Item valor="Té" />
                        <Item valor="Café" />
                        <Item valor="Mate" />
                        <Item valor="Chocolatada" />
                        <Item valor="Capuccino" />
                    </ul>
                    <ul>
                        <Item2 valor="Té" />
                        <Item2 valor="Café" />
                        <Item2 valor="Mate" />
                        <Item2 valor="Chocolatada" />
                        <Item2 valor="Capuccino" />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CompPresentacion