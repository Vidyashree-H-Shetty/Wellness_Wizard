//USE THIS WHILE WORKING IN DEVELOPMENT MODE
// const { Pool } = require('pg');
// require('dotenv').config();

// const isProduction = process.env.NODE_ENV === 'production';

// const pool = new Pool({
//   connectionString: isProduction ? process.env.DATABASE_URL : `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`,
//   ssl: isProduction ? { rejectUnauthorized: false } : false, // Ensure compatibility with Render's database
// });

// module.exports = { pool };


//USE THIS WHILE WORKING IN PRODUCTION MODE(DEPLOYMENT)
require('dotenv').config();
const { Pool } = require('pg');

const isProduction = process.env.NODE_ENV === 'production';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }  // Force SSL for Render
});

module.exports = { pool };
