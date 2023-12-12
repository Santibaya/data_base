const express = require("express");
const router = express.Router();
const controllerMain = require("../controllers/mainController");

//listado de canciones
router.get("/canciones", controllerMain.listado);

//nuevo registro
router.post("/canciones", controllerMain.postCancion);

//mostrar cancion
router.get("/canciones/:id", controllerMain.cancion);

//editar cancion
router.put("/canciones/:id", controllerMain.editCancion);

//eliminar cancion
router.delete("/canciones/:id", controllerMain.deleteCancion);

//listado de todos los generos
router.get("/generos", controllerMain.listadoGenero);
module.exports = router;