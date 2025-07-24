const { getDB } = require('../database');

/**
 * Fetch all dreams from the database.
 */
function getAllDreams(callback) {
  const db = getDB();
  db.all('SELECT * FROM dreams ORDER BY date DESC', [], (err, rows) => {
    callback(err, rows);
  });
}

/**
 * Create a new dream entry.
 */
function createDream(dream, callback) {
  const db = getDB();
  const {
    date,
    emotions,
    type,
    patterns,
    people,
    location,
    favorite,
    rating,
    quest,
    xp_awarded,
    lucidity_level,
    dream_signs
  } = dream;

  db.run(
    `INSERT INTO dreams (date, emotions, type, patterns, people, location, favorite, rating, quest, xp_awarded, lucidity_level, dream_signs)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      date,
      emotions,
      type,
      patterns,
      people,
      location,
      favorite ? 1 : 0,
      rating,
      quest,
      xp_awarded,
      lucidity_level,
      dream_signs
    ],
    function (err) {
      callback(err, { id: this.lastID, ...dream });
    }
  );
}

module.exports = { getAllDreams, createDream };