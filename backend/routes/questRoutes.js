const express = require('express');
const router = express.Router();
const { getAllQuests, createQuest } = require('../models/questModel');

router.get('/', (req, res) => {
  getAllQuests((err, quests) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(quests);
  });
});

router.post('/', (req, res) => {
  const quest = req.body;
  createQuest(quest, (err, newQuest) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json(newQuest);
  });
});

module.exports = router;