const express = require('express');
const router = express.Router();
const { getAllWaifus, createWaifu } = require('../models/waifuModel');

router.get('/', (req, res) => {
  getAllWaifus((err, waifus) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(waifus);
  });
});

router.post('/', (req, res) => {
  const waifu = req.body;
  createWaifu(waifu, (err, newWaifu) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json(newWaifu);
  });
});

module.exports = router;