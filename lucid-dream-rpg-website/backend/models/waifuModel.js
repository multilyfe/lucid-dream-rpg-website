const { getDB } = require('../database');

function getAllWaifus(callback) {
  const db = getDB();
  db.all('SELECT * FROM waifus', [], (err, rows) => callback(err, rows));
}

function createWaifu(waifu, callback) {
  const { name, buff, unlock_progress, image_url } = waifu;
  const db = getDB();
  db.run(
    `INSERT INTO waifus (name, buff, unlock_progress, image_url) VALUES (?, ?, ?, ?)`,
    [name, buff, unlock_progress, image_url],
    function (err) {
      callback(err, { id: this.lastID, ...waifu });
    }
  );
}

module.exports = { getAllWaifus, createWaifu };