module.exports = (sequelize, DataTypes) => {
    const ScheduleRequest = sequelize.define('ScheduleRequest', {
      fecha_solicitada: { type: DataTypes.DATE, allowNull: false },
      nueva_hora_inicio: { type: DataTypes.TIME, allowNull: false },
      nueva_hora_fin: { type: DataTypes.TIME, allowNull: false },
      estado: { type: DataTypes.STRING, defaultValue: 'pendiente' },
      id_empleado: {
        type: DataTypes.INTEGER,
        references: { model: 'Employees', key: 'id' },
      },
    });
  
    return ScheduleRequest;
  };
  