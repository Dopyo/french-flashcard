import { NextRequest, NextResponse } from 'next/server';
import * as sqlite3 from 'sqlite3';
import * as path from 'path';

// Define an interface for the notes
interface NoteRow {
  id: number;
  flds: string;
  mid: number;
}

interface Note {
  id: number;
  fields: string[];
  model: number;
}

// Initialize the SQLite database
const db = new sqlite3.Database(path.join(process.cwd(), 'db', 'anki_french', 'collection.anki2'));

export async function GET(req: NextRequest) {
  try {
    // Query to get notes from the Anki database
    const query = 'SELECT id, flds, mid FROM notes';

    // Execute the query
    return new Promise<NextResponse>((resolve, reject) => {
      db.all(query, [], (err, rows: unknown[]) => {
        if (err) {
          console.error('Error reading Anki file:', err);
          reject(NextResponse.json({ error: 'Failed to read Anki file' }, { status: 500 }));
        } else {
          // Cast rows to the specific type and extract the notes (cards) from the query result
          const notes: Note[] = (rows as NoteRow[]).map(row => ({
            id: row.id,
            fields: row.flds.split('\x1f'), // Split fields by the delimiter
            model: row.mid,
          }));

          // Send the notes as the response
          resolve(NextResponse.json(notes));
        }
      });
    });
  } catch (error) {
    console.error('Error reading Anki file:', error);
    return NextResponse.json({ error: 'Failed to read Anki file' }, { status: 500 });
  } finally {
    // Close the database connection
    db.close();
  }
}