// Locolhost PostgreSQL 

const { Pool } = require('pg');

const pool = new Pool({
  user: 'giovannimasala',
  host: 'localhost',
  database: 'MfumuBuku',
  password: 'Tupex@2024',
  port: 5433 // Port par défaut de PostgreSQL
});

module.exports = pool;
