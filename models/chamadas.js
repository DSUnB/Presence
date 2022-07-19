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
      // define association here
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