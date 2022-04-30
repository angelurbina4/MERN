import React from "react";

class PersonCard extends React.Component {


    render(){
        const {first_name, last_name, age, hairColor} = this.props
        return(
            <div className ="card col-3 justify-content-center">
                <h1> {first_name} {last_name} </h1>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
            </div>
        );
    }

}

export default PersonCard;