import React, {useState} from "react";

const Formulario = () => {

    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm_password, setConfirm_password] = useState("");

    const createUser = (e) => {
        e.preventDefault();
    }

    return(

        <div className="container">
            <form onSubmit={createUser}>
            <h2>Crear Usuario</h2>
            <div className="form-group">
                <label htmlFor="nombre">First Name:</label>
                <input className="form-control" onChange={ (e) => setFirst_name(e.target.value) } value={first_name}/>
            </div>
            <div className="form-group">
                <label>Last name: </label>
                <input className="form-control" onChange={ (e) => setLast_name( e.target.value) }  value={last_name} />
            </div>
            <div className="form-group">
                <label>Email:</label>
                <input className="form-control" type={"email"} onChange={ (e) => setEmail( e.target.value) } value={email} />
            </div>
            <div className="form-group">
                <label>Password:</label>
                <input className="form-control" type={"password"} onChange={ (e) => setPassword( e.target.value) } value={password} />
            </div>
            <div className="form-group">
                <label>Confirm Password:</label>
                <input className="form-control" type={"password"} onChange={ (e) => setConfirm_password( e.target.value) } value={confirm_password} />
            </div>
            <input type={"submit"} className="btn btn-success" value="Crear Usuario"/>
        </form>
        <br/>
        <div>
            <h2>Your Form Data</h2>
            <p>Firts Name: {first_name}</p>
            <p>Last Name: {last_name}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirm_password}</p>
        </div>
        </div>


    );

}

export default Formulario;