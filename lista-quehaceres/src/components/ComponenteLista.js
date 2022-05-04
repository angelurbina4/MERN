import React, { useState } from "react";

const ComponenteLista = () => {

    const [tarea, setTarea] = useState("");
    const [lista, setLista] = useState([]);

    const addTarea = (e) => {
        e.preventDefault();

        if(tarea === "") return;

        setLista([...lista, {
            valor: tarea,
            estado: false
        }]);
        console.log(tarea);
        console.log(lista);

        setTarea("");
    }

    const cambioEstado = (indice) =>{

        const obj = {
            ...lista[indice]
        };

        obj.estado = !obj.estado;

        setLista([...lista.slice(0, indice), obj].concat(lista.slice( indice + 1 )));

    }

    const deleteTarea = (indice) => {
        setLista(lista.filter((_item, i) => i !== indice));
    }

    return(
        <div className="container">
            <form onSubmit={addTarea} >
                <div className="form-group">
                    <input className="form-control" onChange={(e) => setTarea( e.target.value )}value={tarea}/>
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
            <div>
                {
                    lista.map((item, i) => (
                        <div key={i}>
                            <span style={{textDecoration: item.estado && 'line-through'}}>{item.valor}</span>
                            <input type={"checkbox"} checked={item.estado} onClick={() => cambioEstado(i)} readOnly/>
                            <button onClick={() => deleteTarea(i) }>Delete</button>
                        </div>
                ))
                }
            </div>
        </div>
    )

}

export default ComponenteLista;