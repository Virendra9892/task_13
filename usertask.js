const {
    Model
  } = require('sequelize');
  module.exports = (sequelize, DataTypes) => {
    class usertask extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
        // define association here
        // usertask.belongsTo(models.user, {
        //     foreignKey: 'userId'
        //   });
        //   usertask.belongsTo(models.task, {
        //     foreignKey: 'taskId'
        //   });
  
      }
    }
    usertask.init({
      userId: DataTypes.INTEGER,
      taskId: DataTypes.INTEGER
    }, {
      sequelize,
      modelName: 'usertask',
    });
    return usertask;
  };