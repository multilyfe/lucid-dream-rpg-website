const express = require('express');
const router = express.Router();
const { getXP, updateXP } = require('../models/xpModel');

// GET current XP status
router.get('/', (req, res) => {
  getXP((err, xp) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(xp);
  });
});

// PUT update XP
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { total_xp, level } = req.body;
  updateXP({ id, total_xp, level }, (err, updated) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(updated);
  });
});

module.exports = router;