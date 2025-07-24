const { getDB } = require('../database');

/**
 * Get the current XP record (assuming a single row).
 */
function getXP(callback) {
  const db = getDB();
  db.get('SELECT * FROM xp LIMIT 1', [], (err, row) => callback(err, row));
}

/**
 * Update total XP and level.
 */
function updateXP(xpRecord, callback) {
  const { id, total_xp, level } = xpRecord;
  const db = getDB();
  db.run(
    `UPDATE xp SET total_xp = ?, level = ? WHERE id = ?`,
    [total_xp, level, id],
    function (err) {
      callback(err, { id, total_xp, level });
    }
  );
}

module.exports = { getXP, updateXP };