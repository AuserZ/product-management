import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
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
    const db = await connectToDatabase();
    
    console.log('connection established');

    let query = QUERY_DASHBOARD;
    console.log('query:', query);

    const result = await db.request().query(query);
    const response = NextResponse.json(result.recordset);

    console.log('Response', response);
    console.log('end - Dashboard GET');
    return response;
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}