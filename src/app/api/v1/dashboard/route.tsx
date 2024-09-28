import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';
import dotenv from 'dotenv';
import { QUERY_DASHBOARD } from '@/lib/Query';

dotenv.config();

export async function GET(request: NextRequest): Promise<NextResponse> {
  // Basic authorization check
  const apiKey = request.headers.get('x-api-key');
  if (apiKey !== process.env.X_API_KEY) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let conn;
  try {
    console.log('start - Dashboard GET');
    conn = await pool.getConnection();
    
    console.log('connection established');

    let query = QUERY_DASHBOARD;
    console.log('query:', query);

    const rows = await conn.query(query);
    const response = NextResponse.json(rows);

    console.log('Response', response);
    console.log('end - Dashboard GET');
    return response;
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  } finally {
    if (conn) conn.release();
  }
}