'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ResponderChamada extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ResponderChamada.init({
    idResponderChamada: DataTypes.INTEGER,
    idAluno: DataTypes.INTEGER,
    idChamada: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'RespoResponderChamadande',
  });
  return ReResponderChamadaponde;
};