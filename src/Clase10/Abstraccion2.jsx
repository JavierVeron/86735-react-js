import { useState } from "react"

const Select = ({option, options, optionSelected}) => {
    return (
        <>
        {
            options.map(item => (
                <div key={item.id} className="form-check">
                    <input type="radio" name="color" className="form-check-input" id={item.id} value={item.id} checked={option === item.id} onChange={() => {optionSelected(item.id)}} />
                    <label className="form-check-label">{item.texto}</label>
                </div>
            ))
        }
        </>
    )
}

const Abstraccion2 = () => {
    const [option, setOption] = useState(1);
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
                    <h1>Abstracción #2</h1>
                    <Select option={option} options={options} optionSelected={optionSelected} />
                    <p>Opción seleccionada: <b>{option}</b></p>
                </div>
            </div>
        </div>
    )
}

export default Abstraccion2