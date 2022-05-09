import React,  { useState } from "react";
import axios from "axios";

const ApiWalker = () => {

    const [recursos, setRecursos] = useState([
        {
            category: "Select one"
        },
        {
            category: "people"
        },
        {
            category: "films"
        },
        {
            category: "starships"
        },
        {
            category: "species"
        },
        {
            category: "planets"
        }
        
    ]);
    const [recurso, setRecurso] = useState("");
    const [id, setId] =useState(0);
    const [resultApi, setResultApi] = useState([]);
    const [homeworld, setHomeWorld] = useState([]);
    const [valid, setValid] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Formulario");

        let url = "https://swapi.dev/api/";

        if(id !== "" && id >0 && recurso !== undefined && id !== undefined){
            url += recurso +"/"+ id;
            console.log(url);

            axios.get(url)
                .then(response =>{
                    console.log(response.data)
                    setResultApi(response.data)
                    console.log(resultApi);
                    setValid(false);
                    if(recurso == "people"){
                        axios.get(response.data.homeworld)
                        .then(response =>{
                            console.log(response.data)
                            setHomeWorld(response.data)
                        })
                    }
                }).catch(err => {
                    console.log(err);
                    setValid(true);
                })
        }else{
            setValid(true);
        }

        
        
    }

    return(
        <div>
            <h1>Hola mundo!</h1>
            <form onSubmit={ (e) => handleSubmit(e) } className="align-items-center row "> 
                <div className='form-group col-6'>
                    <label>Category:</label>
                    <select className="form-control" onChange={(e) => setRecurso(e.target.value)}>
                    {
                        recursos.map((item, index) => {
                            return (
                                <option key={index} value={item.category} defaultChecked>{item.category}</option>
                            )
                        })
                    }
                    </select>
                </div>
                <div className='form-group col-4'>
                    <label>Id</label>
                    <input type={"number"} className="form-control" onChange={(e) => setId(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Search</button>
            </form>

            <div>
                {resultApi.name && <h2>{resultApi.name}</h2>}
				{resultApi.height && <p>Height: {resultApi.height}</p>}
				{resultApi.hair_color && <p>Hair color: {resultApi.hair_color}</p>}
				{resultApi.eye_color && <p>Eye color: {resultApi.eye_color}</p>}
				{resultApi.gender && <p>Gender: {resultApi.gender}</p>}
                {homeworld.name && <p>Homeworld: {homeworld.name}</p>}
				{resultApi.title && <h1>{resultApi.title}</h1>}
				{resultApi.director && <p>Director: {resultApi.director}</p>}
				{resultApi.producer && <p>Producer: {resultApi.producer}</p>}
				{resultApi.release_date && <p>Release date: {resultApi.release_date}</p>}
				{resultApi.opening_crawl && <p>Opening: {resultApi.opening_crawl}</p>}
				{resultApi.manufacturer && <p>Manufacturer: {resultApi.manufacturer}</p>}
				{resultApi.passengers && <p>Passengers: {resultApi.passengers}</p>}
				{resultApi.cargo_capacity && <p>Cargo capacity: {resultApi.cargo_capacity}</p>}
				{resultApi.consumables && <p>Consumables: {resultApi.consumables}</p>}
				{resultApi.classification && <p>Classification: {resultApi.classification}</p>}
				{resultApi.designation && <p>Designation: {resultApi.designation}</p>}
				{resultApi.average_height && <p>Average height: {resultApi.average_height}</p>}
				{resultApi.average_lifespan && (<p>Average lifespan: {resultApi.average_lifespan}</p>)}
				{resultApi.rotation_period && (<p>Rotation period: {resultApi.rotation_period}</p>)}
				{resultApi.terrain && <p>Terrain: {resultApi.terrain}</p>}
				{resultApi.climate && <p>Climate: {resultApi.climate}</p>}
				{resultApi.population && <p>Population: {resultApi.population}</p>}
                {valid && <div>
                            <img src="https://i.pinimg.com/564x/e2/da/87/e2da87612f0ed3dfa45abb77d46ebdb5.jpg" alt="Obi Wan Kenobi" />
                            <h2>"Estos no son los droides que está buscando"</h2>
                        </div>}
            </div>
            
        </div>
    );

}

export default ApiWalker;

