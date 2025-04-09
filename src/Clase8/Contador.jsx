import { useCounter } from "./useCounter";

const Contador = () => {
    const {count, decrement, increment, reset} = useCounter(1, 1, 10);

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <h1>Contador</h1>
                    <div className="btn-group" role="group">
                        <button type="button" className="btn btn-warning" onClick={decrement}>-</button>
                        <button type="button" className="btn btn-warning">{count}</button>
                        <button type="button" className="btn btn-warning" onClick={increment}>+</button>
                    </div>
                    <div className="btn-group mx-1" role="group">
                        <button type="button" className="btn btn-warning" onClick={reset}>Resetear</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contador