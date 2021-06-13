const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  const Hotspot = sequelize.define('Hotspot', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    // checkInCode: DataTypes.INTEGER,
    case: DataTypes.INTEGER,
    startDate: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW()
    }
  })

  Hotspot.associate = (models) => {
    Hotspot.belongsTo(models.Venue, {
      foreignKey: {
        allowNull: false,
        unique: true
      }
      // sourceKey: 'checkInCode',
      // targetKey: 'id'
    })
  }

  return Hotspot
}
