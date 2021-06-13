module.exports = (sequelize, DataTypes) => {
  const Venue = sequelize.define('Venue', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    }
  })

  Venue.associate = (models) => {
    Venue.hasOne(models.Address, {
      defaultValue: null,
      allowNull: true,
      onDelete: 'CASCADE',
      foreignKey: 'VenueId',
      SourceKey: 'id'
    })

    Venue.hasOne(models.Hotspot, {
      allowNull: false,
      onDelete: 'CASCADE',
      foreignKey: 'VenueId',
      SourceKey: 'id'
    })

    Venue.hasMany(models.CheckInHistory, {
      allowNull: false,
      foreignKey: 'VenueId',
      SourceKey: 'id'
    })
  }

  return Venue
}
