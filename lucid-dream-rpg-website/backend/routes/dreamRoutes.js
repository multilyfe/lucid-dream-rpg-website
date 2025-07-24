const express = require('express');
const router = express.Router();
const { getAllDreams, createDream } = require('../models/dreamModel');

// GET all dreams
router.get('/', (req, res) => {
  getAllDreams((err, dreams) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(dreams);
  });
});

// POST a new dream
router.post('/', (req, res) => {
  const dream = req.body;
  createDream(dream, (err, newDream) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json(newDream);
  });
});

module.exports = router;