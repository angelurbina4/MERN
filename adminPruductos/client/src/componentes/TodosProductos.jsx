import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const TodosProductos = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/productos")
            .then( res => {
                setProductos(res.data);
            })
            .catch( err => {
                console.log(err);
            });
    }, [])

    const borrarProducto = idProd => {
        axios.delete("http://localhost:8000/api/productos/"+idProd)
        .then(res => {
            //Actualizar lista con FILTER
            let nuevaLista = productos.filter(producto => producto._id !== idProd);
            setProductos(nuevaLista);
        })
        .catch( err => {
            console.log(err);
        });
    }
    
    return(
        <div className="container">
            <h1>Todos los productos</h1>
            <Link className="btn btn-success" to="/nuevo">Nuevo Producto</Link>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Descripcion</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productos.map((producto, index) => (
                            <tr key={index}>
                                <td>{producto.nombre}</td>
                                <td>{producto.precio}</td>
                                <td>{producto.descripcion}</td>
                                <td className="row justify-content-around">
                                    <Link className="btn btn-primary" to={`/producto/${producto._id}`}>Detalle</Link>
                                <br/>
                                    <Link className="btn btn-warning" to={`/producto/editar/${producto._id}`}>Editar</Link>
                                <br/>
                                <button className="btn btn-danger" onClick={() => borrarProducto(producto._id)}>Eliminar</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TodosProductos;