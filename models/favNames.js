module.exports = function(sequelize, DataTypes) {
    var favNames = sequelize.define("favNames", {
      name: DataTypes.STRING,
      year: DataTypes.INTEGER,
      gender: DataTypes.STRING,
      count: DataTypes.INTEGER,
    },
    {
      timestamps: false
    }); 
    return favNames;
  };
  