module.exports = (sequelize, DataTypes) =>
  sequelize.define('Patients', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null
    },
    recovered: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      required: true
    }
  })
