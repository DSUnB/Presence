'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chamadas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Chamadas.init({
    idChamada: DataTypes.INTEGER,
    codigoChamada: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Chamada',
  });
  return Chamadas;
};