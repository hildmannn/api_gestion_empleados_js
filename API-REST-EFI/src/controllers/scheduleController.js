const db = require('../models');

exports.getAllSchedules = async (req, res) => {
  try {
    const schedules = await db.Schedule.findAll();
    res.json(schedules);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createSchedule = async (req, res) => {
  try {
    const { fecha, hora_inicio, hora_fin, id_empleado } = req.body;
    const schedule = await db.Schedule.create({ fecha, hora_inicio, hora_fin, id_empleado });
    res.status(201).json(schedule);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
