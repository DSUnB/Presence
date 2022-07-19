'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Efetua extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Efetua.init({
    idChamada: DataTypes.INTEGER,
    codigoTurma: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Efetua',
  });
  return Efetua;
};