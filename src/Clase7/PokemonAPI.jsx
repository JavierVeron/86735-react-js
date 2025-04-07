import { useEffect, useState } from "react"

const PokemonAPI = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setItems(data.results);
        })
    }, [])    

    return (
        <div className="container my-5">
            <div className="row">
                <h1>Pokemon API</h1>
                <ul className="list-group">
                    {
                        items.map(item => (
                            <li key={item.name} className="list-group-item">
                                <a href={item.url} target="_blank">{item.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default PokemonAPI