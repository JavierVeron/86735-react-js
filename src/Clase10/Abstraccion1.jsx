import { useState } from "react"

const Select = ({option, options, optionSelected}) => {
    return (
        <select onChange={(e) => {optionSelected(e.target.value)}} defaultValue={option} >
            {
                options.map(item => (
                    <option key={item.id} className="form-select" value={item.id}>{item.texto}</option>
                ))
            }
        </select>
    )
}

const Abstraccion1 = () => {
    const [option, setOption] = useState(2);
    const options = [
        {id:1, texto:"Azul"},
        {id:2, texto:"Rojo"},
        {id:3, texto:"Rosa"}
    ]
    const optionSelected = (value) => {       
        setOption(value);
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <h1>Abstracción #1</h1>
                    <Select option={option} options={options} optionSelected={optionSelected} />
                    <p>Opción seleccionada: <b>{option}</b></p>
                </div>
            </div>
        </div>
    )
}

export default Abstraccion1