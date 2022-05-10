const mongoose = require("mongoose");

const EsquemaProducto = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "Nombre obligatorio."],
        minlength: [2, "Nombre debe tener al menos 2 caracteres."]
    },
    precio: Number,
    descripcion: {
        type: String,
        required: [true, "Descripcion obligatoria."],
        minlength: [5, "Descripcion debe tener al menos 5 caracteres."]
    },
    //Timestamps: Creando campos created_at y updated_at
    //VersionKey false : eliminamos el atributo _v
}, {timestamps: true, versionKey: false}); 

// productos es el nombre de la coleccion! 
const Producto = mongoose.model("productos", EsquemaProducto);

module.exports = Producto;