'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RefreshToken extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      RefreshToken.belongsTo(model.User, {
        forignKey: 'userId',
        targetKey: 'id'
      })
    }
  }
  RefreshToken.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ua: DataTypes.STRING,
    fingerprint: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'RefreshToken',
    timestamps: true,
  });
  return RefreshToken;
};