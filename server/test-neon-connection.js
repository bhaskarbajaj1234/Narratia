import { neon } from '@neondatabase/serverless';
import 'dotenv/config';

const sql = neon(process.env.DATABASE_URL);

async function testConnection() {
  try {
    const result = await sql`SELECT 1 as test`;
    console.log('Connection successful:', result);
  } catch (error) {
    console.error('Connection failed:', error);
  }
}

testConnection();
