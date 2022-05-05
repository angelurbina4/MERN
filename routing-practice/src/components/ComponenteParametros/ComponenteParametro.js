import React from "react";
import { useParams } from "react-router-dom";

const ComponenteParametro = () => {

    const {palabra, color, bg} = useParams();

    return(
        <div className="container">
            {
                isNaN(palabra) &&
                <p style={
                    color ?
                    {color: color, backgroundColor: bg}
                    : null
                }>
                    
                    La palabra es : {palabra}
                    

                </p>
                
            }
            {
                !isNaN(palabra) &&
                <p style={
                    color ?
                    {color: color, backgroundColor: bg}
                    : null
                }>
                    
                    El numero es : {palabra}
                    

                </p>
            }
        </div>
    )
}

export default ComponenteParametro;