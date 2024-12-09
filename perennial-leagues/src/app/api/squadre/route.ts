'use server'

import { db } from "@vercel/postgres";
import { NextResponse } from 'next/server';

export async function getSquadra(squadra: string) {

    try {
        const client = await db.connect();
        const rows =  await client.sql`SELECT * FROM squadre WHERE LOWER(squadra) = ${squadra}`;

        if (rows.rowCount === 0) {
            client.release();
            return NextResponse.json({ error: 'Squadra non trovata' }, { status: 404 });
        }
    
        client.release();
        return NextResponse.json(rows.rows, { status: 200 });
    } catch (error) {
        console.error('Errore durante l\'esecuzione della query:', error);
        return NextResponse.json({ error: 'Errore durante l\'esecuzione della query' }, { status: 500 });
    }
}