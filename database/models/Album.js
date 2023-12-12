module.exports = (sequelize, DataTypes) => {
    const alias = "Album";
  
    const cols = {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING,
      },
      duracion: {
        type: DataTypes.INTEGER,
      }
     
    };
  
    const config = {
      tableName: "Albumes",
      timestamps: false,
    };
  
    const Album = sequelize.define(alias, cols, config);

/*     Album.associate = function(models) {
      Album.hasMany(models.Cancion, {
        as: "cancionesAlbum",
        timestamps: false,
        foreignKey: "album_id"
      })
    } */
  
    return Album;
  };