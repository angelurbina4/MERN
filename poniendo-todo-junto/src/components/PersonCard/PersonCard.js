import React from "react";

class PersonCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            age: props.age
        }
    }

    brithday= () => {
        this.setState({ age : parseInt(this.state.age)+1 });
    }


    render(){
        const {first_name, last_name, age, hairColor} = this.props
        return(
            <div className ="card col-3 justify-content-center">
                <h1> {first_name} {last_name} </h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={ this.brithday } >Birthday Button</button>
            </div>
        );
    }

}

export default PersonCard;