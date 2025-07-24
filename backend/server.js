const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { initDB } = require('./database');

const dreamRoutes = require('./routes/dreamRoutes');
const questRoutes = require('./routes/questRoutes');
const waifuRoutes = require('./routes/waifuRoutes');
const xpRoutes = require('./routes/xpRoutes');
const shameRoutes = require('./routes/shameRoutes');

// Initialize SQLite database and create tables
initDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Register routes
app.use('/dreams', dreamRoutes);
app.use('/quests', questRoutes);
app.use('/waifus', waifuRoutes);
app.use('/xp', xpRoutes);
app.use('/shame', shameRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Lucid Dream RPG API running' });
});

app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});