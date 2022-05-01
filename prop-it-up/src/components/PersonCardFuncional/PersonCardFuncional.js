import React from "react";

const PersonCardFuncional = ({first_name, last_name, age, hairColor}) => {

    return(
        <div className ="card col-3 justify-content-center">
            <h1> {first_name} {last_name} </h1>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
        </div>
    )

}

export default PersonCardFuncional;