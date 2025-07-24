const { getDB } = require('../database');

function getAllQuests(callback) {
  const db = getDB();
  db.all('SELECT * FROM quests', [], (err, rows) => callback(err, rows));
}

function createQuest(quest, callback) {
  const { name, status, reward, xp_reward, legendary } = quest;
  const db = getDB();
  db.run(
    `INSERT INTO quests (name, status, reward, xp_reward, legendary) VALUES (?, ?, ?, ?, ?)`,
    [name, status, reward, xp_reward, legendary ? 1 : 0],
    function (err) {
      callback(err, { id: this.lastID, ...quest });
    }
  );
}

module.exports = { getAllQuests, createQuest };