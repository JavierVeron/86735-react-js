/* const arrayTareas = ["Levantarme de la cama", "Desayunar", "Ir al Trabajo", "Trabajar", "Almorzar", "Pagar la sucripción de OF"];
const arrayTareasProgramacion = ["Desarrollo Web", "JavaScript", "React JS"];

const ListaTareas = ({tareas}) => {
    return (
        <ul className="list-group my-5">
            {
                tareas.map(item => (
                    <Tarea key={item} nombre={item} />
                ))
            }
        </ul>
    )
}

const Tarea = ({nombre}) => {
    return (
        <li className="list-group-item list-group-item-action">{nombre}</li>
    )
}

const RenderProps = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <h1>Render Props</h1>
                    <ListaTareas tareas={arrayTareas} />
                    <ListaTareas tareas={arrayTareasProgramacion} />
                </div>
            </div>
        </div>
    )
} */

import { useState } from "react"

const tasks = [
    {id:1, nombre:"Desayunar", estado:"completado"},
    {id:2, nombre:"Ir a Trabajar", estado:"completado"},
    {id:3, nombre:"Trabajar", estado:"completado"},
    {id:4, nombre:"Almorzar", estado:"noCompletado"},
    {id:5, nombre:"Merendar", estado:"noCompletado"},
    {id:6, nombre:"Cenar", estado:"noCompletado"}
]

const TasksList = ({tasks}) => {
    return (
        <ul className="list-group">
            {
                tasks.map(item => (
                    <li key={item.id} className="list-group-item list-group-item-action">{item.nombre}</li>
                ))
            }
        </ul>
    )
}

const Filter = ({children}) => {
    const [filterState, setFilterState] = useState("all");

    const handlerFilterState = (event) => {
        setFilterState(event.target.value);
    }

    return children(filterState, handlerFilterState);
}

const RenderProps = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <h1>Render Props</h1>
                    {/* <ListaTareas tareas={arrayTareas} />
                    <ListaTareas tareas={arrayTareasProgramacion} /> */}
                    <Filter>
                        {(filterState, handlerFilterState) => (
                            <>
                                <div className="row my-5">
                                    <select className="form-select" value={filterState} onChange={handlerFilterState}>
                                        <option value="all">Todos</option>
                                        <option value="completado">Completados</option>
                                        <option value="noCompletado">No Completados</option>
                                    </select>
                                </div>
                                <div className="row">
                                    <TasksList tasks={filterState == "all" ? tasks : tasks.filter(item => item.estado == filterState)} />
                                </div>
                            </>
                        )}
                    </Filter>
                </div>
            </div>
        </div>
    )
}

export default RenderProps