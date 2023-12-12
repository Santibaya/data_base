const path = require("path");
let db = require("../database/models")

const { Cancion, Genero } = require("../database/models");
const { Sequelize } = require("sequelize");

const controllerMain = {
    home: (req, res) => {
        res.send("Este es el home")
        
    },
    listado: async (req, res) => {
      try {
        const canciones = await Cancion.findAll();
        res.status(200).json(canciones);
      } catch (error) {
        console.error('Error al obtener el listado de canciones:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
      }
    },
    postCancion: async (req, res) => {
        try {
          const nuevaCancion = {
            titulo: req.body.titulo,
            album_id: req.body.album_id,
            duracion: req.body.duracion,
            artista_id: req.body.artista_id,
            genero_id: req.body.genero_id
          };
          nuevaCancion.created_at = new Date();
          const cancion = await Cancion.create(nuevaCancion); 
          res.status(200).json(cancion);
        } catch (error) {
          console.error('Error al crear una nueva canción:', error);
          res.status(500).json({ error: 'Error interno del servidor' });
        }
      },
    cancion: async (req, res) => {
            const id  = req.params.id;
        try {
            const resultado = await Cancion.findByPk(id);
            if (resultado) {
            res.json(resultado);
            } else {
            res.status(404).json({ error: 'Canción no encontrada' });
            }
        } catch (error) {
            console.error('Error al obtener la canción:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
    }
},
    editCancion: async (req, res) => {
        const id = req.params.id;
        try {
          const cancionEncontrada = await Cancion.findByPk(id)
          const datosActualizados = await Cancion.update(
            {
              titulo: req.body.titulo ? req.body.titulo : cancionEncontrada.titulo,
              album_id: req.body.album_id ? req.body.album_id : cancionEncontrada.album_id,
              duracion: req.body.duracion ? req.body.duracion : cancionEncontrada.duracion,
              artista_id: req.body.artista_id ? req.body.artista_id : cancionEncontrada.artista_id,
              genero_id: req.body.genero_id ? req.body.genero_id : cancionEncontrada.genero_id,
              updated_at: new Date()
            },{
              where: {
                id:id
              }
            }
          );
          const cancionActualizada = await Cancion.findByPk(id)
          console.log(datosActualizados)
          res.json(cancionActualizada)
        } catch (error) {
        console.error('Error al actualizar la canción:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
        }
    },
    deleteCancion: async (req, res) => {
        const id = req.params.id;
        const cancionAEliminar = await Cancion.findByPk(id);
        if (cancionAEliminar){
          try {
            await Cancion.destroy({where: {id}})
            res.status(200).json({mensaje: "cancion eliminada correctamente"})
          } catch (error) {
            console.log(error)
          }
        }else{
          res.json({mensaje:"la cancion con el id " + id + " no existe en la base de datos"})
        }
      },
      listadoGenero: async (req, res) => {
        try {
          const generos = await Genero.findAll({
            include: ["CancionesGenero"]
          });
          res.json(generos);
        } catch (error) {
          console.error('Error al obtener el listado de géneros:', error);
          res.status(500).json({ error: 'Error interno del servidor' });
        }
      }
}

module.exports = controllerMain;