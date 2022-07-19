'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chamada extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Chamada.hasMany(models.realizarChamada);
      Chamada.hasMany(models.responderChamada);
    }
  }
  Chamada.init({
    idChamada: DataTypes.INTEGER,
    codigoChamada: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Chamada',
  });
  return Chamada;
};