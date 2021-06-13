const Sequelize = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  const CheckInHistory = sequelize.define('CheckInHistory', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    checkInCode: {
      type: DataTypes.INTEGER,
      required: true,
      allowNull: false
    },
    username: {
      type: DataTypes.INTEGER,
      required: true,
      allowNull: false
    },
    address: DataTypes.STRING,
    checkInTime: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW()
    }
  })

  CheckInHistory.associate = (models) => {
    CheckInHistory.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    })

    CheckInHistory.belongsTo(models.Venue, {
      foreignKey: {
        allowNull: false
      }
    })
  }

  return CheckInHistory
}
