import {Link} from "react-router-dom";

const Error = () => {
    return(
        <div>
            <h4>No encontramos el autor, intenta crearlo</h4>
            <Link to="/nuevo" className="btn btn-success">Crea un nuevo autor</Link>
        </div>
    )
}

export default Error;