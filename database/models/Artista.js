module.exports = (sequelize, DataTypes) => {
    const alias = "Artista";
  
    const cols = {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING,
      },
      apellido: {
        type: DataTypes.STRING,
      }
    };
  
    const config = {
      tableName: "Artistas",
      timestamps: false,
    };
  
    const Artista = sequelize.define(alias, cols, config);

    /* Artista.associate = function(models) {
      Artista.belongsToMany(models.Cancion, {
        as: "cancionesArtista",
        foreignKey: "artista_id"
      })
    } */
  
    return Artista;
  };