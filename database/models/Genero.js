module.exports = (sequelize, DataTypes) => {
    const alias = "Genero";
  
    const cols = {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      }
    };
  
    const config = {
      tableName: "Generos",
      timestamps: false,
    };
  
    const Genero = sequelize.define(alias, cols, config);

    Genero.associate = function(models) {
      Genero.hasMany(models.Cancion, {
        as: "CancionesGenero",
        foreignKey: "genero_id"
      })
    }
  
    return Genero;
  };