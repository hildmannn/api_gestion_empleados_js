const db = require('../models');

exports.getEmployees = async (req, res) => {
  try {
    const employees = await db.Employee.findAll();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
