const Item = ({item}) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="card border-0 shadow p-3 mb-5 bg-body-tertiary rounded">
                <img src={item.image} className="card-img-top" alt={item.title} />
                <div className="card-body text-center bg-white">
                    <p className="card-text">{item.title}</p>
                </div>
            </div>
        </div>
    )
}

export default Item