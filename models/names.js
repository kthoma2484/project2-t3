module.exports = function(sequelize, DataTypes) {
  var Names = sequelize.define("Names", {
    name: DataTypes.STRING,
    year: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    count: DataTypes.INTEGER,
  },
  {
    timestamps: false
  }); 
  return Names;
};
