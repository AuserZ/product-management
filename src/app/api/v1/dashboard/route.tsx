import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';
import { z } from 'zod';
import dotenv from 'dotenv';
import { QUERY_DASHBOARD } from '@/lib/Query';

dotenv.config();

// Define a schema for input validation using Zod
// const bodyRequest = z.object({
//   productName: z.string().optional(),
//   productPrice: z.number().optional(),
//   totalItems: z.number().optional(),
//   soldCount: z.number().optional(),
//   warehouseLocID: z.string().optional(),
//   vendorID: z.string().optional(),
// });

export async function POST(request: NextRequest): Promise<NextResponse> {
  // Basic authorization check
  const apiKey = request.headers.get('x-api-key');
  console.log(apiKey);
  console.log(process.env.X_API_KEY);
  if (apiKey !== process.env.X_API_KEY) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Parse and validate request body
  // const body = await request.json();
  // const validationResult = bodyRequest.safeParse(body);
  // if (!validationResult.success) {
  //   return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  // }

  // const { productName, productPrice, totalItems, soldCount, warehouseLocID, vendorID } = validationResult.data;

  let conn;
  try {
    conn = await pool.getConnection();

    let query = QUERY_DASHBOARD;

    const rows = await conn.query(query);
    return NextResponse.json(rows);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  } finally {
    if (conn) conn.release();
  }
}