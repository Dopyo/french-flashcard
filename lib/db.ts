// lib/db.ts
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const dbPath = process.env.DATABASE_URL || './db/anki_french/collection.anki2';

export const initDb = async () => {
  const db = await open({
    filename: dbPath,
    driver: sqlite3.Database,
  });

  // You can add initialization code here if needed
  return db;
};