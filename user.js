const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.hasOne(models.task,{foreignKey:"userId"})
      // user.hasMany(models.task,{foreignKey:"userId"})
      // user.belongsToMany(models.task,{through:"usertask", foreignKey: 'userId',
      // otherKey: 'taskId'})
    }
  }
  user.init({
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: {
      type:DataTypes.BOOLEAN,
      defaultValue:true
    }
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};