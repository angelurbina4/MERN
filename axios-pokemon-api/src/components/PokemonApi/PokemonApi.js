import React, {useEffect, useState} from "react";
import axios from "axios";

const PokemonApi = () => {

    const [pokemons, setPokemons] = useState([]);
    const [state, setState] = useState(false);

    useEffect( () => {
        console.log("useEffect");
        axios.get("https://pokeapi.co/api/v2/pokemon")
            .then(response => {
                setPokemons(response.data.results);
            })
    }, [state]);
    
    const handleClick = () => {
        setState(!state);
    }

    return (
        <div className="container text-align-center">
        <button className="btn btn-primary" onClick={handleClick}>Fetch Pokemon</button>
            <ul>
                {   
                    state &&
                    pokemons.map((item, index) => (
                        <li key={index}>{item.name}</li>
                    ))
                }
                
            </ul>
        </div>
    )
}

export default PokemonApi;