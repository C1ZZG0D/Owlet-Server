module.exports = function(sequelize, DataTypes){
  return sequelize.define('movie', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contentrating: {
      type: DataTypes.STRING,
      allowNull: false
    },
    runtime: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.MEDIUMTEXT,
      allowNull: false
    },
  })
}