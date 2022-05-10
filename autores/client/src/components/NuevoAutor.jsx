import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const NuevoAutor = () => {
    const [nombre, setNombre] = useState("");
    const [imagen, setImagen] = useState("");
    const [libros, setLibros] = useState(false);
    const [articulos, setArticulos] = useState(false);
    const [novelagrafica, setNovelagrafica] = useState(false);
    const [cuentos, setCuentos] = useState(false);

    const [errors, setErrors] = useState({});
    const history = useHistory();

    const guardarAutor = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/autores", {
            nombre,
            imagen,
            libros,
            novelagrafica,
            cuentos
        })
        .then(res => history.push("/"))
        .catch( err => {
            console.log(err.response.data.errors);
            setErrors(err.response.data.errors);
        });
    }

    return(
        <div>
            <h1>Nuevo Autor</h1>
            <form onSubmit={guardarAutor}>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input type={"text"} id="nombre" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} className="form-control" />
                    {errors.nombre ? <span className="text-danger">{errors.nombre.message}</span> : null}
                </div>
                <div className="form-group">
                    <label htmlFor="imagen">URL Imagen</label>
                    <input type={"text"} id="imagen" name="imagen" value={imagen} onChange={(e) => setImagen(e.target.value)} className="form-control"/>
                </div>
                <div className="form-check">
                    <input type={"checkbox"} className="form-check-input" id="libros" name="libros" checked={libros} onChange={ (e) => setLibros(e.target.checked) } />
                    <label className="form-check-label" htmlFor="libros" >Autor de libros</label>
                </div>
                <div className="form-check">
                    <input type={"checkbox"} className="form-check-input" id="articulos" name="articulos" checked={articulos} onChange={ (e) => setArticulos(e.target.checked) } />
                    <label className="form-check-label" htmlFor="articulos" >Autor de articulos</label>
                </div>
                <div className="form-check">
                    <input type={"checkbox"} className="form-check-input" id="novelagrafica" name="novelagrafica" checked={novelagrafica} onChange={ (e) => setNovelagrafica(e.target.checked) } />
                    <label className="form-check-label" htmlFor="novelagrafica" >Autor de novelagrafica</label>
                </div>
                <div className="form-check">
                    <input type={"checkbox"} className="form-check-input" id="cuentos" name="cuentos" checked={cuentos} onChange={ (e) => setCuentos(e.target.checked) } />
                    <label className="form-check-label" htmlFor="cuentos" >Autor de cuentos</label>
                </div>
                <div>
                    <br/>
                    <input type={"submit"} className="btn btn-primary" value={"Guardar"}/>
                </div>
            </form>
        </div>
    )

}

export default NuevoAutor;