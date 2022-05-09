import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ApiWalkerId = () => {

    const [resultApi, setResultApi] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response =>{
                console.log(response.data)
                setResultApi(response.data)
            }).catch(err => {
                console.log(err);
            })
    }, []);

    return(
        <div>
            {resultApi.name && <h2>{resultApi.name}</h2>}
        </div>
    )
}

export default ApiWalkerId;