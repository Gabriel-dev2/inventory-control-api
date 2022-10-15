'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Entries extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Entries.belongsTo(models.User, { foreignKey: 'user_id',
     as: 'user'});
     Entries.belongsTo(models.Item, { foreignKey: 'item_id',
     as: 'item'});
     Entries.belongsTo(models.Provider, { foreignKey: 'provider_id',
     as: 'provider'});
    }
  }
  Entries.init({
    quantity: DataTypes.INTEGER,
    price: DataTypes.DECIMAL(10,2)
  }, {
    sequelize,
    modelName: 'Entries',
    tableName: 'entries'
  });
  return Entries;
};