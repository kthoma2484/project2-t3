module.exports = function(sequelize, DataTypes) {
  let Names = sequelize.define("Names", {
    name:DataTypes.STRING,

    year:DataTypes.INTEGER,

    gender:DataTypes.STRING,
    
    count:DataTypes.INTEGER
   
  });
  return Names;
};