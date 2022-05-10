const express = require("express");
const cors = require("cors");
const autorRoutes = require("./server/routes/autor.routes");
const app = express();

//Para usar json y obtener datos de URL
app.use( express.json(), express.urlencoded({extended: true}) );

//Permitir accesar desde origen distinto
app.use(
    cors( {
        origin: "http://localhost:3000"
    })
)

//inicializamos DB
require("./server/config/mongoose.config");

//importamos rutas
const misRutas =require("./server/routes/autor.routes");
misRutas(app);

//ejecutamos server
app.listen(8000, () => console.log("servidor listo!"));