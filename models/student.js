"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      student.belongsTo(models.lecturer, {
        as: "lecturer",
        foreignKey: "lecturer_id",
      });

      student.belongsToMany(models.course, {
        through: "studentcourses",
        as: "course",
        foreignKey: "student_id",
      });
    }
  }
  student.init(
    {
      fullname: DataTypes.STRING,
      nickname: DataTypes.STRING,
      lecturer_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "student",
    }
  );
  return student;
};
