import dotenv from 'dotenv';
import sql from 'mssql';

dotenv.config();

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_HOST,
  database: process.env.DB_NAME,
  port: 1433, // Optional, defaults to 1433
  options: {
    encrypt: true, // Required for Azure SQL
    trustServerCertificate: false, // Change to true if using self-signed certs
  },
};

let pool;

export async function connectToDatabase() {
  if (!pool) {
    pool = await sql.connect(config);
  }
  return pool;
}