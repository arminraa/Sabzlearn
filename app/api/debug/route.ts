import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const url = process.env.DATABASE_URL;
    const maskedUrl = url ? url.replace(/:([^@]+)@/, ':***@') : 'NOT SET';
    const tables = await prisma.$queryRaw`SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'`;
    return NextResponse.json({ databaseUrl: maskedUrl, tables });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: message, dbSet: !!process.env.DATABASE_URL });
  }
}
