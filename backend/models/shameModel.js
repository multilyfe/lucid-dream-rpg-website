const { getDB } = require('../database');

function getShame(callback) {
  const db = getDB();
  db.get('SELECT * FROM shame LIMIT 1', [], (err, row) => callback(err, row));
}

function updateShame(shameRecord, callback) {
  const { id, panty_tally, dirty_tokens, shame_xp } = shameRecord;
  const db = getDB();
  db.run(
    `UPDATE shame SET panty_tally = ?, dirty_tokens = ?, shame_xp = ? WHERE id = ?`,
    [panty_tally, dirty_tokens, shame_xp, id],
    function (err) {
      callback(err, { id, panty_tally, dirty_tokens, shame_xp });
    }
  );
}

module.exports = { getShame, updateShame };