const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Path to the SQLite file stored in the backend directory
const DB_PATH = path.join(__dirname, 'database.db');

let db;

/**
 * Initialize the SQLite database, create tables if they do not exist,
 * and insert some dummy data to get the application started.
 */
function initDB() {
  db = new sqlite3.Database(DB_PATH, (err) => {
    if (err) {
      console.error('Error opening database:', err);
    } else {
      console.log('Connected to SQLite database');
    }
  });

  // Dreams table
  db.run(
    `CREATE TABLE IF NOT EXISTS dreams (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      date TEXT,
      emotions TEXT,
      type TEXT,
      patterns TEXT,
      people TEXT,
      location TEXT,
      favorite BOOLEAN,
      rating INTEGER,
      quest TEXT,
      xp_awarded INTEGER,
      lucidity_level TEXT,
      dream_signs TEXT
    )`,
    (err) => {
      if (err) {
        console.error('Error creating dreams table:', err);
      } else {
        // Insert dummy dream if table is empty
        db.get('SELECT COUNT(*) as count FROM dreams', (err, row) => {
          if (!err && row.count === 0) {
            db.run(
              `INSERT INTO dreams (date, emotions, type, patterns, people, location, favorite, rating, quest, xp_awarded, lucidity_level, dream_signs) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
              [
                '07-24-2025',
                'Excited, Curious',
                'Lucid',
                'Flying',
                'Candy Siren',
                'Sky Palace',
                1,
                9,
                'The Awakening of Lucidia',
                120,
                'High',
                'Mirrors, Glowing Hands'
              ],
              (err) => {
                if (err) console.error('Error inserting dummy dream:', err);
              }
            );
          }
        });
      }
    }
  );

  // Quests table
  db.run(
    `CREATE TABLE IF NOT EXISTS quests (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      status TEXT,
      reward TEXT,
      xp_reward INTEGER,
      legendary BOOLEAN
    )`,
    (err) => {
      if (err) {
        console.error('Error creating quests table:', err);
      } else {
        db.get('SELECT COUNT(*) as count FROM quests', (err, row) => {
          if (!err && row.count === 0) {
            db.run(
              `INSERT INTO quests (name, status, reward, xp_reward, legendary) VALUES (?, ?, ?, ?, ?)`,
              [
                'The Shattered Veil of Lucidia',
                'Active',
                'Astral Key',
                300,
                1
              ],
              (err) => {
                if (err) console.error('Error inserting dummy quest:', err);
              }
            );
          }
        });
      }
    }
  );

  // Waifus table
  db.run(
    `CREATE TABLE IF NOT EXISTS waifus (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      buff TEXT,
      unlock_progress INTEGER,
      image_url TEXT
    )`,
    (err) => {
      if (err) {
        console.error('Error creating waifus table:', err);
      } else {
        db.get('SELECT COUNT(*) as count FROM waifus', (err, row) => {
          if (!err && row.count === 0) {
            db.run(
              `INSERT INTO waifus (name, buff, unlock_progress, image_url) VALUES (?, ?, ?, ?)`,
              [
                'Candy Siren',
                '+20% Lucidity XP',
                40,
                '/images/candy_siren.png'
              ],
              (err) => {
                if (err) console.error('Error inserting dummy waifu:', err);
              }
            );
          }
        });
      }
    }
  );

  // XP table
  db.run(
    `CREATE TABLE IF NOT EXISTS xp (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      total_xp INTEGER,
      level TEXT
    )`,
    (err) => {
      if (err) {
        console.error('Error creating xp table:', err);
      } else {
        db.get('SELECT COUNT(*) as count FROM xp', (err, row) => {
          if (!err && row.count === 0) {
            db.run(
              `INSERT INTO xp (total_xp, level) VALUES (?, ?)`,
              [0, 'Dream Novice'],
              (err) => {
                if (err) console.error('Error inserting initial XP row:', err);
              }
            );
          }
        });
      }
    }
  );

  // Shame table
  db.run(
    `CREATE TABLE IF NOT EXISTS shame (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      panty_tally INTEGER,
      dirty_tokens INTEGER,
      shame_xp INTEGER
    )`,
    (err) => {
      if (err) {
        console.error('Error creating shame table:', err);
      } else {
        db.get('SELECT COUNT(*) as count FROM shame', (err, row) => {
          if (!err && row.count === 0) {
            db.run(
              `INSERT INTO shame (panty_tally, dirty_tokens, shame_xp) VALUES (?, ?, ?)`,
              [0, 0, 0],
              (err) => {
                if (err) console.error('Error inserting initial shame row:', err);
              }
            );
          }
        });
      }
    }
  );
}

/**
 * Return the database connection instance. The database should be initialized
 * via initDB() before calling this function.
 */
function getDB() {
  return db;
}

module.exports = { initDB, getDB };