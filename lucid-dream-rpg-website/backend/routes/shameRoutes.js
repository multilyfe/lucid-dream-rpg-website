const express = require('express');
const router = express.Router();
const { getShame, updateShame } = require('../models/shameModel');

// GET current shame stats
router.get('/', (req, res) => {
  getShame((err, shame) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(shame);
  });
});

// PUT update shame stats
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { panty_tally, dirty_tokens, shame_xp } = req.body;
  updateShame({ id, panty_tally, dirty_tokens, shame_xp }, (err, updated) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(updated);
  });
});

module.exports = router;