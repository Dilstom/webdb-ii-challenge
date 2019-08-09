const express = require('express');
const carsDb = require('../data/db_config.js');

const router = express.Router();

router.get('/', async (req, res) => {
 try {
  const cars = await carsDb('cars');
  res.status(200).json(cars);
 } catch (err) {
  res.status(500).json({ message: 'Failed to retrieve cars' });
 }
});

router.post('/', async (req, res) => {
 try {
 } catch (err) {}
});

module.exports = router;
