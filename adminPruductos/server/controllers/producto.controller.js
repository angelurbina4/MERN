const Producto = require("../models/producto.model"); //importamos desde models

module.exports.create_product = (req, res) => {
    //creamos un producto del req, pero en el body
    Producto.create(req.body)
        .then( producto => res.json(producto) )
        .catch(err => res.status(400).json(err) );
}

//Creamos una funcion que regrese todos los productos
module.exports.get_all = (req, res) => {
    Producto.find()
        .then(productos => res.json(productos))
        .catch(err => res.json({message: "Hubo un error"+err}));
}

//conseguir solo uno por el url y el id >>>> depues agregar la ruta al route
module.exports.get_product = (req, res) => {
    Producto.findOne({_id: req.params.id})
        .then(producto => res.json(producto))
        .catch(err => res.json({message: "Hubo un error"+err}));
}

//Actualizar y modificar registro (formulario completo en este caso)
module.exports.update_product = (req, res) => {
    Producto.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators:true}) //para que vaya de nuevo a las validaciones del modelo
        .then(producto => res.json(producto))
        .catch(err => res.status(400).json(err) );
}

//Elimina un producto
module.exports.delete_product = (req, res) => {
    Producto.deleteOne({_id: req.params.id})
        .then(result => res.json(result))
        .catch(err => res.json({message: "Hubo un error "+err}));
}