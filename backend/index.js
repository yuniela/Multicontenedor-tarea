const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST || 'db',
  user: process.env.DATABASE_USER || 'finuser',
  password: process.env.DATABASE_PASSWORD || 'finpass',
  database: process.env.DATABASE_NAME || 'fintechdb'
});

app.get('/', (req, res) => {
  db.query('SELECT NOW() AS now', (err, result) => {
    if (err) return res.status(500).send(err);
    res.send(`Backend funcionando. Hora BD: ${result[0].now}`);
  });
});

app.listen(port, () => console.log(`Backend escuchando en puerto ${port}`));
