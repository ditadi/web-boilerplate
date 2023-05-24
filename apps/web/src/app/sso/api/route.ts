import { NextResponse } from 'next/server';
import { userParser, users } from '../../../models/schema';
import { db } from '../../../db/adapter';

export async function POST(request: Request) {
  const userRaw = await request.json();
  const newUser = userParser(userRaw);

  try {
    const user = await db.insert(users).values(newUser).returning().get();

    return NextResponse.json({ data: user });
  } catch (e) {
    console.log(e);
  }
}
