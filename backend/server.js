const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const db = new sqlite3.Database('database.sqlite', (err) => {
  if (err) console.error(err.message);
  else console.log('Connected to SQLite database');
});

db.run("CREATE TABLE IF NOT EXISTS dreams(id INTEGER PRIMARY KEY, title TEXT, content TEXT)");
db.run("CREATE TABLE IF NOT EXISTS people(id INTEGER PRIMARY KEY, name TEXT)");
db.run("CREATE TABLE IF NOT EXISTS places(id INTEGER PRIMARY KEY, name TEXT)");
db.run("CREATE TABLE IF NOT EXISTS emotions(id INTEGER PRIMARY KEY, name TEXT)");

app.get('/dreams', (req, res) => {
  db.all("SELECT * FROM dreams", [], (err, rows) => {
    if (err) res.status(500).json({error: err.message});
    else res.json(rows);
  });
});

app.post('/dreams', (req, res) => {
  const {title, content} = req.body;
  db.run("INSERT INTO dreams(title, content) VALUES(?,?)", [title, content], function(err){
    if (err) res.status(500).json({error: err.message});
    else res.json({id: this.lastID});
  });
});

['people','places','emotions'].forEach(table => {
  app.get('/' + table, (req, res) => {
    db.all("SELECT * FROM " + table, [], (err, rows) => {
      if (err) res.status(500).json({error: err.message});
      else res.json(rows);
    });
  });
  app.post('/' + table, (req, res) => {
    const {name} = req.body;
    db.run("INSERT INTO " + table + "(name) VALUES(?)", [name], function(err){
      if (err) res.status(500).json({error: err.message});
      else res.json({id: this.lastID});
    });
  });
});

app.listen(PORT, () => console.log('Backend server running on port ' + PORT));