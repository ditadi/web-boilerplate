/* eslint-disable turbo/no-undeclared-env-vars */
import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';

const client = createClient({
  url: process.env.DATABASE_URL ? process.env.DATABASE_URL : 'https://localhost',
  authToken: process.env.DATABASE_AUTH_TOKEN ? process.env.DATABASE_AUTH_TOKEN : 'localhost',
});

export const db = drizzle(client);
