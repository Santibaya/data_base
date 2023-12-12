module.exports = (sequelize, DataTypes) => {
    const alias = "Cancion";
  
    const cols = {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      titulo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      duracion: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      genero_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      album_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      artista_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    };
  
    const config = {
      tableName: "Canciones",
      timestamps: false,
    };
  
    const Cancion = sequelize.define(alias, cols, config);

    Cancion.associate = function(models) {
      Cancion.belongsTo(models.Genero, {
        as: "CancionesGenero",
        foreignKey: "genero_id"
      })
    }

    Cancion.associate = function(models) {
      Cancion.belongsTo(models.Artista, {
        as: "cancionesArtista",
        foreignKey: "artista_id"
      })
    }

    Cancion.associate = function(models) {
      Cancion.belongsTo(models.Album, {
        as: "cancionesAlbum",
        foreignKey: "album_id"
      })
    }
  
  
    return Cancion;
  };