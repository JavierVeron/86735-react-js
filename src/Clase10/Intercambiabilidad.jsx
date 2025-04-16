const InputCount = ({onConfirm, maxQuantity}) => {
    return (
        <input type="text" className="form-control" value={maxQuantity} onChange={onConfirm} onClick={onConfirm} />
    )
}

const ButtonCount = ({onConfirm, maxQuantity}) => {
    return (
        <button className="btn btn-primary" onClick={onConfirm}>{maxQuantity}</button>
    )
}

const ItemDetail = ({item, inputType="button"}) => {
    const Count = inputType == "input" ? InputCount : ButtonCount;

    const addToCart = (quantity) => {
        if (quantity <= item.stock) {
            console.log("Agregaste el Producto #" + item.id + " con " + quantity + " items.");
        }
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <Count onConfirm={() => {addToCart(item.quantity)}} maxQuantity={item.stock} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail