import React, {useState} from "react";

const Formulario = () => {

    const [first_name, setFirst_name] = useState("");
    const [first_name_error, setFirst_name_error] = useState("");

    const [last_name, setLast_name] = useState("");
    const [last_name_error, setLast_name_error] = useState("");

    const [email, setEmail] = useState("");
    const [email_error, setEmail_error] = useState("");

    const [password, setPassword] = useState("");
    const [password_error, setPassword_error] = useState("");

    const [confirm_password, setConfirm_password] = useState("");
    const [confirm_password_error, setConfirm_password_error] = useState("");

    const handleFirst_name = (e) => {
        setFirst_name(e.target.value);
        e.target.value.length < 2 ? setFirst_name_error("The name must have at least two characters"): setFirst_name_error("");
    }

    const handleLast_name = (e) => {
        setLast_name(e.target.value);
        e.target.value.length < 2 ? setLast_name_error("The last name must have at least two characters") : setLast_name_error("");
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        e.target.value.length < 5 ? setEmail_error("The email must have at least five characters") : setEmail_error("");
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        e.target.value.length < 8 ? setPassword_error("The email must have at least eight characters") : setPassword_error("");
    }

    const handleConfirm_password = (e) => {
        setConfirm_password(e.target.value);
        password !== e.target.value ? setConfirm_password_error("Passwords don't match") : setConfirm_password_error("");
    }


    const createUser = (e) => {
        e.preventDefault();
    }

    return(

        <div className="container">
            <form onSubmit={createUser}>
            <h2>Crear Usuario</h2>
            <div className="form-group">
                <label htmlFor="nombre">First Name:</label>
                <input className="form-control" onChange={ handleFirst_name } value={first_name}/>
                {
                    first_name_error ?
                    <p style={{color: 'red'}}>{first_name_error}</p> :
                    ""
                }
            </div>
            <div className="form-group">
                <label>Last name: </label>
                <input className="form-control" onChange={ handleLast_name }  value={last_name} />
            </div>
            {
                last_name_error ?
                <p style={{color: 'red'}}>{last_name_error}</p> :
                ""
            }
            <div className="form-group">
                <label>Email:</label>
                <input className="form-control" type={"email"} onChange={ handleEmail } value={email} />
            </div>
            {
                email_error ?
                <p style={{color: 'red'}}>{email_error}</p> :
                ""
            }
            <div className="form-group">
                <label>Password:</label>
                <input className="form-control" type={"password"} onChange={ handlePassword } value={password} />
            </div>
            {
                password_error ?
                <p style={{color: 'red'}}>{password_error}</p> :
                ""
            }
            <div className="form-group">
                <label>Confirm Password:</label>
                <input className="form-control" type={"password"} onChange={ handleConfirm_password } value={confirm_password} />
            </div>
            {
                confirm_password_error ?
                <p style={{color: 'red'}}>{confirm_password_error}</p> :
                ""
            }
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