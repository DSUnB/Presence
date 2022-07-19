'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Realiza extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Realiza.belongsTo(models.professores);
      Realiza.belongsTo(models.chamadas);
    }
  }
  Realiza.init({
    idChamada: DataTypes.INTEGER,
    idProfessor: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Realiza',
  });
  return Realiza;
};