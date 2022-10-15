'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Outputs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Outputs.belongsTo(models.User, { foreignKey: 'user_id',
     as: 'user'});
     Outputs.belongsTo(models.Item, { foreignKey: 'item_id',
     as: 'item'});
    }
  }
  Outputs.init({
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Outputs',
    tableName: 'outputs',
    paranoid: true
  });
  return Outputs;
};