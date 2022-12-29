const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      task.belongsTo(models.user,{foreignKey:"userId"})
      // task.belongsToMany(models.user,{through:"usertask", foreignKey: 'taskId',
      // otherKey: 'userId'})

    }
  }
  task.init({
    taskName: DataTypes.STRING,
    taskType: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'task',
  });
  return task;
};