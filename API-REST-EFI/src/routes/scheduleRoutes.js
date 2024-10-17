const express = require('express');
const router = express.Router();
const scheduleController = require('../controllers/scheduleController');

router.get('/schedules', scheduleController.getAllSchedules); // Obtener todos los horarios
router.post('/schedules', scheduleController.createSchedule); // Crear un horario

module.exports = router;
